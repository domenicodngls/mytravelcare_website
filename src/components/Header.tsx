import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {site} from "../content/content";
import logo from "../icons/logo.svg";
import {style} from "../theme/style";
import {Scroll} from "../common/scroller";

const Header = () => {

    let Element = Scroll.Element;

    return (
        <>
            <Element name={"back-to-top"}/>
            <AppBar position="sticky" id={'header'}>
                <Container maxWidth={false}>
                    <Toolbar disableGutters>
                        <img src={logo}
                             style={style.header.logo}
                             alt="Logo"/>
                        <Typography
                            variant="h6"
                            noWrap
                            sx={{...style.header.reverseColorTitle, ...style.header.title}}
                        >
                            {site.title}
                        </Typography>
                        <Typography
                            variant="h6"
                            noWrap
                            sx={style.header.title}
                        >
                            {site.subtitle}
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
};
export default Header;
