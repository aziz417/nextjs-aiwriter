import * as React from 'react';
import { Theme, Box } from '@mui/material';

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CardActionArea } from '@mui/material';
import StarRateIcon from '@mui/icons-material/StarRate';

const sxStyle = {
    borderWidth: '1.5px',
    border: 'solid 1px #CBD5E0',
    borderRadius: '10px',
    padding: '15px',
    // color: ['blue', 'primary.main'],
    height: 'auto',
    maxHeight: '250px',
    '&:hover': {
        boxShadow: 'rgb(229, 236, 244) 0px 0px 1px 2px',
    },
    transition: (theme: Theme) => theme.transitions.create(['border-color']),
};

export default function CategoryCard() {
const [star, setStar] = React.useState(false)

    return (

        <Box sx={sxStyle} onMouseEnter={() => setStar(true)} onMouseLeave={() => setStar(false)}>
            <Card sx={{
                border: 'none',
                boxShadow: 'none',
                background: 'none'

            }}>

                <CardHeader sx={{ padding: '10px' }}
                    avatar={
                        <CardMedia
                            component="img"
                            height="40"
                            image="/img/blog-icon.webp"
                            alt="Paella dish"
                        />
                    }

                    action={
                        
                        <IconButton aria-label="settings">
                            {star && <StarRateIcon />}
                        </IconButton>
                    }
                />

                <CardContent sx={{ padding: '0' }}>
                    <Typography sx={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }} variant="h6" >
                        Abracadabra
                    </Typography>
                    <Typography sx={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }} variant="subtitle1">
                        This impressive paella is a perfect party dish and a fun
                    </Typography>
                </CardContent>

                <CardActions sx={{ padding: '5px 0' }}>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    

                </CardActions>
            </Card>
        </Box>

        
    );
}