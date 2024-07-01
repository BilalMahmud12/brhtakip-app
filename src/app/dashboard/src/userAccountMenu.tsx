'use client'
import React from 'react';
import { useAppSelector } from '@/reduxStore/hooks';
import { RootState } from '@/reduxStore/store';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import { blue } from '@mui/material/colors';
import { signOut } from "aws-amplify/auth"
import { toast } from 'sonner';
import { useRouter } from 'next-nprogress-bar';

const UserAccountMenu: React.FC = () => {
    const router = useRouter();
    const user = useAppSelector((state: RootState) => state.global.currentUserProfile);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogOut = async () => {
        toast.success('Güvenli Çıkış yapıldı, görüşmek üzere!');
        await signOut()
        router.push('/login')
    }

    return (
        <React.Fragment>
            <Tooltip title="Account settings">
                <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{  }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                >
                    <Avatar sx={{ width: 36, height: 36, bgcolor: blue[600] }}>
                        {user?.firstName?.split(' ').map((name) => name[0]).join('')}
                    </Avatar>
                </IconButton>
            </Tooltip>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&::before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                sx={{ minWidth: '220px' }}
            >
                <MenuItem onClick={handleClose}>
                    <Avatar sx={{ width: 24, height: 24 }} /> Benim Hesabım
                </MenuItem>
                <Divider />
                
                <MenuItem onClick={handleLogOut}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Güvenli Çıkış
                </MenuItem>
            </Menu>
        </React.Fragment>
    )
}

export default UserAccountMenu;