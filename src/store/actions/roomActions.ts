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

  // 여러 상태가 하나의 액션으로 바뀌니 참고하세요
  SET_MOOD_KEYWARD: 'ROOM.SET_MOOD_KEYWARD',
  SET_TAGS_BY_AUDIO : 'ROOM.SET_TAGS_BY_AUDIO',
  SET_KEYWORDS_2_RESTS : 'ROOM.SET_KEYWORDS_2_RESTS',
  SET_ALL_RESTS : 'ROOM.SET_ALL_RESTS',
  SET_RESULT_REST : 'ROOM.SET_RESULT_REST',
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
    setScreenSharingStream: (stream) => dispatch(setScreenSharingStream(stream)),
    setMoodKeyWard: (datas) => dispatch(setMoodKeyWard(datas)),
    getTagsByAudio: (datas) => dispatch(getTagsByAudio(datas)),
    getKeywords2Rests: (datas) => dispatch(getKeywords2Rests(datas)),
    getNewCombine: (datas) => dispatch(getNewCombine(datas)),
    getRestCallPass: (datas) => dispatch(getRestCallPass(datas)),
    getResultRests: (datas) => dispatch(getResultRests(datas)),
  };
};

// 결과결정 페이지
// user1_id 와 user2_id를 userData에 넣음 (get 요청 처리할때 param으로 쓸 예정)
export const getResultRests = (userData) => {
  return async (dispatch) => {
    const response = await api.roomGetResultData(userata);

    if (response.error) {
      dispatch(openAlertMessage(response.exception?.response?.data));
    } else {
      const { rest1, rest2 } = response.data;
      dispatch(setResultRest(rest1, rest2));
    }
  };
};

export const setResultRest = (rest1, rest2) => {
  return {
    type: roomActions.SET_RESULT_REST,
    rest1,
    rest2,
  };
};

// 의사결정 페이지 (1/2)
// user1_id 와 user2_id를 userData에 넣음 (get 요청 처리할때 param으로 쓸 예정)
export const getRestCallPass = (userData) => {
  return async (dispatch) => {
    const response = await api.roomRestCallPassData(userata);

    if (response.error) {
      dispatch(openAlertMessage(response.exception?.response?.data));
    } else {
      const { rest1, rest2,rest3,rest4,rest5 } = response.data;
      dispatch(setAllRests(rest1, rest2,rest3,rest4,rest5));
    }
  };
};

// 교집합 식당 추천 페이지(1/2) 와 관련된 액션
// url로 네이밍하나 이미 get 요청인 keyworkds2rests가 존재하여
// 본래 기능에 따른 것으로 분류하여 네이밍함
export const getNewCombine = (userData) => {
  return async (dispatch) => {
    const response = await api.roomRequestNewCombine(userData);

    if (response.error) {
      dispatch(openAlertMessage(response.exception?.response?.data));
    } else {
      const { rest1, rest2,rest3,rest4,rest5 } = response.data;
      dispatch(setAllRests(rest1, rest2,rest3,rest4,rest5));
    }
  };
};

export const setAllRests = (rest1,rest2,rest3,rest4,rest5) => {
  return {
    type: roomActions.SET_ALL_RESTS,
    rest1,
    rest2,
    rest3,
    rest4,
    rest5,
  };
};

// 교집합 식당 추천 페이지(1/2)와 관련된 액션
// get 요청이지만, param이 존재하기에 인자를 받는다
export const getKeywords2Rests = (userData) => {
  return async (dispatch) => {
    const response = await api.roomGetRecommendRestaurant(userData);

    if (response.error) {
      dispatch(openAlertMessage(response.exception?.response?.data));
    } else {
      const { rest1, rest2,rest3 } = response.data;
      dispatch(setKeyWords2RestsData(rest1, rest2,rest3));
    }
  };
};

export const setKeyWords2RestsData = (rest1,rest2,rest3) => {
  return {
    type: roomActions.SET_KEYWORDS_2_RESTS,
    rest1,
    rest2,
    rest3,
  };
};

// 태그 선택 페이지에서 유저의 음성 스트리밍을 구글 STT API 요청하는 경우
// 이 부분 논의 살짝 필요
// user가 말한 것은 프론트에서 API 요청하여 string으로 가지고 있다가
// 백으로 보내고 응답받을 때는 '키워드'로 받는다
export const getTagsByAudio = (userData) => {
  return async (dispatch) => {
    const response = await api.roomGetMoodKeyword(userData);

    if (response.error) {
      dispatch(openAlertMessage(response.exception?.response?.data));
    } else {
      const { user1, user2 } = response.data;
      dispatch(setTagsByAudioData(user1, user2));
    }
  };
};

export const setTagsByAudioData = (user1, user2) => {
  return {
    type: roomActions.SET_TAGS_BY_AUDIO,
    user1,
    user2,
  };
};

export const setMoodKeyWard = (datas) => {
  return async (dispatch) => {
    const response = await api.roomGetMoodKeyword(datas);

    if (response.error) {
      dispatch(openAlertMessage(response.exception?.response?.data));
    } else {
      const { roomId, user1, user2 } = response.data;
      dispatch(setMoodKeyWardData(roomId, user1, user2));
    }
  };
};

export const setMoodKeyWardData = (roomId, user1, user2) => {
  return {
    type: roomActions.SET_MOOD_KEYWARD,
    roomId,
    user1,
    user2,
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
  console.log('setLocalStream');
  console.log(localStream);

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
