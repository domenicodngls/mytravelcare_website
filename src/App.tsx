import React, {useEffect, useLayoutEffect, useState} from 'react';
import Header from "./components/Header";
import {Fab, ThemeProvider} from "@mui/material";
import {theme} from "./theme/themeProvider";
import Body from './components/Body';
import NavigationBar from "./components/NavigationBar";
import ScrollToTop from "./components/ScrollToTop";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Footer from "./components/Footer";
import Functionality from "./components/section/Functionality";
import Digitalization from "./components/section/Digitalization";
import AboutUs from "./components/section/AboutUs";
import Contact from "./components/section/Contact";
import {style} from "./theme/style";
import AppBar from "@mui/material/AppBar";

function App() {

    const [offset, setOffset] = useState(0)
    const [top, setTop] = useState(0)

    const navigationBar = <NavigationBar offset={offset}></NavigationBar>;

    const header = <Header></Header>;

    useLayoutEffect(() => {
        function calculateOffset() {
            const header = document.getElementById('header');
            const navigationBar = document.getElementById('navigationBar');
            setOffset(header && navigationBar ? (header.offsetHeight + navigationBar.offsetHeight) * (-2) : 0)
            setTop(header ? header.offsetHeight : 0)
            console.log(top);
        }

        function handleResize() {
            calculateOffset();
        }

        window.addEventListener("resize", handleResize, false);
        calculateOffset();

    })
    return (
        <ThemeProvider theme={theme}>
            <div
                className="App"
                style={{backgroundColor: style.common.backgroundColor}}>
                {header}
                <Body></Body>
                <AppBar id="navigationBar" position={"sticky"} sx={{top: top, backgroundColor:style.common.backgroundColor, boxShadow:"none"}}>
                    {navigationBar}
                </AppBar>
                <ScrollToTop>
                    <Fab size="small" aria-label="scroll back to top">
                        <KeyboardArrowUpIcon/>
                    </Fab>
                </ScrollToTop>
                <Functionality></Functionality>
                <Digitalization></Digitalization>
                <AboutUs></AboutUs>
                <Contact></Contact>
                <Footer></Footer>
            </div>
        </ThemeProvider>
    );
}

export default App;
