import { defineConfig } from 'vite';
import * as api from '../../api';
import { openAlertMessage } from './alertActions';

export const authActions = {
  SET_USER_DETAILS: 'AUTH.SET_USER_DETAILS',
};

export const getActions = (dispatch) => {
  return {
    login: (userDetails, history) => dispatch(login(userDetails, history)),
    register: (userDetails, history) => dispatch(register(userDetails, history)),
    setUserDetails: (userDetails) => dispatch(setUserDetails(userDetails)),
  };
};

const setUserDetails = (userDetails) => {
  return {
    type: authActions.SET_USER_DETAILS,
    userDetails,
  };
};

const login = (userDetails, navigate) => {
  return async (dispatch) => {
    const response = await api.login(userDetails);
    console.log(response);
    if (response.error) {
      dispatch(openAlertMessage(response?.exception?.response?.data));
    } else {
      const accessToken = response?.token;
      const username = response?.username;
      const email = response?.email;
      
      localStorage.setItem('userToken', accessToken);

      const userDetail = {
        name : username,
        email : email,
      }

      dispatch(setUserDetails(userDetail));
      navigate('/main');
    }
  };
};

const register = (userDetails, navigate) => {
  return async (dispatch) => {
    const response = await api.register(userDetails);
    if (response.error) {
      dispatch(openAlertMessage(response?.exception?.response?.data));
    } else {
      const token = response?.token;
      const username = response?.username;
      const email = response?.email;
      
      localStorage.setItem('userToken', token);

      const userDetail = {
        name : username,
        email : email,
      }

      dispatch(setUserDetails(userDetail));
      navigate('/main');
    }
  };
};
