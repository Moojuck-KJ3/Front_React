import React, { useEffect } from 'react';
import { logout } from '../../shared/utils/auth';
import { connect } from 'react-redux';
import { getActions } from '../../store/actions/authActions';
import { connectWithSocketServer } from '../../realtimeCommunication/socketConnection';
import FriendSideBar from './friendsSideBar/FriendSideBar';
import Room from './room/Room';
import ActiveRoomList from './ActiveRoomList';
import { styled } from '@mui/system';

const LiveModePage: React.FC = ({ setUserDetails, isUserInRoom }) => {
  useEffect(() => {
    const userDetails = localStorage.getItem('user');

    if (!userDetails) {
      logout();
    } else {
      setUserDetails(JSON.parse(userDetails));
      connectWithSocketServer(JSON.parse(userDetails));
    }
  }, []);

  return (
    <div className="w-full h-full">
      <FriendSideBar />
      <div className="w-full px-20 justify-items-center justify-center gap-y-20 gap-x-14 mt-20 mb-5">
        <ActiveRoomList />
        {isUserInRoom && <Room />}
      </div>
    </div>
  );
};

const mapStoreStateToProps = ({ room }) => {
  return {
    ...room,
  };
};

const mapActionToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(mapStoreStateToProps, mapActionToProps)(LiveModePage);
