import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import LogoLightMode from '../../images/LogoLightMode.png';
import LogoDarkMode from '../../images/LogoDarkMode.png';

const Footer = () => {
  const theme = useTheme();
  const isDarkTheme = theme.palette.mode === 'dark';

  const pages = ["About Us", "Project", "Services", "Terms & Condition"];

  return (
    <Box sx={{
      width: '100%',
      backgroundColor: '#363733',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px',
    }}>
      <Box sx={{
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}>
        <img
          src={isDarkTheme ? LogoDarkMode : LogoLightMode}
          alt="Logo"
          style={{ width: '150px', height: 'auto' }}
        />
      </Box>
      <Box
        sx={{
          flex: 2,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 2,
          margin: '0 16px',
        }}
      >
        {pages.map((page, index) => (
          <Typography
            key={index}
            variant="h5"
            sx={{
              color: 'rgba(255, 255, 255, 0.5)',
              cursor: 'pointer',
              '&:hover': {
                color: 'white',
              },
            }}
          >
            {page}
          </Typography>
        ))}
      </Box>
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        <Typography variant="h6" sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>
          © Artist 2024. All Rights Reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
