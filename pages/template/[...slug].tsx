import * as React from 'react';
import { Box, Grid, Typography } from '@mui/material'
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import type { NextPage } from 'next'
import Input from '../../src/components/FormInputs/Input';
import SelectAutoComplete from '../../src/components/FormInputs/SelectAutoComplete'
import SelectInput from '../../src/components/FormInputs/SelectInput';
import Textaria from '../../src/components/FormInputs/Textaria';
import { useState } from 'react';
import InputV2 from '../../src/components/FormInputs/InputV2';

interface FormState {
    keyword_to_include: string;
    language: number | null;
}

const initialFormState: FormState = {
    keyword_to_include: "",
    language: null,
};

const Form: NextPage = () => {
    const theme = useTheme();
    const [formData, setFormData] = useState<FormState>(initialFormState);

    const dataHandale = (event: any) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    const dataSelectHandale = (value: any) => {
        setFormData({ ...formData, ['language']: value?.code });

        console.log(value);
        
    }
    console.log(formData);
    

    return (
        <>
            <Box style={{ padding: '10px 20px' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2 }}>
                    <Grid item sm={12} md={4}>
                        <Box sx={{ background: theme.palette.background.paper,  boxShadow: '0px 4px 4px rgba(141, 179, 201, 0.25)' }} borderRadius={1} style={{ padding: '10px 20px' }}>

                            <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                                <img width={'20px'} style={{ marginRight: '5px' }} src="/img/blog-icon.webp" />
                                <Typography variant='h6'>Paragraph Generator</Typography>
                            </Box>

                            <Typography variant="subtitle2" gutterBottom>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, repellat?</Typography>
                            <Divider sx={{ margin: '10px 0' }} />
                            <Textaria />
                            <Typography variant="h6">Lenguage</Typography>
                            <SelectAutoComplete
                                message={''}
                                label={'Choose a language'}
                                name="language"
                                value={formData?.language}
                                eventHandle={dataSelectHandale}
                                requried={true}
                            />
                            <Divider sx={{ padding: '6px 0', border: 'none' }} />
                            <SelectInput
                                // changeEvent={setFromInputs}
                            />
                            <Divider sx={{ padding: '6px 0', border: 'none' }} />
                            
                            <Divider sx={{ padding: '6px 0', border: 'none' }} />

                            <Input
                                message={''}
                                label={'Keyword to include'}
                                name="keyword_to_include"
                                type="text"
                                disabled={false}
                                value={formData?.keyword_to_include}
                                eventHandle={dataHandale}
                                requried={true}
                            />

                            <InputV2 />

                            <Divider sx={{ padding: '6px 0', border: 'none' }} />
                            {/* <Input /> */}
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

export default Form