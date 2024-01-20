import React from 'react';

const FriendMenuBar = () => {
  return (
    <div className="relative z-10">
      <ul className="mx-auto max-w-xs text-left font-medium text-lg leading-none border-blue-200 divide-y divide-blue-200">
        <li>
          <a className="py-3.5 w-full flex items-center text-blackhover:text-blue-700 hover:bg-blue-50" href="#">
            <span className="ml-5 mr-2.5 w-1 h-7 bg-black rounded-r-md"></span>내 친구
          </a>
        </li>
        <li>
          <a className="py-3.5 w-full flex items-center text-black hover:bg-blue-50" href="#">
            <span className="ml-5 mr-2.5 w-1 h-7 bg-black rounded-r-md"></span>
            친구 초대
          </a>
        </li>
        <li>
          <a className="py-3.5 w-full flex items-center text-black hover:text-blue-700 hover:bg-blue-50" href="#">
            <span className="ml-5 mr-2.5 w-1 h-7 bg-black rounded-r-md"></span>
            친구 관리
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FriendMenuBar;
