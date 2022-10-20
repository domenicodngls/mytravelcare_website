import * as React from 'react';
import {sectionListIt} from "../content_it/section";
import {sectionListEn} from "../content_en/section";
import {Button, ButtonGroup} from "@mui/material";
import {style} from "../theme/style";
import {scroller} from "../common/scroller";

interface NavigationProps {
    offset: number;
    language: string
}

const NavigationBar = (props: NavigationProps) => {

    const {language, offset} = props;
    const sectionList = language === "it" ? sectionListIt : sectionListEn;

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
                            offset: offset
                        })
                    }}>
                    {section.title}
                </Button>
            ))}
        </ButtonGroup>
    );
}

export default NavigationBar