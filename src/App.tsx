import React, {useEffect, useLayoutEffect, useState} from 'react';
import Header from "./components/Header";
import {Fab, ThemeProvider} from "@mui/material";
import {theme} from "./theme/themeProvider";
import Body from './components/Body';
import NavigationBar from "./components/NavigationBar";
import ScrollToTop from "./components/ScrollToTop";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {style} from "./theme/style";
import AppBar from "@mui/material/AppBar";
import {sectionList} from "./content/section";
import Section from "./components/section/Section";

function App() {

    const [offset, setOffset] = useState(0)
    const [top, setTop] = useState(0)

    const navigationBar = <NavigationBar offset={offset}></NavigationBar>;

    const header = <Header></Header>;

    useLayoutEffect(() => {
        function calculateOffset() {
            const header = document.getElementById('header');
            const navigationBar = document.getElementById('navigationBar');
            setOffset(header && navigationBar ? (header.offsetHeight + navigationBar.offsetHeight) * (-1.7) : 0)
            setTop(header ? header.offsetHeight : 0)
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
                <AppBar id="navigationBar" position={"sticky"}
                        sx={{top: top, backgroundColor: style.common.backgroundColor, boxShadow: "none"}}>
                    {navigationBar}
                </AppBar>
                {sectionList.map((section, index) => (
                    <Section
                        data={section}
                        invert={index % 2 === 0}
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
