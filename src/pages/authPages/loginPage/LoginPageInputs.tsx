import React from 'react';
import InputWithLabel from '../../../shared/components/InputWithLabel';

interface LoginPageInputsProps {
  email: string;
  setEmail: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
}

const LoginPageInputs: React.FC<LoginPageInputsProps> = ({ email, setEmail, password, setPassword }) => {
  return (
    <>
      <InputWithLabel type="email" value={email} setValue={setEmail} placeholder={'이메일'} />
      <InputWithLabel type="password" value={password} setValue={setPassword} placeholder={'비밀번호'} />
    </>
  );
};

export default LoginPageInputs;
