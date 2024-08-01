import React, { useState } from 'react';
import { Box, Typography, Divider } from '@mui/material';
import { awards } from '../utils/data';
import AwardCard from '../components/cards/AwardCard';

const Awards = () => {
  const [selectedAward, setSelectedAward] = useState<number>(awards[0].year);

  const handleSelectAward = (year: number) => {
    setSelectedAward(year);
  };

  const selectedAwardData = awards.find(award => award.year === selectedAward);

  return (
    <Box sx={{
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '16px',
      gap: 6,
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
            {`(04)`}
          </Typography>
          <Typography variant="h5" color="white">
            Awards
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flex: 1,
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
          }}
        >
          <Typography variant="h1" sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>
            <Box component="span" sx={{ color: 'white', fontWeight: 'bold' }}>Award</Box> is a pixel that <Box component="span" sx={{ color: 'white', fontWeight: 'bold' }}>reflecting</Box> our ongoing <Box component="span" sx={{ color: 'white', fontWeight: 'bold' }}>dedication</Box> to innovation and excellence
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '2fr 1fr',
          gap: 2,
          height: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          {awards.map((award, index) => (
            <React.Fragment key={award.year}>
              <AwardCard
                year={award.year}
                title={award.title}
                selected={award.year === selectedAward}
                onClick={() => handleSelectAward(award.year)}
              />
              {index < awards.length - 1 && (
                <Divider sx={{ width: '100%', backgroundColor: '#363733', visibility: award.year === selectedAward || awards[index + 1].year === selectedAward ? 'hidden' : 'visible' }} />
              )}
              {index === awards.length - 1 && (
                <Divider sx={{ width: '100%', backgroundColor: '#363733', visibility: award.year === selectedAward ? 'hidden' : 'visible' }} />
              )}
            </React.Fragment>
          ))}
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            flex: 1,
            height: '100%',
          }}
        >
          {selectedAwardData && (
            <>
              <Box
                sx={{
                  display: 'flex',
                  flex: 4,
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  mb: 1,
                  backgroundImage: `url(${selectedAwardData.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '16px',
                  height: '100%',  
                }}
              >
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flex: 1,
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                }}
              >
                <Typography variant="h5" color="white">
                  {selectedAwardData.description}
                </Typography>
              </Box>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Awards;
