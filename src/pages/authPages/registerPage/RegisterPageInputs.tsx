import React from 'react';
import InputWithLabel from '../../../shared/components/InputWithLabel';

interface RegisterPageInputsProps {
  username: string;
  setUsername: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
}

const RegisterPageInputs: React.FC<RegisterPageInputsProps> = ({
  username,
  setUsername,
  email,
  setEmail,
  password,
  setPassword,
}) => {
  return (
    <>
      <InputWithLabel type="username" value={username} setValue={setUsername} placeholder={'이름'} />
      <InputWithLabel type="email" value={email} setValue={setEmail} placeholder={'이메일'} />
      <InputWithLabel type="password" value={password} setValue={setPassword} placeholder={'비밀번호'} />
    </>
  );
};

export default RegisterPageInputs;
