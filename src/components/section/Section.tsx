import React from 'react'
import {SectionType} from "../../common/customType";
import SectionTitle from "./SectionTitle";
import {Box, Button, Link, MobileStepper} from "@mui/material";
import {theme} from "../../theme/themeProvider";
import {KeyboardArrowLeft, KeyboardArrowRight} from "@mui/icons-material";
import SwipeableViews from 'react-swipeable-views';
import {autoPlay} from 'react-swipeable-views-utils';
import {style} from "../../theme/style";
import SectionDetail from "./SectionDetail";
import Grid2 from "@mui/material/Unstable_Grid2";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

interface SectionProps {
    data: SectionType,
}

const Section = (props: SectionProps) => {

    const {data} = props
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = data && data.details ? data.details.length : 0;
    const component = data.component ? React.createElement(data.component, {}) : undefined;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const handleStepChange = (step: number) => {
        setActiveStep(step);
    };
    return (
        <Box sx={{m: '10px'}}>
            <SectionTitle data={data}/>
            <Box
                sx={{
                    ...style.common.margin,
                }}>
                {data.details && data.details.map((detail, index) => (
                    <SectionDetail
                        data={detail}
                        activeStep={activeStep}
                        index={index}
                        invert={index % 2 === 0}
                        key={detail.title}
                    />))
                }
                {data.images && (
                    <Grid2 container spacing={2}>
                        {data.images.map(image => (
                            <Grid2 xs={6} sx={{textAlign: 'center'}} key={image.path}>
                                <Link href={image.ref}>
                                    <img src={image.path}
                                         style={{
                                             margin: '0 auto',
                                             maxHeight: '35vmin',
                                             maxWidth: '35vmin'
                                         }}/>
                                </Link>
                            </Grid2>
                        ))}
                    </Grid2>
                )}
                {component}
            </Box>
        </Box>)
}

export default Section;