import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { createNewRoom } from '../../realtimeCommunication/roomHandler';

const CreateRoomButton = ({ isUserInRoom }) => {
  const createNewRoomHandler = () => {
    createNewRoom();
  };
  return (
    <button
      disabled={isUserInRoom}
      onClick={createNewRoomHandler}
      className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl flex flex-col justify-center items-center"
    >
      <AddIcon />
    </button>
  );
};

export default CreateRoomButton;
