import { useNavigate } from 'react-router-dom';
import * as api from '../../api';
import { openAlertMessage } from './alertAction';

export const authActions = {
  SET_USER_DETAILS: 'AUTH.SET_USER_DETAILS',
};

export const getActions = (dispatch: any) => {
  return {
    login: (userDetails, history) => dispatch(login(userDetails, history)),
    register: (userDetails, history) => dispatch(register(userDetails, history)),
    setUserDetails: (userDetails) => dispatch(setUserDetails(userDetails)),
  };
};

const setUserDetails = (userDetails: any) => {
  return {
    type: authActions.SET_USER_DETAILS,
    userDetails,
  };
};

const login = (userDetails: any, navigate: ReturnType<typeof useNavigate>) => {
  return async (dispatch) => {
    const response = await api.login(userDetails);
    console.log(response);

    if (response.error) {
      dispatch(openAlertMessage(response?.exception?.response.data));
    } else {
      const { userDetails } = response?.data;
      localStorage.setItem('user', JSON.stringify(userDetails));

      dispatch(setUserDetails(userDetails));
      navigate('/main');
    }
  };
};

const register = (userDetails: any, navigate: ReturnType<typeof useNavigate>) => {
  return async (dispatch) => {
    console.log(userDetails);

    const response = await api.register(userDetails);
    console.log(response);

    if (response.error) {
      dispatch(openAlertMessage(response?.exception?.response.data));
    } else {
      const { userDetails } = response?.data;
      localStorage.setItem('user', JSON.stringify(userDetails));

      dispatch(setUserDetails(userDetails));
      console.log('setUserDetails success!');

      navigate('/main');
      console.log('register success!');
    }
  };
};
