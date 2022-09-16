import * as React from 'react';
import {sectionList} from "../content/section";
import {Button, ButtonGroup} from "@mui/material";
import {style} from "../theme/style";
import {scroller} from "../common/scroller";

const NavigationBar = () => {


    return (
        <ButtonGroup
            sx={style.navigationBar.buttonGroup}>
            {sectionList.map(section => (
                <Button
                    key={`${section.title}-button`}
                    variant="contained"
                    sx={style.navigationBar.button}
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