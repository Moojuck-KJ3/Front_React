import { styled } from '@mui/material';
import React, { useState } from 'react';
import ResizedRoomButton from './ResizedRoomButton';
import VideoContainer from './VideoContainer';
import RoomButton from './roomButtons.tsx/RoomButton';
import ChatBox from './ChatBox';

const Room = () => {
  return (
    <div className="absolute w-full h-full top-0 left-0 flex  bg-[#20B4C8] bg-gradient-to-r from-transparent to-white">
      <div className="bg-gradient-to-l from-transparent to-white">
        <div className=" absolute top-0 right-0 w-[35%] h-[48%] rounded-b-xl">
          <ChatBox />
        </div>
        <div className=" absolute bottom-5 right-0 w-[35%] h-[50%] bg-black rounded-t-xl">
          <VideoContainer />
        </div>
      </div>
    </div>
  );
};

export default Room;
