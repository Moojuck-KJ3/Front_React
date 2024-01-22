import React, { useEffect } from 'react';
import { styled } from '@mui/material';
import SideBar from './sideBar/SideBar';
import FriendSideBar from './friendsSideBar/FriendSideBar';
import Messenger from './messenger/Messenger';
import AppBar from './appBar/AppBar';
import { logout } from '../../shared/utils/auth';
import { connect } from 'react-redux';
import { getActions } from '../../store/actions/authActions';

const Wrapper = styled('div')({
  width: '100%',
  height: '100vh',
  display: 'flex',
});

const LiveModePage: React.FC = ({ setUserDetails }) => {
  useEffect(() => {
    const userDetails = localStorage.getItem('user');
    console.log(userDetails);

    if (!userDetails) {
      logout();
    } else {
      setUserDetails(JSON.parse(userDetails));
    }
  }, []);
  return (
    <Wrapper>
      <SideBar />
      <FriendSideBar />
      <Messenger />
      <AppBar />
    </Wrapper>
  );
};

const mapActionToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionToProps)(LiveModePage);
