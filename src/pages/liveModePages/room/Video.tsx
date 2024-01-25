import { styled } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import RoomButton from './roomButtons.tsx/RoomButton';

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
    <div className="w-1/2 h-1/2">
      <video className="w-full h-full object-cover" ref={videoRef} autoPlay muted={isLocalStream ? true : false} />
    </div>
  );
};

export default Video;
