import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { animated, useSpring } from 'react-spring';

const AnimatedBox = animated(Box);

const UniqueFeatures = () => {
  const theme = useTheme();
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 },
  });

  const blurLevel = 10; // Adjust this value to control blur level
  const features = [
    {
      title: 'Understanding the Product',
      content: 'Deep Dive into our services to understand their benefits.'
    },
    // ... (same as above)
  ];

  return (
    <Box padding={3} textAlign="center">
      <Typography variant="h2" marginBottom={3}>
        Why Choose Us?
      </Typography>
      <Box display="flex" flexDirection="column" alignItems="center">
        {features.map((feature, index) => (
          <Box display="flex" flexDirection={index % 2 === 0 ? 'row' : 'row-reverse'} marginBottom={3} key={index}>
            <Box 
              sx={{ 
                background: `linear-gradient(to bottom right, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
                filter: `blur(${blurLevel}px)`,
                height: 250, 
                width: 300,
                position: 'relative',
                borderRadius: 1,
                zIndex: '-1'
              }}
            />
            <AnimatedBox 
              sx={{ 
                ...props, 
                position: 'absolute',
                height: 250,
                width: 300,
                padding: 2,
                zIndex: '1',
                backgroundColor: 'transparent'
              }} 
            >
              <Typography variant="h6">{feature.title}</Typography>
              <Typography variant="body2">{feature.content}</Typography>
            </AnimatedBox>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default UniqueFeatures;
