import React from 'react';
import './App.css';
import Header from "./components/header";
import {ThemeProvider} from "@mui/material";
import {theme} from "./theme/themeProvider";
import Body from './components/body';
import NavigationBar from "./components/navigationBar";

function App() {
    return (

        <ThemeProvider theme={theme}>
            <div className="App">
                <Header></Header>
                <Body></Body>
                <NavigationBar></NavigationBar>
            </div>
        </ThemeProvider>
    );
}

export default App;
