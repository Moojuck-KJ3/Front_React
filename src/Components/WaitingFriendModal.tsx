import React from 'react';
import { Link } from 'react-router-dom';

const WaitingFriendModal = () => {
  return (
    <div className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center">
      {/* overlay  */}
      <div className="modal-overlay absolute w-full h-full opacity-50"></div>

      <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded-lg shadow-lg z-50 overflow-y-auto">
        {/* Add modal content here */}
        <div className="modal-content py-4 text-left px-6">
          <div className="flex justify-between items-center pb-3">
            <p className="text-2xl font-bold">친구의 선택을 기다리는 중이에요.</p>
            <div className="modal-close cursor-pointer z-50">
              <svg
                className="fill-current text-black"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path d="M1.39 1.393l15.318 15.314m-15.318 0L16.706 1.393" />
              </svg>
            </div>
          </div>
          <p>친구가 선택을 완료하면 알람으로 알려드릴게요🙋‍♂️ </p>
          <div className="mt-4 flex justify-end">
            <Link to={'/resultplace'}>
              <button className="px-4 bg-purple-500 p-3 ml-3 rounded-lg text-white hover:bg-purple-400">확인</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitingFriendModal;
