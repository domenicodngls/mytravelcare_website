import * as React from 'react';
import {sectionList} from "../content/section";
import {Button, ButtonGroup} from "@mui/material";
import {theme} from "../theme/themeProvider";

const NavigationBar = () => {
    return (
        <ButtonGroup sx={{
            mt: 5,
            height: '7vmin',
            width: '100%'
        }}>
            {sectionList.map(section => (
                <Button variant="contained" sx={{
                    mr: 1,
                    ml: 1,
                    width: `${100 / sectionList.length}%`,
                    height: '7vmin',
                    fontWeight: 600,
                    fontSize: '3.2vmin'
                }}
                        href={section.href}>
                    {section.title}
                </Button>
            ))}
        </ButtonGroup>
    );
}

export default NavigationBar