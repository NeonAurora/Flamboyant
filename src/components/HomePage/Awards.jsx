import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material';
import award1 from 'assets/award1.png';
import award2 from 'assets/award2.png';
import award3 from 'assets/award3.png';
import award4 from 'assets/award4.png';
import award5 from 'assets/award5.png';
import award6 from 'assets/award6.png';
import award7 from 'assets/award7.png';
import award8 from 'assets/award8.png';
import award9 from 'assets/award9.png';

const AwardSection = () => {
  const theme = useTheme();

  const firstGroup = [
    award1,
    award2,
    award3,
    award4,
    award5,
  ];

  const secondGroup = [
    award6,
    award7,
    award8,
    award9,
  ];

  return (
    <Box 
      sx={{
        padding: '2em',
        borderRadius: '1em',
        margin: '2em 0'
      }}
    >
      <Typography
        variant="h2"
        sx={{
          color: theme.palette.text[300],
          textAlign: 'center',
          marginBottom: '1em'
        }}
      >
        Our Awards
      </Typography>

      {/* First Group of 5 Awards */}
      <Box 
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '1em'
        }}
      >
        {firstGroup.map((award, index) => (
          <img
            src={award}
            alt={`award-${index}`}
            style={{
              width: '10%',
              borderRadius: '0.5em',
              margin: '0 1em'
            }}
          />
        ))}
      </Box>

      {/* Second Group of 4 Awards */}
      <Box 
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {secondGroup.map((award, index) => (
          <img
            src={award}
            alt={`award-${index + 5}`}
            style={{
              width: '10%',
              borderRadius: '0.5em',
              margin: '0 1em'
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default AwardSection;
