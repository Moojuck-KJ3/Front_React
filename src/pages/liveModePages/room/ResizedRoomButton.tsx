import { styled, IconButton } from '@mui/material';
import React from 'react';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';

const MainContainer = styled('div')({
  position: 'absolute',
  bottom: '10px',
  right: '10px',
});

const ResizedRoomButton = ({ isRoomMinimized, handleRoomResize }) => {
  return (
    <MainContainer>
      <IconButton style={{ color: 'white' }} onClick={handleRoomResize}>
        {isRoomMinimized ? <OpenInFullIcon /> : <CloseFullscreenIcon />}
      </IconButton>
    </MainContainer>
  );
};

export default ResizedRoomButton;
