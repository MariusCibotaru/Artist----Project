import React from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import ArrowOutward from '@mui/icons-material/ArrowOutward';
import Work1 from '../images/work/Work1.jpg';
import Work2 from '../images/work/Work2.jpg';
import Work3 from '../images/work/Work3.jpg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const tags = ["Nature", "#2024", "Mammals", "Savanna"];

const Work = () => {
  return (
    <Box sx={{
      width: '100%',
      height: '95vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '16px',
      gap: 2,
    }}>

      <Box
        sx={{
          width: '100%',
          flex: '0 0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
          }}
        >
          <Typography variant='h6' sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>
            {`(03)`}
          </Typography>
          <Typography variant="h5" color="white">
            Our Work
          </Typography>
        </Box>
      </Box>

      <Box sx={{
        width: '100%',
        flex: '0 0 auto',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        mb: 2,
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          flex: 1
        }}>
          <Typography variant="h1" sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>
            <Box component="span" sx={{ color: 'white', fontWeight: 'bold' }}>Explore</Box> the artistry and precision behind <Box component="span" sx={{ color: 'white', fontWeight: 'bold' }}>our portfolio</Box> of timeless photography
          </Typography>
        </Box>
        
        <Box sx={{
          display: 'flex',
          flex: 1
        }}/>

        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          flex: 1
        }}>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            mb: 2,
          }}>
            <Typography variant="h5" sx={{ color: 'white', textAlign: 'left' }}>
              Embark On A Visual Journey Through Our Cherished Moments Captured With Creativity And Precision. Each Image In Our Portfolio Reflects Our Dedication To Preserving Life's Beauty And Significance.
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
                Explore More
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

      <Box sx={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr',
        gap: 4,
        height: '100%',
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          backgroundImage: `url(${Work1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '16px',
          p: 2
        }}>
          <Box sx={{
            flex: '0 0 auto',
            width: '100%',
            p: 2,
            display: 'flex',
            flexDirection: 'row',
            gap: 1,
            flexWrap: 'wrap',
            justifyContent: 'center',
            maxWidth: '80%',
            mx: 'auto'
          }}>
            {tags.map((tag, index) => (
              <Box
                key={index}
                sx={{
                  border: '1px solid black', 
                  borderRadius: '32px',
                  padding: 1,
                  px: 2,
                  margin: '2px',
                  minWidth: '80px',
                  textAlign: 'center'
                }}
              >
                <Typography variant="h5" sx={{ color: 'black' }}> 
                  {tag}
                </Typography>
              </Box>
            ))}
          </Box>
          <Box sx={{
            flex: 1,
            width: '100%',
            p: 2,
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
          }}>
            <Box sx={{
              backgroundColor: 'white',
              borderRadius: '32px',
              padding: 2,
              px: 4,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              cursor: 'pointer',
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'scale(1.05)',
              }
            }}>
              <Typography variant="h4" sx={{ color: 'black' }}>
                MORE DETAILS
              </Typography>
              <ArrowForwardIcon sx={{ color: 'black' }} />
            </Box>
          </Box>
        </Box>

        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'center',
          height: '100%',
          backgroundImage: `url(${Work2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '16px',
          p: 4
        }}>
          <Box sx={{
            border: '2px solid white',
            borderRadius: '32px',
            p: 2,
            px: 4,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            cursor: 'pointer',
            transition: 'transform 0.2s',
            '&:hover': {
              transform: 'scale(1.05)',
            }
          }}>
            <Typography variant="h4" sx={{ color: 'white' }}>
              MORE DETAILS
            </Typography>
            <ArrowForwardIcon sx={{ color: 'white' }} />
          </Box>
        </Box>

        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'center',
          height: '100%',
          backgroundImage: `url(${Work3})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '16px',
          p: 4
        }}>
          <Box sx={{
            border: '2px solid white',
            borderRadius: '32px',
            p: 2,
            px: 4,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            cursor: 'pointer',
            transition: 'transform 0.2s',
            '&:hover': {
              transform: 'scale(1.05)',
            }
          }}>
            <Typography variant="h4" sx={{ color: 'white' }}>
              MORE DETAILS
            </Typography>
            <ArrowForwardIcon sx={{ color: 'white' }} />
          </Box>
        </Box>
        
      </Box>

    </Box>
  );
}

export default Work;
