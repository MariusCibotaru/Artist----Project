import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

interface AwardCardProps {
  year: number;
  title: string;
  selected: boolean;
  onClick: () => void;
}

const AwardCard: React.FC<AwardCardProps> = ({ year, title, selected, onClick }) => {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: selected ? '#363733' : 'transparent',
        padding: '16px',
        borderRadius: '8px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        '&:hover': {
          backgroundColor: selected ? '#363733' : 'rgba(255, 255, 255, 0.1)',
        },
      }}
      onClick={onClick}
    >
      <Typography variant="h3" sx={{ flex: 1, color: selected ? 'white' : 'rgba(255, 255, 255, 0.5)' }}>
        {year}
      </Typography>
      <Typography variant="h3" sx={{ flex: 2, textAlign: 'center', color: selected ? 'white' : 'rgba(255, 255, 255, 0.5)' }}>
        {title}
      </Typography>
      <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
        <IconButton sx={{ color: selected ? 'white' : 'rgba(255, 255, 255, 0.5)' }}>
          {selected ? <ArrowOutwardIcon /> : <ArrowForwardIcon />}
        </IconButton>
      </Box>
    </Box>
  );
};

export default AwardCard;
