import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import { Box, Grid, Typography } from '@mui/material'
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
               
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <InputLabel sx={{fontSize: '16px'}}  htmlFor="bootstrap-input">
                        What is your paragraph about?
                    </InputLabel>
                    <Typography>(0/100)</Typography>
                </Box>
                <TextField
                    sx={{ background: theme.palette.background.default }}
                    id="bootstrap-input"
                    // label=""
                    multiline
                    rows={4}
                    defaultValue=""
                />
            </div>
        </Box>
    );
}