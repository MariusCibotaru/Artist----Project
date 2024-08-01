import React from 'react';
import { Box, Button, IconButton, Typography } from '@mui/material';
import { ArrowOutward } from '@mui/icons-material';

const About = () => {
  return (
    <Box sx={{
      width: '100%',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '32px',
      p: 4,
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: 10,
        width: '80%'
      }}>
        <Box>
          <Typography variant='h6' sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>
            {`(01)`}
          </Typography>
          <Typography variant="h5" color="white">
            About Us
          </Typography>
        </Box>
        <Box>
          <Typography variant="h4" sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>
            We Ardently Strive To Encapsulate Life’s Most Precious Moments, Weaving A Tapestry Of Artistry And A Hint Of Enchanting Magic With The Timeless Essence Of The Human Experience.
          </Typography>
        </Box>  
      </Box>

      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        height: '100%',
        justifyContent: 'center'
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          flex: 1
        }}>
          <Typography variant="h1" sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>
            <Box component="span" sx={{ color: 'white', fontWeight: 'bold' }}>Photography</Box> is driven by a deep passion for <Box component="span" sx={{ color: 'white', fontWeight: 'bold' }}>capturing life’s</Box> most <Box component="span" sx={{ color: 'white', fontWeight: 'bold' }}>precious moments</Box> with artistry and a touch of magic
          </Typography>
        </Box>

        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
          <Button
            variant="outlined"
            sx={{
              borderColor: 'white',
              color: 'white',
              borderRadius: '32px',
              padding: 2,
              px: 4,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                borderColor: 'white'
              }
            }}
          >
            <Typography variant='h5' sx={{ color: 'white', fontWeight: 'bold' }}>
              Learn More
            </Typography>
          </Button>
          <IconButton
            sx={{
              backgroundColor: 'white',
              color: '#363733',
              p: 2,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                color: 'white'
              }
            }}>
            <ArrowOutward />
          </IconButton>
        </Box>

      </Box>
      
    </Box>
  );
}

export default About;
