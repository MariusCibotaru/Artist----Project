import React from 'react';
import { Box, Typography, Button, IconButton, Divider } from '@mui/material';
import { ArrowOutward } from '@mui/icons-material';
import Footer from '../components/footer/Footer';

const Contact = () => {
    
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#363733',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 4,
        borderRadius: '16px',
      }}
    >
        <Box
            sx={{
            width: '100%',
            flex: '0 0 auto',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            flexDirection: 'column',
            }}
        >
            <Typography variant='h6' sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>
                {`(05)`}
            </Typography>
            <Typography variant="h5" color="white">
            Contact Us
            </Typography>
        </Box>
        <Box sx={{
            width: '100%',
            flex: '1 1 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: 6
        }}>
            <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
            }}
            >
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 1
            }}>
                <Typography variant='h1' sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>
                    Let's
                </Typography>
                <Typography variant='h1' sx={{ color: 'white', fontWeight: 'bold' }}>
                    discuss
                </Typography>
                <Typography variant='h1' sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>
                    your
                </Typography>
            </Box>

            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 1
            }}>
                    <Typography variant='h1' sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>
                        vision
                    </Typography>
                    <Box>
                        <Button
                            variant="contained"
                            sx={{
                            backgroundColor: 'white',
                            color: '#363733',
                            borderRadius: '24px',
                            padding: '8px 16px',
                            '&:hover': {
                            backgroundColor: '#363733',
                            color: 'white'
                            }
                            }}
                        >
                            <Typography variant='h5'>
                                Let's talk
                            </Typography>
                        </Button>
                        <IconButton
                            sx={{
                            backgroundColor: 'white',
                            color: '#363733',
                            p: 1,
                            '&:hover': {
                            backgroundColor: '#363733',
                            color: 'white'
                            }
                        }}>
                            <ArrowOutward />
                        </IconButton>
                    </Box>
                    <Typography variant='h1' sx={{ color: 'white', fontWeight: 'bold' }}>
                        with us
                    </Typography>
            </Box>

            </Box>

            <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                gap: 0.2
            }}
            >
            <Typography variant="body1" color="white">
                456 Oak Avenue
            </Typography>
            <Typography variant="body1" color="white" >
                Cityville
            </Typography>
            <Typography variant="body1" color="white">
                United States
            </Typography>
            <Typography variant="body1" color="white">
                +1 (555) 123-4567
            </Typography>
            <Typography variant="body1" color="white">
                creacy@example.com
            </Typography>
            </Box>
        </Box>
        <Divider sx={{ width: '100%', backgroundColor: 'white', marginBottom: '16px' }} />
        <Box sx={{
            width: '100%',
            flex: '0 0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Footer/>
        </Box>
    </Box>
  );
}

export default Contact;
