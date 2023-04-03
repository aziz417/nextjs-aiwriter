import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import { useTheme } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';

export default function Textaria() {

    const theme = useTheme();
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { width: '100%' },
            }}
            noValidate
            autoComplete="on"
        >
            <div>

                <InputLabel shrink htmlFor="bootstrap-input">
                    What is your paragraph about?
                </InputLabel>
                <TextField
                sx={{background: theme.palette.background.default}}
                    id="outlined-multiline-static"
                    // label=""
                    multiline
                    rows={4}
                    defaultValue=""
                />
            </div>
        </Box>
    );
}