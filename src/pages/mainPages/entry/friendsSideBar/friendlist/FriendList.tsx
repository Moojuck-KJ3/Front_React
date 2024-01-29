import React from 'react';
import { styled } from '@mui/material';
import FriendListItem from './FriendListItem';
import { connect } from 'react-redux';

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
  marginBottom: '4px',
});

const checkOnlineUsers = (friends = [], onlineUsers = []) => {
  friends.forEach((f) => {
    const isUserOnline = onlineUsers.find((user) => user.userId === f.id);
    f.isOnline = isUserOnline ? true : false;
  });

  return friends;
};

const FriendList = ({ friends, onlineUsers }) => {
  return (
    <MainContainer>
      {checkOnlineUsers(friends, onlineUsers).map((friend) => (
        <FriendListItem username={friend.username} id={friend.id} key={friend.id} isOnline={friend.isOnline} />
      ))}
    </MainContainer>
  );
};

const mapStoreStateToProps = ({ friends }) => {
  return {
    ...friends,
  };
};

export default connect(mapStoreStateToProps, null)(FriendList);
