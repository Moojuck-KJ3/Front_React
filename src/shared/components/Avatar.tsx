import { styled } from '@mui/material';
import React from 'react';

const AvatarPreview = styled('div')({
  height: '42px',
  width: '42px',
  backgroundColor: '#40BFFF',
  borderRadius: '42px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '18px',
  fontWeight: 700,
  marginLeft: '5px',
  color: 'white',
});

const Avatar = ({ username, large }) => {
  return (
    <AvatarPreview style={large ? { height: '80px', width: '80px' } : {}}>{username.substring(1, 3)}</AvatarPreview>
  );
};

export default Avatar;
