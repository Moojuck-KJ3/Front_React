import React from 'react';
import { styled } from '@mui/material';

const MainContainer = styled('div')({
  position: 'absolute',
  right: '0',
  top: '0',
  height: '48px',
  borderBottom: '1px solid black',
  backgroundColor: '#40BFFF',
  width: 'calc(100% - 296px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 15px',
});

const AppBar = () => {
  return <MainContainer></MainContainer>;
};

export default AppBar;
