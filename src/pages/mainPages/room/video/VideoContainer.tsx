import React from 'react';
import { connect } from 'react-redux';
import Video from './Video';
import CallPassButton from '../../mode/modeThree/button/CallPassButton';
import VoiceRecoder from '../../mode/modeOne/VoiceRecoder';

const VideoContainer: React.FC = ({ ModeState, localStream, remoteStreams }) => {
  console.log(ModeState);

  return (
    <div className="fixed bottom-0 w-full justify-between flex z-[2000]">
      <div className="flex flex-col ml-6 justify-end">
        {ModeState === 'MODE3' ? <CallPassButton /> : null}
        {ModeState === 'MODE1' ? <VoiceRecoder /> : null}
        <Video stream={localStream} isLocalStream />
      </div>
      <div className="flex flex-col justify-end ml-6">
        {remoteStreams[0] && ModeState === 'MODE3' ? <CallPassButton /> : null}
        {ModeState === 'MODE1' ? <VoiceRecoder /> : null}
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
