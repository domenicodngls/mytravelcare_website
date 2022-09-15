import * as React from 'react';
import Typography from "@mui/material/Typography";
import {site} from "../content/content";
import logo from "../icons/logo.svg";
import Container from "@mui/material/Container";
import {theme} from "../theme/themeProvider";

const Body = () => {
        const style = {
            containerFlexColumn: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: {lg: 'flex-end', md: 'center'}
            },
            containerFlex: {
                display: 'flex',
                alignItems: 'center'
            },
            logo: {
                display: 'flex',
                height: '45vmin',
            },
        };
        return (
            <>
                <Container maxWidth="xl" sx={style.containerFlex}>
                    <Container maxWidth="xl" sx={style.containerFlexColumn}>
                        <Typography
                            variant="h1"
                            noWrap
                            sx={{
                                mr: 2,
                                display: 'flex',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                textDecoration: 'none',
                                fontSize: '10vmin',
                            }}
                        >
                            {site.title}
                        </Typography>
                        <Typography
                            variant="h1"
                            sx={{
                                mr: 2,
                                display: 'flex',
                                letterSpacing: '.3rem',
                                textDecoration: 'none',
                                fontSize: '2.5vmin'
                            }}
                        >
                            {site.description}
                        </Typography>
                    </Container>
                    <Container sx={{display: {xs: 'none', sm: 'none', lg: 'flex'}, flexBasis: 'fit-content'}}>
                        <img src={logo} style={style.logo} alt="logo"/>
                    </Container>
                </Container>
                <Typography
                    sx={{
                        mt:5,
                        mr: 5,
                        ml: 5,
                        display: 'flex',
                        letterSpacing: '.1rem',
                        textDecoration: 'none',
                        fontSize: '2.5vmin'
                    }}
                >
                    {site.long_description}
                </Typography>
            </>);
    }
;
export default Body;