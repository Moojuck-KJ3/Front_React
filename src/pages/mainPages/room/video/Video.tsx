import { styled } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import RoomButton from './button/RoomButton';

const Video: React.FC = ({ stream, isLocalStream }) => {
  const videoRef = useRef();
  useEffect(() => {
    const video = videoRef.current;
    video.srcObject = stream;

    video.onloadedmetadata = () => {
      video.play();
    };
  }, [stream]);
  return (
    <div className="m-4">
      <video className="w-60 rounded-t-xl items-center" ref={videoRef} autoPlay muted={isLocalStream ? true : false} />
      <RoomButton />
    </div>
  );
};

export default Video;
