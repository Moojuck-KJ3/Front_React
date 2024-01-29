import React from 'react';
import { connect } from 'react-redux';
import Video from './Video';
import RoomButton from './button/RoomButton';
import Button from '../../../../shared/components/buttton/Button';
import CallPassButton from '../../mode/modeThree/button/CallPassButton';

const VideoContainer: React.FC = ({ ModeState, localStream, remoteStreams }) => {
  return (
    <div className="fixed bottom-0 w-full justify-between flex z-[2000]">
      <div className="ml-6">
        {ModeState === 'MODE3' ? <CallPassButton /> : null}
        <Video stream={localStream} isLocalStream />
      </div>
      <div className="ml-6">
        {remoteStreams[0] && ModeState === 'MODE3' ? <CallPassButton /> : null}
        {remoteStreams[0] && <Video stream={remoteStreams[0]} />}
      </div>
    </div>
  );
};

const mapStoreStateToProps = ({ room }) => {
  return {
    ...room,
  };
};

export default connect(mapStoreStateToProps)(VideoContainer);
