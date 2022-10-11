import React from 'react'
import {SectionType} from "../../common/customType";
import SectionTitle from "./SectionTitle";
import {Box, Link} from "@mui/material";
import {style} from "../../theme/style";
import SectionDetail from "./SectionDetail";
import Grid2 from "@mui/material/Unstable_Grid2";
import {theme} from "../../theme/themeProvider";

interface SectionProps {
    data: SectionType,
}

const Section = (props: SectionProps) => {

    const {data} = props
    const component = data.component ? React.createElement(data.component, {}) : undefined;

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
                        index={index}
                        invert={index % 2 === 0}
                        key={detail.title}
                    />))
                }
                {data.images && (
                    <Grid2 container spacing={2} sx={style.common.margin}>
                        {data.images.map(image => (
                            <Grid2 xs={12} md={4} sx={{
                                textAlign: 'center',
                                bgcolor: theme.palette.primary.contrastText,
                                alignSelf: 'center'
                            }} key={image.path}>
                                <Link href={image.ref} target="_blank">
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