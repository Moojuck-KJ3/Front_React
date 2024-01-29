import React from 'react';
import CreateRoomButton from './CreateRoomButton';
import { connect } from 'react-redux';
import ActiveRoomButton from './ActiveRoomButton';

const ActiveRoomList: React.FC = ({ activeRooms, isUserInRoom }) => {
  return (
    <div className="w-full min-h-40 flex gap-3 mx-auto">
      {activeRooms.map((room) => (
        <ActiveRoomButton
          roomId={room.roomId}
          creatorUsername={room.creatorUsername}
          amountOfParticipants={room.participants.length}
          key={room.roomId}
          isUserInRoom={isUserInRoom}
          participants={room.participants}
        />
      ))}
      <CreateRoomButton isUserInRoom={isUserInRoom} />
    </div>
  );
};

const mapStoreStateToProps = ({ room }) => {
  return {
    ...room,
  };
};

export default connect(mapStoreStateToProps)(ActiveRoomList);
