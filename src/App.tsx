import React, {useLayoutEffect, useState} from 'react';
import Header from "./components/Header";
import {Button, Fab, Menu, MenuItem, Select, SelectChangeEvent, ThemeProvider} from "@mui/material";
import {theme} from "./theme/themeProvider";
import Body from './components/Body';
import NavigationBar from "./components/NavigationBar";
import ScrollToTop from "./components/ScrollToTop";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {style} from "./theme/style";
import AppBar from "@mui/material/AppBar";
import Section from "./components/section/Section";
import ita from "./images/ita.svg";
import eng from "./images/eng.svg";
import {getSectionByLanguage} from "./common/function";

function App() {
    const [offset, setOffset] = useState(0);
    const [top, setTop] = useState(0);
    const [topLanguage, setTopLanguage] = useState('12px');
    const [language, setLanguage] = useState('en');
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const sectionList = getSectionByLanguage(language);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const navigationBar = <NavigationBar offset={offset} language={language}></NavigationBar>;

    const header = <Header language={language}></Header>;

    useLayoutEffect(() => {
        function calculateOffset() {
            const header = document.getElementById('header');
            const navigationBar = document.getElementById('navigationBar');
            setOffset(header && navigationBar ? (header.offsetHeight + navigationBar.offsetHeight) * (-1.7) : 0)
            setTop(header ? header.offsetHeight - 1 : 0)
            setTopLanguage(`${header ? ((header.offsetHeight / 2) - 26) : 24}px`)
        }

        function handleResize() {
            calculateOffset();
        }

        window.addEventListener("resize", handleResize, false);
        calculateOffset();

    })

    const handleLanguageChange = (event: any) => {
        setLanguage(event.target.parentElement.attributes["value"].value);
        handleClose();
    };

    return (
        <ThemeProvider theme={theme}>
            <div
                className="App"
                style={{backgroundColor: style.common.backgroundColor}}>
                {header}
                <Body language={language}></Body>
                <AppBar id="navigationBar" position={"sticky"}
                        sx={{top: top, backgroundColor: style.common.backgroundColor, boxShadow: "none"}}>
                    {navigationBar}
                </AppBar>
                <div style={{
                    position: 'fixed',
                    top: topLanguage,
                    right: 5,
                    zIndex: 1200
                }}>
                    <Button
                        id="demo-positioned-button"
                        aria-controls={open ? 'demo-positioned-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        {language === 'it' ? (
                            <img style={{height: '36px', width: '36px'}} src={ita}/>
                        ) : (
                            <img style={{height: '36px', width: '36px'}} src={eng}/>
                        )}
                    </Button>
                    <Menu
                        id="demo-positioned-menu"
                        aria-labelledby="demo-positioned-button"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                    >
                        <MenuItem value={'it'} onClick={handleLanguageChange}><img
                            style={{height: '36px', width: '36px'}} src={ita}/></MenuItem>
                        <MenuItem value={'en'} onClick={handleLanguageChange}><img
                            style={{height: '36px', width: '36px'}} src={eng}/></MenuItem>
                    </Menu>
                </div>
                {sectionList.map((section, index) => (
                    <Section
                        data={section}
                        key={section.id}
                    />
                ))}
                <ScrollToTop>
                    <Fab size="small" aria-label="scroll back to top">
                        <KeyboardArrowUpIcon/>
                    </Fab>
                </ScrollToTop>
            </div>
        </ThemeProvider>
    );
}

export default App;
