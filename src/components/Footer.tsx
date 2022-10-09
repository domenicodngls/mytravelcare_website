import * as React from 'react';
import Typography from "@mui/material/Typography";
import {site} from "../content/content";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import LocalPhoneTwoToneIcon from '@mui/icons-material/LocalPhoneTwoTone';
import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone';
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import InstagramIcon from '@mui/icons-material/Instagram';
import Grid2 from "@mui/material/Unstable_Grid2";
import {Link} from "@mui/material";
import {theme} from "../theme/themeProvider";

const Footer = () => {
        return (
            <AppBar color="primary" sx={{top: 'auto', bottom: 0, position: 'initial', boxShadow: 'none'}} id={'header'}>
                <Container maxWidth={false}>
                    <Toolbar disableGutters>
                        <Grid2 container spacing={2} sx={{width: '100%'}}>
                            <Grid2 xs={12} md={4} sx={{alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
                                <EmailTwoToneIcon/>
                                <Typography
                                    variant="h6"
                                    noWrap
                                    sx={{ml: 1}}
                                >
                                    {site.email}
                                </Typography>
                            </Grid2>
                            <Grid2 xs={12} md={4} sx={{alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
                                <LocationOnTwoToneIcon/>
                                <Typography
                                    variant="h6"
                                    noWrap
                                    sx={{ml: 1}}
                                >
                                    {site.city} - {site.street_address}
                                </Typography>
                            </Grid2>
                            <Grid2 xs={12} md={4} sx={{alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
                                <LocalPhoneTwoToneIcon/>
                                <Typography
                                    variant="h6"
                                    noWrap
                                    sx={{ml: 1}}
                                >
                                    {site.phone}
                                </Typography>
                            </Grid2>
                            <Grid2 xs={12} md={6} sx={{alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
                                <Link href={site.social.facebook_url} target="_blank"
                                      sx={{display: 'flex', alignItems: 'center'}}>
                                    <FacebookTwoToneIcon sx={{color: theme.palette.primary.contrastText}}/>
                                    <Typography
                                        variant="h6"
                                        noWrap
                                        sx={{ml: 1, color: theme.palette.primary.contrastText}}
                                    >
                                        MyTravelCare Facebook
                                    </Typography>
                                </Link>
                            </Grid2>
                            <Grid2 xs={12} md={6} sx={{alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
                                <Link href={site.social.instagram_url} target="_blank"
                                      sx={{display: 'flex', alignItems: 'center'}}>
                                    <InstagramIcon sx={{color: theme.palette.primary.contrastText}}/>
                                    <Typography
                                        variant="h6"
                                        noWrap
                                        sx={{ml: 1, color: theme.palette.primary.contrastText}}
                                    >
                                        MyTravelCare Instagram
                                    </Typography>
                                </Link>
                            </Grid2>
                        </Grid2>
                    </Toolbar>
                </Container>
            </AppBar>);
    }
;
export default Footer;