import React from 'react';
import { styled } from '@mui/material';
import FriendListItem from './FriendListItem';

const DUMMY_FRIENDS = [
  {
    id: 1,
    username: '마찬옥',
    isOnline: true,
  },
  {
    id: 2,
    username: '현재훈',
    isOnline: false,
  },
  {
    id: 3,
    username: '천지영',
    isOnline: true,
  },
  {
    id: 4,
    username: '이서연',
    isOnline: true,
  },
];

const MainContainer = styled('div')({
  flexGrow: 1,
  width: '100%',
});

const FriendList = () => {
  return (
    <MainContainer>
      {DUMMY_FRIENDS.map((friend) => (
        <FriendListItem username={friend.username} id={friend.id} key={friend.id} isOnline={friend.isOnline} />
      ))}
    </MainContainer>
  );
};

export default FriendList;
