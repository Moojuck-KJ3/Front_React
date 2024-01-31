import React from 'react';
import { styled } from '@mui/material';
import PendingInvitaionListItem from './PendingInvitaionListItem';
import { connect } from 'react-redux';

const MainContainer = styled('div')({
  height: '22%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  overflow: 'auto',
});

const PendingInvitaionList: React.FC = ({ pendingFriendsInvitations }) => {
  return (
    <MainContainer>
      {pendingFriendsInvitations.map((invitaion) => (
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

const mapStoreStateToProps = ({ friends }) => {
  return {
    ...friends,
  };
};

export default connect(mapStoreStateToProps)(PendingInvitaionList);
