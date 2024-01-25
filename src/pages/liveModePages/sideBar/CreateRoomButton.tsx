import { Button } from '@mui/material';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import * as roomHandler from '../../../realtimeCommunication/roomHandler';

const CreateRoomButton: React.FC = ({ isUserInRoom }) => {
  const createNewRoomHandler = () => {
    roomHandler.createNewRoom();
  };

  return (
    <Button
      disabled={isUserInRoom}
      onClick={createNewRoomHandler}
      style={{
        width: '48px',
        height: '48px',
        borderRadius: '16px',
        margin: '0',
        padding: '0',
        minWidth: '0',
        marginTop: '10px',
        color: 'black',
        background: '#ffffff',
      }}
    >
      <AddIcon />
    </Button>
  );
};

export default CreateRoomButton;
