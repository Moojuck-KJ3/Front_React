import { openAlertMessage } from './alertActions';
import * as api from '../../api';

export const friendsActions = {
  SET_FRIENDS: 'FRIENDS.SET_FRIENDS',
  SET_PENDING_FRIENDS_INVITATIONS: 'FRIENDS.SET_PENDING_FRIENDS_INVITATIONS',
  SET_ONLINE_USERS: 'FRIENDS.SET_ONLINE_USERS',
};

export const getActions = (dispatch) => {
  return {
    sendFriendInvitation: (data, closeDialogHandler) => dispatch(sendFriendInvitation(data, closeDialogHandler)),
    acceptFriendInvitation: (data) => dispatch(acceptFriendInvitation(data)),
    rejectFriendInvitation: (data) => dispatch(rejectFriendInvitation(data)),
    getFriends: () => dispatch(getFriends()),
  };
};

export const setPendingFriendsInvitations = (pendingFriendsInvitations) => {
  return {
    type: friendsActions.SET_PENDING_FRIENDS_INVITATIONS,
    pendingFriendsInvitations,
  };
};

export const setFriends = (friends) => {
  return {
    type: friendsActions.SET_FRIENDS,
    friends,
  };
};

export const getFriends = () => {
  return async (dispatch) => {
    const response = await api.getMainData();

    if (response.error) {
      dispatch(openAlertMessage(response.exception?.response?.data));
    } else {
      dispatch(setFriends(response.friends)); // 에러 없이 친구 정보를 잘 가져왔다면 친구 정보 설정 액션 디스패치
    }
  };
};

export const setOnlineUsers = (onlineUsers) => {
  return {
    type: friendsActions.SET_ONLINE_USERS,
    onlineUsers,
  };
};

const sendFriendInvitation = (data, closeDialogHandler) => {
  return async (dispatch) => {
    const response = await api.sendFriendInvitation(data);

    if (response.error) {
      dispatch(openAlertMessage(response.exception?.response?.data));
    } else {
      dispatch(openAlertMessage('Invitation has been sent!'));
      closeDialogHandler();
    }
  };
};

const acceptFriendInvitation = (data) => {
  return async (dispatch) => {
    const response = await api.acceptFriendInvitation(data);

    if (response.error) {
      dispatch(openAlertMessage(response.exception?.response?.data));
    } else {
      dispatch(openAlertMessage('Invitation accepted!'));
    }
  };
};

const rejectFriendInvitation = (data) => {
  return async (dispatch) => {
    const response = await api.rejectFriendInvitation(data);

    if (response.error) {
      dispatch(openAlertMessage(response.exception?.response?.data));
    } else {
      dispatch(openAlertMessage('Invitation rejected!'));
    }
  };
};
