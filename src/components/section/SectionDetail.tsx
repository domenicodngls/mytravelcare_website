import React from 'react'
import {DetailType} from "../../common/customType";
import {
    Button,
    Collapse,
    Dialog, DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions'
import {style} from "../../theme/style";
import Grid2 from "@mui/material/Unstable_Grid2";

interface SectionDetailProps {
    data: DetailType,
    index: number,
    invert: boolean
}

const SectionDetail = (props: SectionDetailProps) => {

    const {data, index, invert} = props;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                    <img
                        style={{
                            height: '80vmin',
                        }}
                        src={data.imgPath}
                    />
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
                            <Typography sx={style.body.description}>
                                {data.description}
                            </Typography>
                        </CardContent>
                        {/*<CardActions disableSpacing>
                            <Button onClick={handleOpen}>
                                Approfondisci
                            </Button>
                        </CardActions>*/}
                    </Card>
                </Grid2>

            </Grid2>
            <Dialog
                fullWidth
                maxWidth={'md'}
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>Optional sizes</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        You can set my maximum width and whether to adapt or not.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default SectionDetail;