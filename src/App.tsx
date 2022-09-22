import React from 'react';
import Header from "./components/Header";
import {Fab, ThemeProvider} from "@mui/material";
import {theme} from "./theme/themeProvider";
import Body from './components/Body';
import NavigationBar from "./components/NavigationBar";
import SectionList from "./components/SectionList";
import ScrollToTop from "./components/ScrollToTop";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Footer from "./components/Footer";

function App() {
    return (
            <ThemeProvider theme={theme}>
                <div
                    className="App"
                    style={{backgroundColor: "#EEEEEE"}}>
                    <Header></Header>
                    <Body></Body>
                    <NavigationBar></NavigationBar>
                    <SectionList></SectionList>
                    <ScrollToTop>
                        <Fab size="small" aria-label="scroll back to top">
                            <KeyboardArrowUpIcon/>
                        </Fab>
                    </ScrollToTop>
                    <Footer></Footer>
                </div>
            </ThemeProvider>
    );
}

export default App;
