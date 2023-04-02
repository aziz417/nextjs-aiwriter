import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectInput(props:any) {
    const [data, setData] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        props.changeEvent
        setData(event.target.value as string);
    };

    return (
        <Box sx={{ width: 'auto' }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Creativity</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={data}
                    label="Creativity"
                    onChange={handleChange}
                >
                    <MenuItem value={'reguler'}>Regular</MenuItem>
                    <MenuItem value={'high'}>High</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}