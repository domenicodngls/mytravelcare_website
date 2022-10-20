import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {site_it} from "../content_it/content";
import {site_en} from "../content_en/content";
import logo from "../icons/logo.svg";
import {style} from "../theme/style";
import {Scroll} from "../common/scroller";

interface HeaderProps {
    language: string;
}

const Header = (props: HeaderProps) => {
    const { language } = props;
    let Element = Scroll.Element;

    const site = language === "it" ? site_it: site_en;

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
