import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '@/components/core/logo';

const AppHeader: React.FC = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar 
                position='static'
                color='primary'
                sx={{ boxShadow: 'none', backgroundColor: 'white'}}
                className='border-b border-gray-200'
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={() => {}}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            //...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon className='text-red-500' />
                    </IconButton>

                    <Logo />
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default AppHeader