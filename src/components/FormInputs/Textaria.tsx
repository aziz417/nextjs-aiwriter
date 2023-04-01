import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Textaria() {
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
                <TextField
                    id="outlined-multiline-static"
                    label="What is your paragraph about?"
                    multiline
                    rows={4}
                    defaultValue=""
                />
            </div>
        </Box>
    );
}