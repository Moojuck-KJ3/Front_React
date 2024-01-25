// import React from 'react';
// import ActiveRoomButton from './ActiveRoomButton';
// import { connect } from 'react-redux';
// import CreateRoomButton from './CreateRoomButton';

// const ActiveRoomList: React.FC = ({ activeRooms, isUserInRoom }) => {
//   return (
//     <div className="flex gap-4">
//       {activeRooms.map((room) => (
//         <ActiveRoomButton
//           roomId={room.roomId}
//           creatorUsername={room.creatorUsername}
//           amountOfParticipants={room.participants.length}
//           key={room.roomid}
//           isUserInRoom={isUserInRoom}
//           participants={room.participants}
//         />
//       ))}
//       <CreateRoomButton isUserInRoom={isUserInRoom} />
//     </div>
//   );
// };

// const mapStoreStateToProps = ({ room }) => {
//   return {
//     ...room,
//   };
// };

// export default connect(mapStoreStateToProps)(ActiveRoomList);

import React from 'react';
import { styled } from '@mui/system';
import MainPageButton from './MainPageButton';
import CreateRoomButton from './CreateRoomButton';
import { connect } from 'react-redux';
import ActiveRoomButton from './ActiveRoomButton';

const MainContainer = styled('div')({
  width: '72px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const ActiveRoomList = ({ activeRooms, isUserInRoom }) => {
  return (
    <div className="w-full h-full flex gap-3 mx-auto">
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
