import React from 'react'
import {sectionList} from "../../content/section";
import {SectionType} from "../../common/customType";
import SectionTitle from "./SectionTitle";
import {Box, Button, MobileStepper} from "@mui/material";
import {theme} from "../../theme/themeProvider";
import {KeyboardArrowLeft, KeyboardArrowRight} from "@mui/icons-material";
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import {style} from "../../theme/style";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


const Functionality = () => {

    const data: SectionType | null
        = sectionList.find(s => s.id === "functionality") || null

    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = data ? data.images.length : 0;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step: number) => {
        setActiveStep(step);
    };

    return data &&  (

            <>
                <SectionTitle data={data}/>
                <Box sx={{maxWidth: 600, flexGrow: 1, ...style.common.margin}}>
                    <AutoPlaySwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={activeStep}
                        onChangeIndex={handleStepChange}
                        enableMouseEvents
                    >
                        {data.images.map((image, index) => (
                            <div key={image.label}>
                                {Math.abs(activeStep - index) <= 2 ? (
                                    <Box
                                        component="img"
                                        sx={{
                                            height: 600,
                                            //display: 'block',
                                            //maxWidth: 600,
                                            //overflow: 'hidden',
                                            //width: '100%',
                                            ...style.common.margin
                                        }}
                                        src={image.imgPath}
                                        alt={image.label}
                                    />
                                ) : null}
                            </div>
                        ))}
                    </AutoPlaySwipeableViews>
                    <MobileStepper
                        steps={maxSteps}
                        position="static"
                        activeStep={activeStep}
                        nextButton={
                            <Button
                                size="small"
                                onClick={handleNext}
                                disabled={activeStep === maxSteps - 1}
                            >
                                {theme.direction === 'rtl' ? (
                                    <KeyboardArrowLeft/>
                                ) : (
                                    <KeyboardArrowRight/>
                                )}
                            </Button>
                        }
                        backButton={
                            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                {theme.direction === 'rtl' ? (
                                    <KeyboardArrowRight/>
                                ) : (
                                    <KeyboardArrowLeft/>
                                )}
                            </Button>
                        }
                    />
                </Box>
            </>)}

export default Functionality