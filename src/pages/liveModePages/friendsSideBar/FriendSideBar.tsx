import React from 'react';
import { styled } from '@mui/material';
import AddFriendButton from './AddFriendButton';
import FriendsTitle from './FriendsTitle';
import FriendList from './friendlist/FriendList';
import PendingInvitaionList from './pendingInvitaionList/PendingInvitaionList';

const MainContainer = styled('div')({
  width: '224px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#ffffff',
  border: '1px solid',
});

const FriendSideBar: React.FC = () => {
  return (
    <MainContainer>
      <AddFriendButton />
      <FriendsTitle title="개인 메세지" />
      <FriendList />
      <FriendsTitle title="초대장" />
      <PendingInvitaionList />
    </MainContainer>
  );
};

export default FriendSideBar;
