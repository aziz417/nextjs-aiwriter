import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Input() {
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { width: '100%' },
            }}
            noValidate
            autoComplete="on"
        >
            <TextField id="outlined-basic" label="Keyword to include" variant="outlined" />

        </Box>
    );
}