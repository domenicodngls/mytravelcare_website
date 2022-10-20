import * as React from 'react';
import Typography from "@mui/material/Typography";
import {site_it} from "../content_it/content";
import {site_en} from "../content_en/content";
import logo from "../icons/logo.svg";
import Container from "@mui/material/Container";
import {style} from "../theme/style";
import Grid2 from "@mui/material/Unstable_Grid2";

interface BodyProps {
    language: string;
}

const Body = (props: BodyProps) => {

        const {language} = props;
        const site = language === "it" ? site_it : site_en;
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
                <Grid2
                    container
                    sx={{m: 5}}
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Grid2>
                        <Typography
                            sx={style.body.description}
                            align={"justify"}>
                            {site.long_description}
                        </Typography>
                    </Grid2>
                    <Grid2>
                        <Typography
                            sx={{...style.body.description, mt: 2, mb: 5}}
                            align={"justify"}>
                            {site.note_description}
                        </Typography>
                    </Grid2>
                </Grid2>
            </>);
    }
;
export default Body;