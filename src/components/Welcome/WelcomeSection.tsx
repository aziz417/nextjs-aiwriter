import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function WelcomeSection({ authUserName }) {
    return (

        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', padding: '10px 0' }}>
                <span style={{ marginRight: '9px', fontSize: '30px' }}>👋🏻</span>
                <Typography variant="h5" component="h5" sx={{ marginRight: '10px', fontWeight: 'bold' }}>{authUserName}</Typography>
                <Typography variant="h5" component="h5" sx={{ opacity: "0.6", fontWeight: 'bold' }}>—Let's boost your website traffic today!</Typography>
            </Box>
        </Box>
    )
}