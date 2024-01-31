import axios from 'axios';
import { logout } from './shared/utils/auth';
import * as apiType from './shared/utils/apiInterface';

const apiClient = axios.create({
  baseURL: 'https://backend-nest.fly.dev/api', // main url
  //baseURL: 'https://backend-nest.fly.dev/cats', // test url
  timeout: 3000,
});

apiClient.interceptors.request.use(
  (config) => {
    const userDetails = localStorage.getItem('userToken');

    if (userDetails) {
      //const token = JSON.parse(userDetails).token;
      const token = userDetails;
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// public routes
export const login = async (data:apiType.usersLoginRequest) => {
  try {
    const response = await apiClient.post('/users/login', data);

    const responseData : apiType.usersLoginResponse = {
      accessToken : response.data.accessToken,
      username : response.data.username,
    }

    return responseData;
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

export const register = async (data : apiType.usersRegisterRequest) => {
  try {
    const response = await apiClient.post('/users/register', data)

    const responseData : apiType.usersRegisterResponse = {
      accessToken : response.data.accessToken
    }

    return responseData;
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

// secure routes
export const sendFriendInvitation = async (data) => {
  try {
    return await apiClient.post('/friends/requests', data);
  } catch (exception) {
    checkResponseCode(exception);
    return {
      error: true,
      exception,
    };
  }
};

export const acceptFriendInvitation = async (data) => {
  try {
    return await apiClient.post('/friends/requests/accept', data);
  } catch (exception) {
    checkResponseCode(exception);
    return {
      error: true,
      exception,
    };
  }
};

export const rejectFriendInvitation = async (data) => {
  try {
    return await apiClient.post('/friends/requests/reject', data);
  } catch (exception) {
    checkResponseCode(exception);
    return {
      error: true,
      exception,
    };
  }
};

// Main Page에서 Data 받는 Get API
export const getMainData = async () => {
  try {
    return await apiClient.get('/main');
  } catch (exception) {
    checkResponseCode(exception);
    return {
      error: true,
      exception,
    };
  }
};

// Room API
// 1. 모든 요청은 roomId를 파라미터로 받는다
// 2. get 요청엔 response가 있음
// 3. post 요청엔 response가 없음 (socket.io로 통신하고 해당 방의 모든 유저에게 브로드캐스트하는 방식)

// 음식 종류 수집 페이지에서 유저가 말한 음식 종류를 서버에 전달한다
// data : {userSpeech : string}
export const sendFoodCategorySpeech = async (roomId,data) => {
  try {
    return await apiClient.post(`/rooms/food-category/speech?roomId=${roomId}`, data);
  } catch (exception) {
    checkResponseCode(exception);
    return {
      error: true,
      exception,
    };
  }
};

// 음식 종류 수집 페이지에서 유저가 선택하여 추가하거나 지운 음식 종류를 서버에 전달한다
// data : {“categoryId” : string, “isDelete” : boolean}
export const sendFoodCategoryButton = async (roomId,data) => {
  try {
    return await apiClient.post(`/rooms/food-category?roomId=${roomId}`, data);
  } catch (exception) {
    checkResponseCode(exception);
    return {
      error: true,
      exception,
    };
  }
};

// 무드 키워드 수집 모드에서, 처음에 get 요청을 보내 미리 뜰 분위기 키워드 표시
export const getMoodKeyword = async (roomId) => {
  try {
    return await apiClient.get(`/rooms/mood-keyword?roomId = ${roomId}`);
  } catch (exception) {
    checkResponseCode(exception);
    return {
      error: true,
      exception,
    };
  }
};

// 무드 키워드 수집 모드에서 유저가 말한 무드 키워드를 서버에 전달한다
// data : {userSpeech : string}
export const postMoodKeywordSpeech = async (roomId,data) => {
  try {
    return await apiClient.post(`/rooms/mood-keyword/speech?roomId = ${roomId}`,data);
  } catch (exception) {
    checkResponseCode(exception);
    return {
      error: true,
      exception,
    };
  }
};

// 무드 키워드 수집 모드에서 유저가 선택하거나 지운 무드 키워드를 서버에 전달한다
// data : {“keywordId” : string, “isDelete” : boolean}
export const postMoodKeywordButton = async (roomId,data) => {
  try {
    return await apiClient.post(`/rooms/mood-keyword?roomId = ${roomId}`,data);
  } catch (exception) {
    checkResponseCode(exception);
    return {
      error: true,
      exception,
    };
  }
};

// 교집합 식당 추천 모드에서 기본 식당들을 받는다
export const getKeywordsToRests = async (roomId) => {
  try {
    return await apiClient.get(`/rooms/keywords-to-rests?roomId = ${roomId}`);
  } catch (exception) {
    checkResponseCode(exception);
    return {
      error: true,
      exception,
    };
  }
};

// 교집합 식당 추천 모드에서 식당을 슬롯에 넣어 조합을 시도한다
// 두 슬롯이 모두 차있어야 반응이 오기에, response body는 없음
// data : {"restId" : string, "slotIndex" : number,}
export const postKeywordsToRests = async (roomId,data) => {
  try {
    return await apiClient.post(`/rooms/keywords-to-rests?roomId = ${roomId}`,data);
  } catch (exception) {
    checkResponseCode(exception);
    return {
      error: true,
      exception,
    };
  }
};

// 의사 결정 모드에서 식당들을 받는다
export const getRestDecision = async (roomId) => {
  try {
    return await apiClient.get(`/rooms/rest-decision?roomId = ${roomId}`);
  } catch (exception) {
    checkResponseCode(exception);
    return {
      error: true,
      exception,
    };
  }
};

// 의사 결정 모드에서 o,x 를 눌러 식당에 대한 의사를 표현한다
// data : {"restId" : string, "isAgree" : boolean}
export const postRestDecision = async (roomId,data) => {
  try {
    return await apiClient.post(`/rooms/rest-decision?roomId = ${roomId}`,data);
  } catch (exception) {
    checkResponseCode(exception);
    return {
      error: true,
      exception,
    };
  }
};

// 결과 페이지에서 선택된 식당과 선택이 되지 못하였지만 추천된 식당 리스트를 받는다
export const getResult = async (roomId) => {
  try {
    return await apiClient.get(`/rooms/result?roomId = ${roomId}`);
  } catch (exception) {
    checkResponseCode(exception);
    return {
      error: true,
      exception,
    };
  }
};

// room에서 의사결정 버튼 누른 경우에 대한 get 요청
export const selectDone = async (roomId) => {
  try {
    return await apiClient.get(`/rooms/result?roomId = ${roomId}`);
  } catch (exception) {
    checkResponseCode(exception);
    return {
      error: true,
      exception,
    };
  }
}

const checkResponseCode = (exception) => {
  const responseCode = exception?.response?.status;

  if (responseCode) {
    (responseCode === 401 || responseCode === 403) && logout();
  }
};
