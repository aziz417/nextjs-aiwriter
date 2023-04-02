import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { type } from 'os';
import { useState } from 'react';

type inputProps = {
    message: string;
    label: string;
    name: string;
    disabled: boolean;
}

export default function Input() {
const [data, setData] = useState<string>('')
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setData(event.target.value as string);
    };

    console.log(data);
    

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { width: '100%' },
            }}
            noValidate
            autoComplete="on"
        >
            <TextField
                id="outlined-basic"
                label="Keyword to include"
                variant="outlined"
                placeholder="dfgdfh"
                required={true}
                type="password"
                onChange={handleChange}
            />

        </Box>
    );
}