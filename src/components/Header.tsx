import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {site} from "../content/content";
import {theme} from "../theme/themeProvider";
import logo from "../icons/logo.svg";

const Header = () => {
    const style = {
        reverseColor: {
            backgroundColor: theme.palette.primary.contrastText,
            color: theme.palette.primary.main
        },
        logo: {
            height: '15vmin',
        }
    };
    return (
        <AppBar position="static">
            <Container maxWidth={false}>
                <Toolbar disableGutters>
                    <img src={logo} style={style.logo} alt="logo"/>
                    <Typography
                        variant="h6"
                        noWrap
                        sx={{
                            mr: 2,
                            display: 'flex',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
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
                        sx={{
                            mr: 2,
                            display: {xs: 'none', md: 'flex'},
                            fontWeight: 700,
                            letterSpacing: '.3rem',
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
export default Header;
