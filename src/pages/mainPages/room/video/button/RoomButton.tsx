import { Tooltip, styled } from '@mui/material';
import React from 'react';
import MicIcon from '@mui/icons-material/Mic';
import MicButton from './MicButton';
import CloseRoomButton from './CloseRoomButton';
import CameraButton from './CameraButton';
import { connect } from 'react-redux';

const RoomButton = ({ localStream }) => {
  return (
    <div className="w-full h-[35px] bg-[#40BFFF] rounded-b-lg flex justify-center items-center">
      <MicButton localStream={localStream} />
      <CameraButton localStream={localStream} />
      <CloseRoomButton />
    </div>
  );
};

const mapStoreStateToProps = ({ room }) => {
  return {
    ...room,
  };
};

export default connect(mapStoreStateToProps)(RoomButton);
