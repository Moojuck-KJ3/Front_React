import * as React from 'react';
import { connect } from 'react-redux';
import { getActions } from '../../../store/actions/roomActions';
import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';

const AudioOnlyButton = ({ audioOnly, setAudioOnly }) => {
  const handleAudioOnlyChange = () => {
    setAudioOnly(!audioOnly);
  };

  return <button onClick={handleAudioOnlyChange}>{audioOnly ? <MicIcon /> : <MicOffIcon />}</button>;
};

const mapStoreStateToProps = ({ room }) => {
  return {
    ...room,
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(mapStoreStateToProps, mapActionsToProps)(AudioOnlyButton);
