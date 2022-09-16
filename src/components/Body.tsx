import * as React from 'react';
import Typography from "@mui/material/Typography";
import {site} from "../content/content";
import logo from "../icons/logo.svg";
import Container from "@mui/material/Container";
import {style} from "../theme/style";

const Body = () => {
        return (
            <>
                <Container maxWidth="xl" sx={style.body.containerFlex}>
                    <Container maxWidth="xl" sx={style.body.containerFlexColumn}>
                        <Typography
                            variant="h1"
                            noWrap
                            sx={style.body.title}>
                            {site.title}
                        </Typography>
                        <Typography
                            variant="h1"
                            sx={style.body.subtitle}>
                            {site.description}
                        </Typography>
                    </Container>
                    <Container sx={style.body.logoContainer}>
                        <img src={logo} style={style.body.logo} alt="logo"/>
                    </Container>
                </Container>
                <Typography
                    sx={style.body.description}>
                    {site.long_description}
                </Typography>
            </>);
    }
;
export default Body;