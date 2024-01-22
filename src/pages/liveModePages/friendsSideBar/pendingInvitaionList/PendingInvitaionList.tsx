import React from 'react';
import { styled } from '@mui/material';
import PendingInvitaionListItem from './PendingInvitaionListItem';

const DUMMY_INVITAIONS = [
  {
    _id: '1',
    senderId: {
      username: '마찬옥',
      email: 'qnqnwnr@naver.com',
    },
  },
  {
    _id: '2',
    senderId: {
      username: '현재훈',
      email: 'jahun123@naver.com',
    },
  },
];

const MainContainer = styled('div')({
  height: '22%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  overflow: 'auto',
});

const PendingInvitaionList = () => {
  return (
    <MainContainer>
      {DUMMY_INVITAIONS.map((invitaion) => (
        <PendingInvitaionListItem
          key={invitaion._id}
          id={invitaion._id}
          username={invitaion.senderId.username}
          email={invitaion.senderId.email}
        ></PendingInvitaionListItem>
      ))}
    </MainContainer>
  );
};

export default PendingInvitaionList;
