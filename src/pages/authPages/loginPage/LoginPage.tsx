import React, { useEffect, useState } from 'react';
import { validateLoginForm } from '../../../shared/utils/validator';
import { connect } from 'react-redux';
import { getActions } from '../../../store/actions/authActions';
import { useNavigate } from 'react-router-dom';
import LoginPageInputs from './LoginPageInputs';
import LoginPageFooter from './LoginPageFooter';
import LoginPageHeader from './LoginPageHeader';
import LoginPageSideImg from './LoginPageSideImg';
import store from '../../../store/store';
import * as apiType from '../../../shared/utils/apiInterface';

interface LoginPageProps {
  login: (userDetails: apiType.usersLoginRequest, navigate: any) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ login }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormVaild, setIsFormVaild] = useState(false);

  const handleLogin = async() => {
    const userDetails : apiType.usersLoginRequest = {
      email,
      password,
    };

    await login(userDetails, navigate);
  };

  useEffect(() => {
    setIsFormVaild(validateLoginForm({ email, password }));
  }, [email, password, setIsFormVaild]);

  return (
    <div className=" min-h-screen text-gray-900 flex justify-center">
      <div className="m-20  max-w-screen-xl sm-m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1 animate-fade-up">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className="mt-5 flex flex-col items-center">
            <h1 className="font-bold text-2xl">로그인</h1>
            <div className="w-full flex-1 mt-8">
              <LoginPageHeader />
              <div className="mx-auto max-w-xs">
                <LoginPageInputs email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
                <LoginPageFooter isFormValid={isFormVaild} handleLogin={handleLogin} />
              </div>
            </div>
          </div>
        </div>
        <LoginPageSideImg />
      </div>
    </div>
  );
};

const mapActionToProps = (dispatch: any) => {
  return {
    ...getActions(dispatch),
  };
};


export default connect(null, mapActionToProps)(LoginPage);
