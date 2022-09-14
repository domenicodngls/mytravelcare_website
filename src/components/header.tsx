import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import {site} from "../content/content";
import {theme} from "../theme/themeProvider";
import logo from "../icons/logo.png";

const ResponsiveAppBar = () => {
    const style = {
        reverseColor: {
        backgroundColor: theme.palette.primary.contrastText,
        color: theme.palette.primary.main
    },
    logo:{
        height: '15vmin',
    }};
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar>
                    <img src={logo} style={style.logo} alt="logo"/>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: 'flex',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'red',
                            textDecoration: 'none',
                            fontSize: '3.2vmin'
                        }}
                        style={style.reverseColor}
                    >
                        {site.title}
                    </Typography>

                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            fontSize: '3.2vmin'
                        }}
                    >
                        {site.subtitle}
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;
