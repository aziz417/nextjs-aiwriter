import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import ToolChip from './SamllComponents/ToolChip';
import { Theme, Box } from '@mui/material';
import Grid from '@mui/material/Grid';


export default function Tools() {

    return (
        <Stack direction="row" sx={{ padding: '15px 0', overflowX: 'hidden' }}>
            <Box sx={{ padding: '15px 0', width: '100%', overflowX: 'scroll' }}>
                {Array.from(Array(12)).map((_, index) => (
                    <ToolChip />
                ))}
            </Box>
        </Stack>
    );
}