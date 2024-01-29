import React from 'react';
import FriendSideBar from './friendsSideBar/FriendSideBar';
import FriendsTitle from './friendsSideBar/FriendsTitle';
import PendingInvitaionList from './friendsSideBar/pendingInvitaionList/PendingInvitaionList';
import ActiveRoomList from '../room/room/ActiveRoomList';

const Entry = () => {
  return (
    <div className="w-full h-full">
      <div className="flex w-full gap-4 justify-center ">
        <div className="w-[300px]">
          <div className="bg-white shadow rounded-lg p-4">
            <FriendSideBar />
          </div>
          <div className="bg-white shadow rounded-lg p-4 mt-4">
            <FriendsTitle title="초대 요청" />
            <PendingInvitaionList />
          </div>
        </div>
        <div className="flex h-60">
          <div className=" bg-white shadow rounded-lg p-4">
            <h1 className="font-bold text-center mb-4 text-xl">방 목록</h1>
            <ActiveRoomList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Entry;
