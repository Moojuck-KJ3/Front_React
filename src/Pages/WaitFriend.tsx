import React from 'react';
import WaitingFriendModal from '../Components/WaitingFriendModal';

const WaitFriend = () => {
  return (
    
    <div className=" min-h-screen text-gray-900 flex justify-center">
      <div className="m-20  max-w-screen- sm-m-10 sm:rounded-lg flex justify-center flex-1">
        <img src="./WaitingFriendImg.png" alt="WaitingFriendImg" />
        <WaitingFriendModal />
      </div>
    </div>
  );
};

export default WaitFriend;
