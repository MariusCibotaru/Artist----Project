import React, { useState, useEffect } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { galleries } from '../utils/data';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Expertise = () => {
  const [selectedGallery, setSelectedGallery] = useState<string>(galleries[0].name);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    const preloadImages = () => {
      galleries.forEach((gallery) => {
        gallery.images.forEach((image) => {
          const img = new Image();
          img.src = image.image;
        });
      });
    };
    preloadImages();
  }, []);

  const handleGalleryClick = (name: string) => {
    setSelectedGallery(name);
    setCurrentImageIndex(0); 
  };

  const handlePrevImage = () => {
    const gallery = galleries.find(gallery => gallery.name === selectedGallery);
    if (gallery) {
      setCurrentImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : gallery.images.length - 1));
    }
  };

  const handleNextImage = () => {
    const gallery = galleries.find(gallery => gallery.name === selectedGallery);
    if (gallery) {
      setCurrentImageIndex((prevIndex) => (prevIndex < gallery.images.length - 1 ? prevIndex + 1 : 0));
    }
  };

  const selectedGalleryData = galleries.find(gallery => gallery.name === selectedGallery);
  const currentImage = selectedGalleryData?.images[currentImageIndex];

  const hasPrevImage = currentImageIndex > 0;
  const hasNextImage = currentImageIndex < (selectedGalleryData?.images.length ?? 1) - 1;

  return (
    <Box
      sx={{
        width: '100%',
        height: '95vh', 
        backgroundColor: '#363733',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '32px',
        p: 4
      }}
    >
      <Box sx={{
        width: '100%',
        flex: '0 0 auto',
        display: 'grid',
        gridTemplateColumns: '2fr 2fr 1fr',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        }}>
          <Typography variant='h6' sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>
            {`(02)`}
          </Typography>
          <Typography variant="h5" color="white">
            Our Expertise
          </Typography>

          <Typography variant="h1" color="white" sx={{ marginTop: 2, marginRight: 2 }}>
            When moments captured every dreams crafted into beautiful reality
          </Typography>
        </Box>

        <Box />

        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          height: '100%',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
        }}>
          {galleries.map((gallery, index) => (
            <Typography
              key={index}
              variant="h3"
              color={selectedGallery === gallery.name ? "white" : "rgba(255, 255, 255, 0.5)"}
              sx={{
                marginBottom: 2,
                cursor: 'pointer',
                opacity: selectedGallery === gallery.name ? 1 : 1 - (index * 0.2), 
                '&:hover': {
                  color: 'white',
                  opacity: 1 
                }
              }}
              onClick={() => handleGalleryClick(gallery.name)}
            >
              {gallery.name}
            </Typography>
          ))}
        </Box>
      </Box>
      
      <Box sx={{
        width: '100%',
        flex: 1, 
        display: 'grid',
        gridTemplateColumns: '1fr 4fr',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'center',
          height: '100%',
          p: 2,
        }}>
          {currentImage && (
            <>
              <Typography variant="h4" color="white" sx={{ mb: 1 }}>
                {currentImage.title}
              </Typography>
              <Typography variant="h6"sx={{ color: 'rgba(255, 255, 255, 0.5)', mb: 2 }}>
                {currentImage.location}
              </Typography>
              <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                p: 1,
                width: '70%',
              }}>
                <IconButton 
                  sx={{
                    color: hasPrevImage ? 'black' : 'rgba(255, 255, 255, 0.5)',
                    backgroundColor: hasPrevImage ? 'white' : 'transparent',
                    border: '1px solid white',
                    '&:hover': {
                      backgroundColor: hasPrevImage ? 'white' : 'transparent'
                    }
                  }}
                  onClick={handlePrevImage}
                  disabled={!hasPrevImage}
                >
                  <ArrowBackIosNewIcon />
                </IconButton>
                <IconButton 
                  sx={{
                    color: hasNextImage ? 'black' : 'rgba(255, 255, 255, 0.5)',
                    backgroundColor: hasNextImage ? 'white' : 'transparent',
                    border: '1px solid white',
                    '&:hover': {
                      backgroundColor: hasNextImage ? 'white' : 'transparent'
                    }
                  }}
                  onClick={handleNextImage}
                  disabled={!hasNextImage}
                >
                  <ArrowForwardIosIcon />
                </IconButton>
              </Box>
            </>
          )}
        </Box>

        <Box sx={{
          position: 'relative',
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}>
          {selectedGalleryData?.images.map((image, index) => (
            <Box
              key={index}
              component="img"
              src={image.image}
              alt={image.title}
              sx={{
                position: 'absolute',
                left: `calc(${(index - currentImageIndex) * 80}% + ${index === currentImageIndex ? 0 : 5}px)`,
                height: '100%',
                width: '75%',
                borderRadius: '16px', 
                transition: 'left 0.5s ease-in-out',
                cursor: 'pointer'
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Expertise;
