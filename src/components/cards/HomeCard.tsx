import React from 'react';
import { Box, Typography } from '@mui/material';

interface HomeCardProps {
  title: string;
  camera: string;
  image: string;
}

const HomeCard: React.FC<HomeCardProps> = ({ title, camera, image }) => {
  return (
    <Box sx={{
        borderRadius: '16px',
        overflow: 'hidden',
        border: '2px solid white',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        padding: 2,
        gap: 2,
        cursor: 'pointer'
      }}>
      <Box
        component="img"
        src={image}
        alt={title}
        sx={{
          width: 'auto',
          height: '100%',
          borderRadius: '8px'
        }}
      />
         <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
            <Typography variant="h4"  sx={{ fontWeight: 'bold', color: '#bcbcbc' }}>
            {title}
            </Typography>
            <Typography variant="subtitle1" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            Shoot with {camera}
            </Typography>
        </Box>
    </Box>
  );
};

export default HomeCard;
