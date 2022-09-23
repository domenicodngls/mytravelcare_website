import React from 'react'
import {SectionType} from "../../common/customType";
import SectionTitle from "./SectionTitle";
import {Box, Button, Collapse, IconButton, IconButtonProps, MobileStepper, styled} from "@mui/material";
import {theme} from "../../theme/themeProvider";
import {KeyboardArrowLeft, KeyboardArrowRight} from "@mui/icons-material";
import SwipeableViews from 'react-swipeable-views';
import {autoPlay} from 'react-swipeable-views-utils';
import {style} from "../../theme/style";
import SectionDetail from "./SectionDetail";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

interface SectionProps {
    data: SectionType,
    invert: boolean
}

const Section = (props: SectionProps) => {

    const {data, invert} = props
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = data ? data.details.length : 0;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const handleStepChange = (step: number) => {
        setActiveStep(step);
    };
    console.log(data.details.length)
    return (<>
        <SectionTitle data={data}/>
        <Box
            sx={{
                height: '65vmin',
                ...style.common.margin,
                mb: 10,
            }}>
            {data.details.length > 1 ?
                (<>
                    <AutoPlaySwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={activeStep}
                        onChangeIndex={handleStepChange}
                        enableMouseEvents
                        interval={1000000000}
                        style={{backgroundColor: style.common.backgroundColor}}
                    >
                        {data.details.map((detail, index) => (
                            <SectionDetail
                                data={detail}
                                activeStep={activeStep}
                                index={index}
                                invert={invert}
                            />))
                        }
                    </AutoPlaySwipeableViews>
                    <MobileStepper
                        steps={maxSteps}
                        sx={{
                            bgcolor: style.common.backgroundColor,
                        }}
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
                </>) :
                (<>
                    <SectionDetail
                        data={data.details[0]}
                        activeStep={0}
                        index={0}
                        invert={invert}
                    />
                </>)
            }
        </Box>
    </>)
}

export default Section;