import React from 'react'
import {DetailType} from "../../common/customType";
import {Box, Collapse, Grid, IconButton} from "@mui/material";
import SwipeableViews from 'react-swipeable-views';
import {autoPlay} from 'react-swipeable-views-utils';
import Typography from "@mui/material/Typography";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandMore from "../ExpandMore";
import {style} from "../../theme/style";

interface SectionDetailProps {
    data: DetailType,
    activeStep: number,
    index: number,
    invert: boolean
}

const SectionDetail = (props: SectionDetailProps) => {

    const {data, activeStep, index, invert} = props;
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <Box key={data.label}
                 sx={{
                     display: 'flex',
                     flexDirection: (invert ? 'row' : 'row-reverse'),
                     bgcolor: style.common.backgroundColor,
                     flexWrap: "wrap"
                 }}>
                {Math.abs(activeStep - index) <= 2 ? (
                    <Box
                        component="img"
                        sx={{
                            width: '65vmin',
                            height: '65vmin',
                            bgcolor: style.common.backgroundColor
                        }}
                        src={data.imgPath}
                        alt={data.label}
                    />
                ) : null}
                <Box
                    key={data.title}
                    sx={{flexGrow: 1}}
                >
                    <Card sx={{
                        bgcolor: style.common.backgroundColor,
                        boxShadow: "none"
                    }}>
                        <CardHeader
                            title={data.title}
                            subheader={data.label}
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                {data.shortDescription}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <Typography
                                variant="body2"
                                align="right"
                                sx={{flex:"auto"}}
                            >MOSTRA ALTRO</Typography>
                            <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon/>
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent sx={{overflowY: 'auto', height: '20vmin'}}>
                                <Typography paragraph>{data.description}
                                </Typography>
                            </CardContent>
                        </Collapse>
                    </Card>
                </Box>
            </Box>
        </>
    )
}

export default SectionDetail;