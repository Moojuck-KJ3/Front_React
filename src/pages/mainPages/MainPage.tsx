import React, { useEffect } from 'react';
import { logout } from '../../shared/utils/auth';
import { connect } from 'react-redux';
import { getActions as getAuthActions } from '../../store/actions/authActions';
import { getFriends, getActions as getFriendsActions } from '../../store/actions/friendsActions';
import { connectWithSocketServer } from '../../realtimeCommunication/socketConnection';
import Room from './room/room/Room';
import Entry from './entry/Entry';

const MainPage: React.FC = ({ setUserDetails, isUserInRoom }) => {
  useEffect(() => {
    const userDetails = localStorage.getItem('userToken');

    if (!userDetails) {
      logout();
    } else {
      // setUserDetails(JSON.parse(userDetails));
      // connectWithSocketServer(JSON.parse(userDetails));
      setUserDetails(userDetails);
      connectWithSocketServer(userDetails);
      getFriends();
    }
  });

  return <div className="container mx-auto py-10">{isUserInRoom ? <Room /> : <Entry />}</div>;
};

const mapStoreStateToProps = ({ room }) => {
  return {
    ...room,
  };
};

const mapActionToProps = (dispatch) => {
  const friendsActions = getFriendsActions(dispatch);
  return {
    ...getAuthActions(dispatch),
    getFriends: friendsActions.getFriends, // getFriends 함수를 props로 전달
  };
};


export default connect(mapStoreStateToProps, mapActionToProps)(MainPage);
