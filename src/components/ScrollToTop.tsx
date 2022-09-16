import * as React from 'react';
import {Box, Fade, useScrollTrigger} from "@mui/material";
import {scroller} from "../common/scroller";

interface Props {
    children: React.ReactElement;
}

const ScrollToTop = (props: Props) => {
    const { children } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
    });

    return (
        <Fade in={trigger}>
            <Box
                onClick={() => {
                    scroller.scrollTo("back-to-top", {
                        smooth: true,
                        delay: 100,
                    })
                }}
                role="presentation"
                sx={{position: 'fixed', bottom: 16, right: 16}}
            >
                {children}
            </Box>
        </Fade>
    );
}

export default ScrollToTop;