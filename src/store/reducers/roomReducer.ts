import { roomActions } from '../actions/roomActions';

const initState = {
  isUserInRoom: false,
  isUserRoomCreator: false,
  roomDetails: null,
  activeRooms: [],
  localStream: null,
  remoteStreams: [],
  audioOnly: false,
  screenSharingStream: null,
  isScreenSharingActive: false,
  isUserJoinedWithOnlyAudio: false,
  roomId: null,
  user1: null,
  user2: null,
  rest1: null, // rest 들은 api 요청에 따라 내용이 달라질 수 있으므로 주의할 것
  rest2: null, // rest1,2 는 결과창에 사용된다
  rest3: null,
  rest4: null, // rest4,5 는 특정한 요청에만 값이 포함되어 오니 주의할 것
  rest5: null,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case roomActions.OPEN_ROOM:
      return {
        ...state,
        isUserInRoom: action.isUserInRoom,
        isUserRoomCreator: action.isUserRoomCreator,
      };
    case roomActions.SET_ROOM_DETAILS:
      return {
        ...state,
        roomDetails: action.roomDetails,
      };
    case roomActions.SET_ACTIVE_ROOMS:
      return {
        ...state,
        activeRooms: action.activeRooms,
      };
    case roomActions.SET_LOCAL_STREAM:
      return {
        ...state,
        localStream: action.localStream,
      };
    case roomActions.SET_AUDIO_ONLY:
      return {
        ...state,
        audioOnly: action.audioOnly,
      };
    case roomActions.SET_REMOTE_STREAMS:
      return {
        ...state,
        remoteStreams: action.remoteStreams,
      };
    case roomActions.SET_SCREEN_SHARE_STREAM:
      return {
        ...state,
        screenSharingStream: action.screenSharingStream,
        isScreenSharingActive: action.isScreenSharingActive,
      };
    case roomActions.SET_IS_USER_JOINED_WITH_ONLY_AUDIO:
      return {
        ...state,
        isUserJoinedWithOnlyAudio: action.isUserJoinedWithOnlyAudio,
      };
    case roomActions.SET_MOOD_KEYWARD:
      return {
        ...state,
        roomId: action.roomId,
        user1: action.user1,
        user2: action.user2,
      };
    case roomActions.SET_TAGS_BY_AUDIO:
      return {
        ...state,
        user1: action.user1,
        user2: action.user2,
      };
    case roomActions.SET_KEYWORDS_2_RESTS:
        return {
          ...state,
          rest1 : action.rest1,
          rest2 : action.rest2,
          rest3 : action.rest3,
        };
    case roomActions.SET_ALL_RESTS:
        return {
          ...state,
          rest1 : action.rest1,
          rest2 : action.rest2,
          rest3 : action.rest3,
          rest4 : action.rest4,
          rest5 : action.rest5,
        };
    case roomActions.SET_RESULT_REST:
        return {
          ...state,
          rest1 : action.rest1,
          rest2 : action.rest2,
        };
    default:
      return state;
  }
};

export default reducer;
