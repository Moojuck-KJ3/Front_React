import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <header className="p-8">
        <div className="p-2 border rounded-full flex justify-between items-center ">
          <Link to={'/'} className="pl-4 flex items-center gap-1 ">
            <h1 className="font-bold text-2xl">맛집저격</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
          </Link>
          <div className="pr-4 flex gap-4 items-center">
            <div>고객지원</div>
            <div>이용방법</div>
            <button className="border rounded-full px-4">로그인</button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;
