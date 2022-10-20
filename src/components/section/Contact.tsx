import React, {useState} from 'react'
import {Button, TextField} from "@mui/material";
import {style} from "../../theme/style";
import Grid2 from "@mui/material/Unstable_Grid2";
import {theme} from "../../theme/themeProvider";

const Contact = () => {
    const initialValues = {
        name: "",
        email: "",
        message: ""
    };

    const [formValues, setFormValues] = useState(initialValues);

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formValues);
    };

    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                <Grid2 container spacing={2} columnSpacing={2}  sx={{
                    bgcolor: theme.palette.primary.contrastText,
                    ...style.common.margin
                }}>
                    <Grid2 xs={6} >
                        <TextField
                            focused
                            id="name"
                            name="name"
                            label="Nome"
                            type="text"
                            value={formValues.name}
                            onChange={(e) => handleInputChange(e)}
                            style={{width: '100%'}}
                            color={"primary"}
                        />
                    </Grid2>
                    <Grid2 xs={6}>
                        <TextField
                            focused
                            id="email"
                            name="email"
                            label="Email"
                            type="text"
                            value={formValues.email}
                            onChange={(e) => handleInputChange(e)}
                            style={{width: '100%'}}
                            color={"primary"}
                        />
                    </Grid2>
                    <Grid2 xs={10}>
                        <TextField
                            focused
                            id="message"
                            name="message"
                            label="Messaggio"
                            type="text"
                            value={formValues.message}
                            onChange={(e) => handleInputChange(e)}
                            multiline
                            minRows={6}
                            style={{width: '100%'}}
                            color={"primary"}
                        />
                    </Grid2>
                    <Grid2>
                        <Button variant="contained" color="secondary" type="submit">
                            Invia
                        </Button>
                    </Grid2>
                </Grid2>
            </form>
        </>
    )
}

export default Contact