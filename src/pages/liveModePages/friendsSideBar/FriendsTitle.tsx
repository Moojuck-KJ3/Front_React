import React from 'react';
import { Typography } from '@mui/material';

const FriendsTitle = ({ title }) => {
  return (
    <Typography
      sx={{
        transform: 'uppercase',
        color: '#8e9297',
        fontSize: '14px',
        margin: '10px',
      }}
    >
      {title}
    </Typography>
  );
};

export default FriendsTitle;
