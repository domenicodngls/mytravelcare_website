import React, {useState} from 'react'
import {Box, Button, FormControl, FormGroup, Input, InputLabel, TextField} from "@mui/material";
import {style} from "../../theme/style";
import Grid2 from "@mui/material/Unstable_Grid2";

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
                <Grid2 container spacing={2} columnSpacing={2}>
                    <Grid2 xs={6}>
                        <TextField
                            id="name"
                            name="name"
                            label="Nome"
                            type="text"
                            value={formValues.name}
                            onChange={(e) => handleInputChange(e)}
                           style={{width: '100%'}}
                        />
                    </Grid2>
                    <Grid2 xs={6}>
                        <TextField
                            id="email"
                            name="email"
                            label="Email"
                            type="text"
                            value={formValues.email}
                            onChange={(e) => handleInputChange(e)}
                            style={{width: '100%'}}
                        />
                    </Grid2>
                    <Grid2 xs={10}>
                        <TextField
                            id="message"
                            name="message"
                            label="Messaggio"
                            type="text"
                            value={formValues.message}
                            onChange={(e) => handleInputChange(e)}
                            multiline
                            minRows={6}
                            style={{width: '100%'}}
                        />
                    </Grid2>
                    <Grid2>
                        <Button variant="contained" color="secondary" type="submit" >
                            Invia
                        </Button>
                    </Grid2>
                </Grid2>
            </form>
        </>
    )
}

export default Contact