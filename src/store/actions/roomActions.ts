import { openAlertMessage } from './alertActions';
import * as api from '../../api';

export const roomActions = {
  OPEN_ROOM: 'ROOM.OPEN_ROOM',
  SET_ROOM_DETAILS: 'ROOM.SET_ROOM_DETAILS',
  SET_ACTIVE_ROOMS: 'ROOM.SET_ACTIVE_ROOMS',
  SET_LOCAL_STREAM: 'ROOM.SET_LOCAL_STREAM',
  SET_REMOTE_STREAMS: 'ROOM.SET_REMOTE_STREAMS',
  SET_AUDIO_ONLY: 'ROOM.SET_AUDIO_ONLY',
  SET_SCREEN_SHARE_STREAM: 'ROOM.SET_SCREEN_SHARE_STREAM',

  SET_IS_USER_JOINED_WITH_ONLY_AUDIO: 'ROOM.SET_IS_USER_JOINED_WITH_ONLY_AUDIO',
  SET_IS_INIT_ROOM: 'SET_IS_INIT_ROOM',
  SET_ROOM_MODE: 'ROOM.SET_ROOM_MODE',
  SET_ROOM_ID: 'ROOM.SET_ROOM_ID',
  SET_DECISE_RESTAURANT_ID: 'ROOM.SET_DECISE_RESTAURANT_ID',
};

export const setOpenRoom = (isUserRoomCreator = false, isUserInRoom = false) => {
  return {
    type: roomActions.OPEN_ROOM,
    isUserRoomCreator,
    isUserInRoom,
  };
};

export const getActions = (dispatch) => {
  return {
    setAudioOnly: (audioOnly) => dispatch(setAudioOnly(audioOnly)),
    setScreenSharingStream: (stream) => {
      dispatch(setScreenSharingStream(stream));
    },
    setInitRoom: (InitRoom) => {
      dispatch(setInitRoom(InitRoom));
    },
    setRoomMode: (roomMode) => {
      dispatch(setRoomMode(roomMode));
    },
    setRoomId: (roomId) => dispatch(setRoomId(roomId)),
    setDeciseRestaurantId: (restaurantId) => dispatch(setDeciseRestaurantId(restaurantId)),
  };
};

export const setInitRoom = (InitRoom) => {
  console.log('setInitRoom is called!');
  return {
    type: roomActions.SET_IS_INIT_ROOM,
    InitRoom,
  };
};

export const setRoomMode = (roomMode) => {
  console.log('setRoomMode is called!');
  console.log(roomMode);

  return {
    type: roomActions.SET_ROOM_MODE,
    roomMode,
  };
};

export const setRoomDetails = (roomDetails) => {
  return {
    type: roomActions.SET_ROOM_DETAILS,
    roomDetails,
  };
};

export const setActiveRooms = (activeRooms) => {
  return {
    type: roomActions.SET_ACTIVE_ROOMS,
    activeRooms,
  };
};

export const setLocalStream = (localStream) => {
  return {
    type: roomActions.SET_LOCAL_STREAM,
    localStream,
  };
};

export const setAudioOnly = (audioOnly) => {
  return {
    type: roomActions.SET_AUDIO_ONLY,
    audioOnly,
  };
};

export const setRemoteStreams = (remoteStreams) => {
  return {
    type: roomActions.SET_REMOTE_STREAMS,
    remoteStreams,
  };
};

export const setScreenSharingStream = (stream) => {
  return {
    type: roomActions.SET_SCREEN_SHARE_STREAM,
    isScreenSharingActive: stream ? true : false,
    screenSharingStream: stream || null,
  };
};

export const setIsUserJoinedOnlyWithAudio = (onlyWithAudio) => {
  return {
    type: roomActions.SET_IS_USER_JOINED_WITH_ONLY_AUDIO,
    isUserJoinedWithOnlyAudio: onlyWithAudio,
  };
};

export const setRoomId = (roomId) => {
  return {
    type: roomActions.SET_ROOM_ID,
    roomId,
  };
};

export const setDeciseRestaurantId = (restaurantId) => {
  return {
    type: roomActions.SET_DECISE_RESTAURANT_ID,
    restaurantId,
  };
};