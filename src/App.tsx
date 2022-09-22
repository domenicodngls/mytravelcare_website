import React from 'react';
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

function App() {
    return (
            <ThemeProvider theme={theme}>
                <div
                    className="App"
                    style={{backgroundColor: "#EEEEEE"}}>
                    <Header></Header>
                    <Body></Body>
                    <NavigationBar></NavigationBar>
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
