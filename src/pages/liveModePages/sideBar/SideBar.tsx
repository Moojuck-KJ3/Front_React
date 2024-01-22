import React from 'react';
import { styled } from '@mui/material';
import LivePageButton from './LivePageButton';

const MainContainer = styled('div')({
  width: '72px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#40BFFF',
  border: '1px solid',
});

const SideBar = () => {
  return (
    <MainContainer>
      <LivePageButton />
    </MainContainer>
  );
};

export default SideBar;
