import * as React from 'react';
import {Button, ButtonGroup} from "@mui/material";
import {style} from "../theme/style";
import {scroller} from "../common/scroller";
import {getSectionByLanguage} from "../common/function";

interface NavigationProps {
    offset: number;
    language: string
}

const NavigationBar = (props: NavigationProps) => {

    const {language, offset} = props;
    const sectionList = getSectionByLanguage(language);

    return (
        <ButtonGroup
            sx={style.navigationBar.buttonGroup}>
            {sectionList.filter(section => section.title.trim() !== "").map(section => (
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