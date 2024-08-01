import React, { useState } from 'react';
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { lightTheme, darkTheme } from '../utils/theme';
import Home from './Home';
import About from './About';
import Expertise from './Expertise';
import Work from './Work';
import Contact from './Contact';
import Awards from './Awards';
import ScrollToTopButton from '../components/scrolltotop/ScrollToTopButton';

const Main = () => {
  const [theme, setTheme] = useState(darkTheme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative' }}>
        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', padding: '2%', position: 'relative', gap: 16 }}>
          <div id="home">
            <Home />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="expertise">
            <Expertise />
          </div>
          <div id="work">
            <Work />
          </div>
          <div id="awards">
            <Awards />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </Box>
        <ScrollToTopButton />
      </Box>
    </ThemeProvider>
  );
};

export default Main;
