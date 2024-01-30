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
      // const { userDetails } = response?.data;
      // localStorage.setItem('user', JSON.stringify(userDetails));

      //dispatch(setUserDetails(userDetails));
      const accessToken = response?.data?.accessToken;
      const userName = response?.data?.userName;
      
      //console.log(accessToken);
      localStorage.setItem('userToken', accessToken);

      const userDetail = {
        name : userName,
        email : userDetails.email,
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
      // const { userDetails } = response?.data;
      // localStorage.setItem('user', JSON.stringify(userDetails));

      // console.log(response);
      // console.log(response?.data);
      const accessToken = response?.data?.accessToken;
      
      //console.log(accessToken);
      localStorage.setItem('userToken', accessToken);

      const userDetail = {
        name : userDetails.name,
        email : userDetails.email,
      }

      dispatch(setUserDetails(userDetail));
      navigate('/main');
    }
  };
};
