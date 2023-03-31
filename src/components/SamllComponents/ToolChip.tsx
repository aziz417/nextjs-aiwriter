import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function ToolChip() {
    return (<>
        <Chip sx={{
            padding: '5px 10px',
            margin: '5px',
            '&:hover': {
                boxShadow: 'rgb(229, 236, 244) 0px 0px 1px 2px',
            }
        }}
            avatar={<Avatar sx={{ padding: '3px' }} alt="Natacha" src="/img/gmail.webp" />}
            label="Avatar"
            variant="outlined"
        /></>

    );
}