import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { homePageImages, galleries } from '../utils/data';
import Navbar from '../components/navbar/Navbar';
import HomeCard from '../components/cards/HomeCard';

const Home = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const firstRowGalleries = galleries.slice(0, 2);
  const secondRowGalleries = galleries.slice(2);

  // Preload images
  useEffect(() => {
    homePageImages.forEach((imageData) => {
      const img = new Image();
      img.src = imageData.image;
    });
  }, []);

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % homePageImages.length);
  };

  const getCardPosition = (index: number) => {
    const relativeIndex = (index - currentCardIndex + homePageImages.length) % homePageImages.length;
    return `calc(${relativeIndex * 70}% + ${relativeIndex === 0 ? 0 : 5}px)`;
  };

  return (
    <Box sx={{
      width: '100%',
      height: '95vh',
      backgroundImage: `url(${homePageImages[currentCardIndex].image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      py: 4,
      pl: 4,
      pr: 0,
      borderRadius: '32px',
    }}>
      <Box sx={{
        flex: '0 0 auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        pr: 4
      }}>
        <Navbar />
      </Box>
      
      <Box sx={{
        flex: '1 1 auto',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        pr: 4
      }}>
        <Box sx={{
          display: 'flex',
          width: '65%',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
          <Typography variant="h1" color="white" sx={{ fontSize: '6rem', textAlign: 'left', width: '100%' }}>
            Capturing beautiful moment inside lens and shutterspeed
          </Typography>
        </Box>
      </Box>

      <Box sx={{
        flex: '0 0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        gap: 2
      }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-end', gap: 2, height: '100%' }}>
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
            {firstRowGalleries.map((gallery) => (
              <Box key={gallery.name} sx={{
                borderRadius: '50px',
                border: '2px solid white',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                padding: '8px 16px',
              }}>
                <Typography variant="h5" color="white">
                  {gallery.name}
                </Typography>
              </Box>
            ))}
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
            {secondRowGalleries.map((gallery) => (
              <Box key={gallery.name} sx={{
                borderRadius: '50px',
                border: '2px solid white',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                padding: '8px 16px',
              }}>
                <Typography variant="h5" color="white">
                  {gallery.name}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Box sx={{
          position: 'relative',
          height: '100%',
          minHeight: '150px',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}>
          {homePageImages.map((imageData, index) => (
            <Box
              key={index}
              sx={{
                position: 'absolute',
                left: getCardPosition(index),
                height: '100%',
                width: '65%',
                borderRadius: '16px',
                transition: 'left 0.5s ease-in-out',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onClick={handleNextCard}
            >
              <HomeCard
                title={imageData.title}
                camera={imageData.camera}
                image={imageData.image}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
