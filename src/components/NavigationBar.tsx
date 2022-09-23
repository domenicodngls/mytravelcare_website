import * as React from 'react';
import {sectionList} from "../content/section";
import {Button, ButtonGroup} from "@mui/material";
import {style} from "../theme/style";
import {scroller} from "../common/scroller";

interface NavigationProps {
    offset: number;
}

const NavigationBar = (props: NavigationProps) => {

    return (
        <ButtonGroup
            sx={style.navigationBar.buttonGroup}>
            {sectionList.map(section => (
                <Button
                    key={`${section.title}-button`}
                    variant="contained"
                    color={section.color}
                    sx={{...style.navigationBar.button}}
                    onClick={() => {
                        scroller.scrollTo(section.id, {
                            smooth: true,
                            delay: 100,
                            offset: props.offset
                        })
                    }}>
                    {section.title}
                </Button>
            ))}
        </ButtonGroup>
    );
}

export default NavigationBar