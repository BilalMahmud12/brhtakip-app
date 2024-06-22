'use client'
import React, { useEffect, useRef } from 'react';
import * as Repo from '@/repository/index';
import { loadUserData } from '@/services/userService';
import { usePathname } from 'next/navigation';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { useAppSelector, useAppDispatch } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import { setCurrentPageTitle } from '@/reduxStore/features/globalSlice';
import { setClientProfiles } from '@/reduxStore/features/clientSlice';
import { globalConstants } from '@/config';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { navigation } from '@/config/navigation';
import Icon from '@/components/core/icon';
import { useRouter } from 'next-nprogress-bar';
import Image from 'next/image';
import UserAccountMenu from './src/userAccountMenu';
import UserNotificationMenu from './src/userNotificationMenu';

const drawerWidth = 280;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const router = useRouter();
    const pathname = usePathname();
    const { user } = useAuthenticator((context) => [context.user]);
    
    const dispatch = useAppDispatch<AppDispatch>();
    const currentPageTitle = useAppSelector((state: RootState) => state.global.currentPageTitle);
    
    const currentUserProfile = useAppSelector((state: RootState) => state.global.currentUserProfile);
    const currentUserProfileRef = useRef(currentUserProfile);
    const BRHAdminProfileId = globalConstants.clientProfileId;

    const fetchClientsData = async () => {
        const clientsData = await Repo.ClientProfileRepository.getClientProfiles();
        dispatch(setClientProfiles(clientsData || []))
    }

    const getCurrentClientName = () => {
        const currentClient = currentUserProfileRef.current?.clientprofileID;
        const client = currentUserProfileRef.current?.clientprofileID === BRHAdminProfileId ? 'BRH_ADMIN' : currentUserProfileRef.current?.clientprofileID;
        return client;
    }
    
    useEffect(() => {
        if (user) {
            const loadUser = async () => {
                await loadUserData(dispatch);
            };

            loadUser();
        }
    }, [user, dispatch])

    useEffect(() => {
        const pageTitle = document.getElementsByTagName('title')[0]?.innerText;
        const currentTitle: string = pageTitle?.split(' - ')[0] as string || '';

        if (pageTitle && currentTitle !== currentPageTitle) {
            dispatch(setCurrentPageTitle(currentTitle));
        }
    }, [pathname]);

    useEffect(() => {
        currentUserProfileRef.current = currentUserProfile;
        if (currentUserProfileRef.current?.clientprofileID === BRHAdminProfileId) {
            fetchClientsData();
        }        
    }, [currentUserProfile]);

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                open={open}
                position='fixed'
                sx={{ backgroundColor: 'white', boxShadow: 'none'}}
                className='border-b border-gray-200'
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 2,
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon className='text-black' />
                    </IconButton>

                    <Image
                        src="/logo.svg"
                        alt="Logo"
                        width={120}
                        height={30}
                        className='cursor-pointer mr-4'
                        onClick={() => router.push('/')} 
                    />

                    {/* <Divider orientation="vertical" flexItem /> */}

                    <div>
                        <h1 className='text-base font-medium text-black'>{currentPageTitle}</h1>
                    </div>

                    <div className='ml-auto flex items-center justify-end space-x-3'>
                        <UserNotificationMenu />
                        <UserAccountMenu /> 
                        
                        
                        <div className='hidden'>
                            <span className='flex flex-col ml-2'>
                                <span className='text-sm text-gray-800 font-medium'>{currentUserProfile?.firstName} {currentUserProfile?.lastName}</span>
                                <span className='text-xs text-gray-400'>{currentUserProfile?.email}</span>
                            </span>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>

            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>

                {navigation.map((navGroup, index) => (
                    <div key={`${navGroup.section_name}-${index}`}>
                        {/* {navGroup.show_title && (
                            <div className='text-gray-400 font-medium text-xs px-4 pt-2'>{navGroup.section_title}</div>
                        )} */}
                        
                        <List>
                            {navGroup.items.map((item, index) => (
                                <ListItem key={`${item.name}-${index}`} sx={{ display: 'block' }} disablePadding>
                                    <Tooltip title={item.name} placement="right" arrow>
                                        <ListItemButton
                                            sx={{
                                                minHeight: 48,
                                                justifyContent: open ? 'initial' : 'center',
                                                px: 2.5,
                                            }}
                                            onClick={() => router.push(item.href)}
                                        >
                                            <ListItemIcon
                                                sx={{
                                                    minWidth: 0,
                                                    mr: open ? 3 : 'auto',
                                                    justifyContent: 'center',
                                                }}
                                            >
                                                <Icon iconName={item.icon} className='text-2xl' />
                                            </ListItemIcon>
                                            <ListItemText primary={item.name} sx={{ opacity: open ? 1 : 0 }} />
                                        </ListItemButton>
                                    </Tooltip>
                                </ListItem>
                            ))}
                        </List>
                        <Divider />
                    </div>
                ))}

                <List>
                    {['Logout'].map((text, index) => (
                        <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                            <Tooltip title="Güvenli Çıkış" placement="right" arrow>
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? 'initial' : 'center',
                                        px: 2.5,
                                    }}
                                >
                                        <ListItemIcon
                                            sx={{
                                                minWidth: 0,
                                                mr: open ? 3 : 'auto',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            <Icon iconName='FcLock' className='text-2xl' />
                                        </ListItemIcon>
                                
                                    <ListItemText primary={'Güvenli Çıkış'} sx={{ opacity: open ? 1 : 0 }} />
                                </ListItemButton>
                            </Tooltip>
                        </ListItem>
                    ))}
                </List>
            </Drawer>

            <Box component="main" sx={{ flexGrow: 1, p: 3, background: '#f4f4f5', marginTop: '64px', minHeight: 'calc(100vh - 64px)' }}>
                {children}
            </Box>
        </Box>
    );
}