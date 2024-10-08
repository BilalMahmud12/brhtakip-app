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
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { navigation } from '@/config/navigation';
import Icon from '@/components/core/icon';
import { useRouter } from 'next-nprogress-bar';
import Image from 'next/image';
import UserAccountMenu from './src/userAccountMenu';
import { signOut } from "aws-amplify/auth"
import { toast } from 'sonner';

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
    width: 0, //`calc(${theme.spacing(7)} + 1px)` 0,
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

    const currentClientProfile = useAppSelector((state: RootState) => state.global.currentClientProfile);
    const currentClientProfileRef = useRef(currentClientProfile);
    currentClientProfileRef.current = currentClientProfile;

    const BRHAdminProfileId = globalConstants.clientProfileId;

    const navigationItems = navigation.map((navGroup) => {
        navGroup.items = navGroup.items.map((item, index) => {
            let updatedItem = item
            if (navGroup.section_name === 'yonet' && index === 0) {
                updatedItem.href = currentUserProfileRef.current.clientprofileID !== BRHAdminProfileId ? '/dashboard/requests/pending-client-approval' : '/dashboard/requests';
            }
           
            return updatedItem
        })
        return navGroup
    })

    const fetchClientsData = async () => {
        const clientsData = await Repo.ClientProfileRepository.getClientProfiles();
        dispatch(setClientProfiles(clientsData || []))
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

    const handleLogOut = async () => {
        toast.success('Güvenli Çıkış yapıldı, görüşmek üzere!');
        await signOut()
        router.push('/login')
    }

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
                        width={130}
                        height={70}
                        className='cursor-pointer w-[130px] h-[70px]'
                        onClick={() => router.push('/dashboard')}
                        priority 
                    />

                
                    <div className='ml-auto flex items-center justify-end space-x-3'>
                        {/* <UserNotificationMenu /> */}
                        <UserAccountMenu /> 
                    </div>
                </Toolbar>
            </AppBar>

            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>

                {navigationItems.map((navGroup, index) => (
                    <div key={`${navGroup.section_name}-${index}`}> 
                        <List>
                            {navGroup.items
                                .filter((item) => {
                                    if (item.href === '/dashboard/clients' && currentUserProfileRef.current.clientprofileID !== 'BRH_ADMIN') {
                                        return false;
                                    }

                                    return true
                                })
                                .map((item, index) => (
                                <ListItem key={`${item.name}-${index}`} sx={{ display: 'block' }} disablePadding>
                                    <Tooltip title={item.name} placement="right" arrow>
                                        <ListItemButton
                                            sx={{
                                                minHeight: 48,
                                                justifyContent: open ? 'initial' : 'center',
                                                px: 2.5,
                                            }}
                                            onClick={() => {
                                                handleDrawerClose();
                                                router.push(item.href)
                                            }}
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
                    {['Logout'].map((text) => (
                        <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                            <Tooltip title="Güvenli Çıkış" placement="right" arrow>
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? 'initial' : 'center',
                                        px: 2.5,
                                    }}
                                    onClick={handleLogOut}
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

            <Box component="main" sx={{ flexGrow: 1, p: 3, background: '#f4f4f5', marginTop: '71px', minHeight: 'calc(100vh - 71px)' }}>
                {children}
                <div className='fixed bottom-0 left-0 px-6 py-1.5 bg-white w-full border-t border-zinc-200'>
                    <div className='flex items-center justify-between ml-[64px]'>
                        <span className='text-xs text-gray-800 font-medium flex items-center space-x-2'>
                            <span className='block w-2 h-2 rounded-full bg-green-600'></span>
                            <span>Kullanıcı:</span>
                            <span className='font-normal'>{currentUserProfile?.firstName} {currentUserProfile?.lastName}</span>
                        </span>

                        <span className='text-xs text-gray-800 font-medium flex items-center space-x-2'>
                            <span>Kurumsal Hesabı:</span>
                            <span className='font-normal'>{currentClientProfileRef.current.name}</span>
                        </span>
                    </div>
                </div>
            </Box>
        </Box>
    );
}