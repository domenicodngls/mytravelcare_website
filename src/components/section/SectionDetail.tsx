import React from 'react'
import {DetailType} from "../../common/customType";
import Typography from "@mui/material/Typography";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import {style} from "../../theme/style";
import Grid2 from "@mui/material/Unstable_Grid2";
import {Link} from "@mui/material";

interface SectionDetailProps {
    data: DetailType,
    index: number,
    invert: boolean
}

const SectionDetail = (props: SectionDetailProps) => {

    const {data} = props;

    return (
        <>
            <Grid2 container key={data.label}
                   sx={{
                       display: 'flex',
                       justifyContent: 'space-around',
                       bgcolor: style.common.backgroundColor,
                       ...style.common.margin
                   }}>
                <Grid2 sm={4} xs={12}
                       sx={{
                           display: 'flex',
                           alignItems: 'center',
                           justifyContent: 'center',
                           overflow: 'hidden',
                       }}>
                    {data.imgPath && (<img
                        style={{
                            width: '50vmin',
                        }}
                        src={data.imgPath}
                    />)}
                </Grid2>
                <Grid2
                    key={data.title}
                    sm={6}
                    xs={12}
                    sx={{
                        minWidth: '65vmin'
                    }}
                >
                    <Card sx={{
                        bgcolor: style.common.backgroundColor,
                        boxShadow: "none",
                        width: '100%',
                    }}>
                        <CardHeader
                            title={data.title}
                            titleTypographyProps={{fontSize: '4vmin', fontWeight: '700'}}
                        />
                        <CardContent>
                            {data.description && (
                                <Typography sx={style.sectionDetail.description} align={"justify"}>
                                    {data.description}
                                </Typography>)}
                            {data.descriptionComponent && (data.descriptionComponent)}
                            {data.descriptions && data.descriptions.map((desc) => (
                                <Typography sx={style.sectionDetail.description} align={"justify"}>
                                    {desc}
                                </Typography>))}
                            {data.customDescriptions && data.customDescriptions.map((desc) => (
                                <Card sx={{
                                    bgcolor: style.common.backgroundColor,
                                    boxShadow: "none",
                                    width: '100%',
                                }}>
                                    <CardHeader
                                        title={desc.title}
                                        titleTypographyProps={{fontSize: '4vmin', fontWeight: '700', color: desc.color}}
                                    />
                                    <CardContent sx={{m: 0}}>
                                        {desc.description && (
                                            <Typography sx={style.sectionDetail.description} align={"justify"}>
                                                {desc.description}
                                            </Typography>)}
                                        {desc.anchor && (
                                            <Link
                                                sx={style.sectionDetail.description}
                                                href={desc.anchor.href}
                                            >
                                                {desc.anchor.name}
                                            </Link>
                                        )}
                                    </CardContent>
                                </Card>
                            ))}
                        </CardContent>
                    </Card>
                </Grid2>
            </Grid2>
        </>
    )
}

export default SectionDetail;