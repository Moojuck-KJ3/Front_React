import React from 'react';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '../../../../shared/components/Avatar';
import * as roomHandler from '../../../../realtimeCommunication/roomHandler';
import { Link } from 'react-router-dom';

const ActiveRoomButton = ({ creatorUsername, roomId, amountOfParticipants, isUserInRoom, participants }) => {
  const handleJoinActiveRoom = () => {
    if (amountOfParticipants < 4) {
      roomHandler.joinRoom(roomId);
    }
  };
  const activeRoomButtonDisabled = amountOfParticipants > 3;
  const roomTitle = `방장 : ${creatorUsername}. 참가 인원: ${amountOfParticipants}`;

  return (
    <Tooltip title={roomTitle}>
      <div className="w-72 h-38 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl flex flex-col">
        <button disabled={activeRoomButtonDisabled || isUserInRoom} onClick={handleJoinActiveRoom}>
          <div className="px-4 py-3 w-72">
            <div className="flex justify-between">
              <p className=" text-lg font-bold text-black truncate block capitalize">추천 진행 중</p>
              <span className="text-gray-400 mr-1 uppercase text-sm">{`참가 인원 ${amountOfParticipants}명`}</span>
            </div>

            <div className="h-2/3 mt-1 w-full justify-center flex gap-1">
              {participants.map((participant) => (
                <Avatar key={participant.userId} username={participant.userId} />
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center mb-5 gap-4">
              <div className=" bg-white hover:bg-gray-100 text-gray-800 font-semibold border rounded py-2 px-4 shadow">
                참가하기
              </div>
            </div>
          </div>
        </button>
      </div>
    </Tooltip>
  );
};

export default ActiveRoomButton;
