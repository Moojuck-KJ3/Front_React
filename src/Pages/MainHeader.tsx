import React from 'react';
import { Link } from 'react-router-dom';

const MainHeader: React.FC = () => {
  return (
    <header className="p-4">
      <div className="p-2 flex justify-between items-center ">
        <Link to={'/'} className="pl-4 flex items-center gap-1 relative">
          <img className=" scale-125 absolute -left-1 -z-10" src="/Logo.png" alt="Logo" />
          <h1 className="font-bold text-2xl">맛집저격</h1>
        </Link>
        <ul className="pr-4 flex gap-4 items-center">
          <li>
            <a className="font-semibold" href="">
              고객지원
            </a>
          </li>
          <li>
            <a className="font-semibold" href="">
              이용방법
            </a>
          </li>
          <li>
            <Link to={'/login'}>
              <button className=" bg-white hover:bg-gray-100 text-gray-800 font-semibold border rounded py-2 px-4 shadow">
                로그인
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default MainHeader;
