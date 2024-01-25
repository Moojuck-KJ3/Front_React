import React from 'react';
import { connect } from 'react-redux';
import Video from './Video';
import RoomButton from './roomButtons.tsx/RoomButton';

const VideoContainer: React.FC = ({ localStream, remoteStreams }) => {
  return (
    <div className="h-[85%] w-full flex flex-wrap bg-black ">
      <div className="w-full h-[40px] bg-[#40BFFF] rounded-t-lg"></div>
      <Video stream={localStream} isLocalStream />
      {remoteStreams.map((stream) => (
        <Video stream={stream} key={stream.id} />
      ))}
      <RoomButton />
    </div>
  );
};

const mapStoreStateToProps = ({ room }) => {
  return {
    ...room,
  };
};

export default connect(mapStoreStateToProps)(VideoContainer);
