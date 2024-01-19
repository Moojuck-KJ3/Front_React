import React from 'react';
import { Link } from 'react-router-dom';

const AuthHeader = () => {
  return (
    <header className="p-4">
      <div className="p-2 flex justify-between items-center">
        <Link to={'/'} className="pl-4 flex items-center gap-1 relative">
          <img className="scale-125 absolute -left-1 -z-10" src="/Logo.png" alt="Logo" />
          <h1 className="font-bold text-2xl">맛집저격</h1>
        </Link>
        <div className="flex items-center gap-4">
          <h1 className="font-semibold">안녕하세요, 마찬옥님</h1>
          <Link to={'/'}>
            <button className=" bg-white hover:bg-gray-100 text-gray-800 font-semibold border rounded py-2 px-4 shadow">
              로그아웃
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default AuthHeader;
