import { Tooltip } from '@mui/material';
import React from 'react';

interface RegisterPageFooterProps {
  isFormValid: boolean;
  handleRegister: () => void;
}

const RegisterPageFooter: React.FC<RegisterPageFooterProps> = ({ isFormValid, handleRegister }) => {
  const getFormNotVaildMessage = () => {
    return '2자 이상의 유저이름, 올바른 이메일 형식, 최소 6자~12자 사이의 패스워드를 입력하세요.';
  };

  const getFormVaildMessage = () => {
    return '회원가입이 가능합니다.';
  };

  return (
    <>
      <Tooltip title={!isFormValid ? getFormNotVaildMessage() : getFormVaildMessage()}>
        <div>
          <button
            disabled={!isFormValid}
            onClick={handleRegister}
            className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
          >
            <span className="">회원가입</span>
          </button>
        </div>
      </Tooltip>
      <div className="border-b text-center">
        <div className=" leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
          이미 회원이신가요?
          <a className=" text-blue-600 hover:text-blue-800 ml-1" href="/login">
            로그인
          </a>
        </div>
      </div>
    </>
  );
};

export default RegisterPageFooter;
