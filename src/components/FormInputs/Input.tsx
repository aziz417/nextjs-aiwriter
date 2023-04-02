import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { type } from 'os';
import { useState } from 'react';

interface inputProps {
    message: string;
    label: string;
    name: string;
    disabled: boolean;
    requried: boolean;
    value: string;
    type: string;
    eventHandle: (value: any) => void;
}

export default function Input(props: inputProps) {
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.eventHandle(event)
    };    

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
                id={props?.name}
                variant="outlined"
                label={props?.label}
                required={props?.requried}
                type={ props?.type}
                name={props?.name}
                onChange={handleChange}
            />

        </Box>
    );
}