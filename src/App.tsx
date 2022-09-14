import React from 'react';
import Header from "./components/Header";
import {ThemeProvider} from "@mui/material";
import {theme} from "./theme/themeProvider";
import Body from './components/Body';
import NavigationBar from "./components/NavigationBar";
import SectionList from "./components/SectionList";

function App() {
    return (

        <ThemeProvider theme={theme}>
            <div className="App" style={{backgroundColor: "#EEEEEE"}}>
                <Header></Header>
                <Body></Body>
                <NavigationBar></NavigationBar>
                <SectionList></SectionList>
            </div>
        </ThemeProvider>
    );
}

export default App;
