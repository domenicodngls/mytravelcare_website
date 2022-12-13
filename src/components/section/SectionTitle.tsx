import React from 'react'
import Typography from "@mui/material/Typography";
import {SectionType} from "../../common/customType";
import {style} from "../../theme/style";
import {theme} from "../../theme/themeProvider";

interface SectionTitleProps {
    data: SectionType | null
}

const SectionTitle = (props: SectionTitleProps) => {

    const data = props.data;

    let Scroll = require('react-scroll');
    let Element = Scroll.Element;

    return (
        <>
            {!data?.hideTitle && (
                <>
                    <Typography
                        variant='h3'
                        sx={{
                            borderBottom: style.common.borderBottom,
                            ...style.common.margin,
                            ...style.common.title,
                            borderBottomColor: data && theme.palette[data.color].main,
                        }}
                    >{data?.title}</Typography>
                    <Element name={data?.id}></Element>
                </>
            )}
        </>)
}

export default SectionTitle