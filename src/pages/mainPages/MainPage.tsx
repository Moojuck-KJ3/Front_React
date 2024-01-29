import React, { useEffect } from 'react';
import { logout } from '../../shared/utils/auth';
import { connect } from 'react-redux';
import { getActions } from '../../store/actions/authActions';
import { connectWithSocketServer } from '../../realtimeCommunication/socketConnection';
import Room from './room/room/Room';
import Entry from './entry/Entry';

const MainPage: React.FC = ({ setUserDetails, isUserInRoom }) => {
  useEffect(() => {
    const userDetails = localStorage.getItem('user');

    if (!userDetails) {
      logout();
    } else {
      setUserDetails(JSON.parse(userDetails));
      connectWithSocketServer(JSON.parse(userDetails));
    }
  }, []);

  return <div className="container mx-auto py-10">{isUserInRoom ? <Room /> : <Entry />}</div>;
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

export default connect(mapStoreStateToProps, mapActionToProps)(MainPage);
