import * as React from 'react';
import {sectionList} from "../content/section";
import {Button, ButtonGroup} from "@mui/material";
import {theme} from "../theme/themeProvider";

const NavigationBar = () => {
    let Scroll = require('react-scroll');
    let scroller = Scroll.scroller;

    return (
        <ButtonGroup sx={{
            mt: 5,
            mb: 5,
            height: 'fit-content',
            width: '100%',
            justifyContent: 'center'
        }}>
            {sectionList.map(section => (
                <Button key={`${section.title}-button`} variant="contained" sx={{
                    mr: 1,
                    ml: 1,
                    width: `${90 / sectionList.length}%`,
                    fontWeight: 600,
                    fontSize: '3vmin',
                    borderColor: theme.palette.primary.contrastText
                }}
                        onClick={() => {
                            scroller.scrollTo(section.title, {
                                smooth: true,
                                delay: 100,
                            })
                        }}>
                    {section.title}
                </Button>
            ))}
        </ButtonGroup>
    );
}

export default NavigationBar