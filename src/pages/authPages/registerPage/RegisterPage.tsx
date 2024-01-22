import React, { useEffect, useState } from 'react';
import { validateRegisterForm } from '../../../shared/utils/validator';
import { connect } from 'react-redux';
import { getActions } from '../../../store/actions/authActions';
import { useNavigate } from 'react-router-dom';
import RegisterPageHeader from './RegisterPageHeader';
import RegisterPageInputs from './RegisterPageInputs';
import RegisterPageFooter from './RegisterPageFooter';
import RegisterPageSideImg from './RegisterPageSideImg';

interface RegisterPageProps {
  register: (userDetails: { username: string; email: string; password: string }, navigate: any) => void;
}

const RegisterPage: React.FC<RegisterPageProps> = ({ register }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormVaild, setIsFormVaild] = useState<boolean>(false);

  const handleRegister = () => {
    const userDetails = {
      username,
      email,
      password,
    };
    register(userDetails, navigate);
  };

  useEffect(() => {
    setIsFormVaild(validateRegisterForm({ username, email, password }));
  }, [username, email, password, setIsFormVaild]);

  return (
    <div className=" min-h-screen text-gray-900 flex justify-center">
      <div className="m-20  max-w-screen-xl sm-m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1 animate-fade-up">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className="mt-5 flex flex-col items-center">
            <h1 className="font-bold text-2xl">회원가입</h1>

            <div className="w-full flex-1 mt-8">
              <RegisterPageHeader />

              <div className="mx-auto max-w-xs">
                <RegisterPageInputs
                  username={username}
                  setUsername={setUsername}
                  email={email}
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                />
                <RegisterPageFooter isFormValid={isFormVaild} handleRegister={handleRegister} />
              </div>
            </div>
          </div>
        </div>
        <RegisterPageSideImg />
      </div>
    </div>
  );
};

const mapActionToProps = (dispatch: any) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionToProps)(RegisterPage);
