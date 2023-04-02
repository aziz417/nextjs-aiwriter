import * as React from 'react';
import { Box, Grid, Typography } from '@mui/material'
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import type { NextPage } from 'next'
import Input from '../../src/components/FormInputs/Input';
import SelectAutoComplete from '../../src/components/FormInputs/SelectAutoComplete'
import SelectInput from '../../src/components/FormInputs/SelectInput';
import Textaria from '../../src/components/FormInputs/Textaria';
const Home: NextPage = () => {
    const [fromInputs, setFromInputs] = React.useState([]);

    return (
        <>
            <Box style={{ padding: '10px 20px' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2 }}>
                    <Grid item sm={12} md={4}>
                        <Box border={1} borderRadius={2} style={{ padding: '10px 20px' }}>

                            <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                                <img width={'20px'} style={{ marginRight: '5px' }} src="/img/blog-icon.webp" />
                                <Typography variant='h6'>Paragraph Generator</Typography>
                            </Box>

                            <Typography variant="subtitle2" gutterBottom>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, repellat?</Typography>
                            <Divider sx={{ margin: '10px 0' }} />
                            <SelectAutoComplete />
                            <Divider sx={{ padding: '6px 0', border: 'none' }} />
                            <SelectInput 
                            changeEvent={setFromInputs}
                            />
                            <Divider sx={{ padding: '6px 0', border: 'none' }} />
                            <Textaria />
                            <Divider sx={{ padding: '6px 0', border: 'none' }} />
                            <Input />
                            <Divider sx={{ padding: '6px 0', border: 'none' }} />
                            <Input />
                        </Box>
                    </Grid>
                    <Grid item sm={12} md={8}>
                        <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni temporibus accusantium error repudiandae necessitatibus, delectus quam deleniti! Laboriosam beatae nihil voluptate nulla, incidunt commodi molestiae eius quidem velit tenetur distinctio.</Typography>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Home