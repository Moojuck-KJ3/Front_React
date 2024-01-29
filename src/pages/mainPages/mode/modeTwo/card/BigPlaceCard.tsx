import React, { useState } from 'react';
import Button from '../../../../../shared/components/buttton/Button';

const BigPlaceCard: React.FC = ({ img, setShowModal }) => {
  return (
    <div className={`w-full  bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl `}>
      <div className="flex px-5 py-1 ">
        <img
          src={img}
          alt="PlacePhoto"
          style={{ width: '150px', height: '150px' }}
          className="shadow-md overflow-hidden mx-auto bg-gray-300 rounded-lg shrink-0 object-fit"
        />
        <div className="ml-4 my-4 gap-1 flex flex-1 flex-col">
          <div className="flex justify-between">
            <h3 className="text-sm font-medium text-gray-600">가게 이름</h3>
            <p className=" text-black text-sm">강남역 OOO 카페</p>
          </div>
          <div className="flex justify-between">
            <h3 className="text-sm font-medium text-gray-600">방문자 리뷰</h3>
            <p className="text-black text-sm ">1,402</p>
          </div>
          <div className="flex justify-between">
            <h3 className="text-sm font-medium text-gray-600">블로그 리뷰</h3>
            <p className="text-black text-sm">1,602</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-600 text-sm">리뷰수</p>
            <p className="text-sm"> ⭐️4.5</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-600 text-sm">영업중</p>
            <p className="text-sm">21:00 영업 종료</p>
          </div>
          <div className="flex justify-between item">
            <p className="text-gray-600 text-sm">위치</p>

            <button className="flex gap-1 items-center" onClick={() => setShowModal(true)}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path
                  fillRule="evenodd"
                  d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-sm hover:text-blue-600">강남역</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigPlaceCard;
