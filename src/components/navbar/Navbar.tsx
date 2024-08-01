import React from 'react';
import { Box, Button, IconButton, Typography, useTheme, Divider } from '@mui/material';
import LogoDarkMode from '../../images/LogoDarkMode.png';
import LogoLightMode from '../../images/LogoLightMode.png';
import { ArrowOutward } from '@mui/icons-material';
import { Link } from 'react-scroll';

const Navbar = () => {
  const theme = useTheme();
  const isDarkTheme = theme.palette.mode === 'dark';

  const pages = [
    { name: "Home", id: "home" },
    { name: "Service", id: "expertise" },
    { name: "Projects", id: "work" },
    { name: "Contact Us", id: "contact" }
  ];

  return (
    <Box sx={{
      display: 'grid',
      gridTemplateColumns: '1fr 2fr 1fr',
      width: '100%',
    }}>
      <Box sx={{
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

      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50px',
        border: '2px solid white',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        px: 2
      }}>
        {pages.map((page, index) => (
          <React.Fragment key={page.id}>
            <Link
              to={page.id}
              smooth={true}
              duration={500}
              offset={-25} 
              style={{ textDecoration: 'none', flex: '1 1 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <Box sx={{
                flex: '1 1 auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '32px'
                }
              }}>
                <Typography variant="h4" color="white">
                  {page.name}
                </Typography>
              </Box>
            </Link>
            {index < pages.length - 1 && (
              <Divider
                orientation="vertical"
                flexItem
                sx={{ backgroundColor: 'white', height: '60%', alignSelf: 'center', mx: 1 }}
              />
            )}
          </React.Fragment>
        ))}
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
            backgroundColor: 'white',
            borderColor: 'white',
            color: '#363733',
            borderRadius: '32px',
            padding: 2,
            px: 4,
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.8)', 
              borderColor: 'white'
            }
          }}
        >
          <Typography variant='h5' sx={{ color: '#363733', fontWeight: 'bold' }}>
            BOOK A CALL
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
  );
}

export default Navbar;
