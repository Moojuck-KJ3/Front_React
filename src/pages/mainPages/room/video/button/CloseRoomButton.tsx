import React from 'react';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import * as roomHandler from '../../../../../realtimeCommunication/roomHandler';
import Tooltip from '@mui/material/Tooltip';

const CloseRoomButton: React.FC = () => {
  const handleLeaveRoom = () => {
    console.log('handleLeaveRoom!');

    roomHandler.leaveRoom();
  };

  return (
    <IconButton onClick={handleLeaveRoom} style={{ color: 'white' }}>
      <LogoutIcon />
    </IconButton>
  );
};

export default CloseRoomButton;
