import axios from 'axios';
import { logout } from './shared/utils/auth';

const apiClient = axios.create({
  //baseURL: 'https://backend-nest.fly.dev/api', // main url
  baseURL: 'https://backend-nest.fly.dev/cats', // test url
  timeout: 1000,
});

apiClient.interceptors.request.use(
  (config) => {
    const userDetails = localStorage.getItem('user');

    if (userDetails) {
      const token = JSON.parse(userDetails).token;
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// public routes
export const login = async (data) => {
  try {
    return await apiClient.get('/users/login', data);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

export const register = async (data) => {
  try {
    return await apiClient.post('/users/register', data);
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
    return await apiClient.post('/friends/requests/decline', data);
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
export const roomGetAddress = async (data) => {
  try {
    return await apiClient.post('/rooms/get-address', data);
  } catch (exception) {
    checkResponseCode(exception);
    return {
      error: true,
      exception,
    };
  }
};

export const roomGetFoodCategory = async (data) => {
  try {
    return await apiClient.post('/rooms/get-foodCategory', data);
  } catch (exception) {
    checkResponseCode(exception);
    return {
      error: true,
      exception,
    };
  }
};

// 보내주는 Data 방식이 2개이므로 Data Props를 잘 참고하여 보내기
// 1. 단순 태그 보내기
// 2. 최종 태그 선택 후 보내기
export const roomGetMoodKeyword = async (data) => {
  try {
    return await apiClient.post('/rooms/get-moodKeyword', data);
  } catch (exception) {
    checkResponseCode(exception);
    return {
      error: true,
      exception,
    };
  }
};

export const roomSendTagByAudio = async (data) => {
  try {
    return await apiClient.post('/rooms/get-tags-by-audio', data);
  } catch (exception) {
    checkResponseCode(exception);
    return {
      error: true,
      exception,
    };
  }
};

// get 요청이므로, params가 url에 붙는다
export const roomGetRecommendRestaurant = async (params) => {
  try {
    return await apiClient.get('/rooms/keywords2rests/data',{params});
  } catch (exception) {
    checkResponseCode(exception);
    return {
      error: true,
      exception,
    };
  }
};

// 교집합 식당 추천 페이지에서 유저가 원하는 식당이 없어서
// 새로운 조합을 시도
export const roomRequestNewCombine = async (data) => {
  try {
    return await apiClient.post('/rooms/keywords2rests/new-combi', data);
  } catch (exception) {
    checkResponseCode(exception);
    return {
      error: true,
      exception,
    };
  }
};

// get 요청이므로, params가 url에 붙는다
export const roomRestCallPassData = async (params) => {
  try {
    return await apiClient.get('/rooms/rest-call-pass/data',{params});
  } catch (exception) {
    checkResponseCode(exception);
    return {
      error: true,
      exception,
    };
  }
};

// 의사 결정 페이지에서 식당 결정 제출
export const roomRestCallPassSuggest = async (data) => {
  try {
    return await apiClient.post('/rooms/rest-call-pass', data);
  } catch (exception) {
    checkResponseCode(exception);
    return {
      error: true,
      exception,
    };
  }
};

// get 요청이므로, params가 url에 붙는다
export const roomGetResultData = async (params) => {
  try {
    return await apiClient.get('/rooms/result/data',{params});
  } catch (exception) {
    checkResponseCode(exception);
    return {
      error: true,
      exception,
    };
  }
};

const checkResponseCode = (exception) => {
  const responseCode = exception?.response?.status;

  if (responseCode) {
    (responseCode === 401 || responseCode === 403) && logout();
  }
};
