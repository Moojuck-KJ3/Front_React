import React, { useState } from 'react';

const ImageSilderBg = ({ img, setShowModal }) => {
  return (
    <div className="flex px-6 bg-white shadow-2xl rounded-xl">
      <div className="flex flex-col">
        <img
          src={img}
          className="w-[400px] h-[250px] shadow-md overflow-hidden mx-auto mt-2 bg-gray-300 rounded-lg shrink-0 object-fit m-2"
        />
        <div className="m-2 mb-4 gap-4 flex flex-1 flex-col">
          <div className="flex justify-between">
            <h3 className="text-base font-bold text-gray-600">가게 이름</h3>
            <p className="text-black">강남역 OOO 카페</p>
          </div>
          <div className="flex justify-between">
            <h3 className="text-base font-bold text-gray-600">방문자 리뷰</h3>
            <p className="text-black">1,402</p>
          </div>
          <div className="flex justify-between">
            <h3 className="text-base font-bold text-gray-600">블로그 리뷰</h3>
            <p className="text-black">1,402</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-600 font-bold text-base">리뷰수</p>
            <p> ⭐️4.5</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-600 font-bold text-base">영업중</p>
            <p>21:00 영업 종료</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-600 font-bold text-base">위치</p>

            <button className="flex gap-1" onClick={() => setShowModal(true)}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path
                  fillRule="evenodd"
                  d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                  clipRule="evenodd"
                />
              </svg>
              <p className=" hover:text-blue-600">강남역 3번 출구 앞 300m</p>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-gray-700 font-semibold text-lg">리뷰 보기</h1>
          <button className=" bg-white hover:bg-gray-100 text-gray-800 font-medium border rounded-xl text-sm py-1 px-4 shadow-lg">
            더보기
          </button>
        </div>
        <div className="py-2 gap-1 flex flex-col">
          <ul className="">
            <li className="flex items-center py-2 px-6  border rounded-lg cursor-pointer">
              <img className="my-2 w-12 h-12 rounded-lg object-cover mr-4" src="./avatar.png" alt="PlacePhoto" />
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-800">마리오</h3>
                <p className="text-base">재료가 너무 신선하고 음식 맛도 좋네요!! 강추요~</p>
              </div>
            </li>
            <li className=" my-2 flex items-center py-4 px-6  border rounded-lg cursor-pointer">
              <img className="w-12 h-12 rounded-lg object-cover mr-4" src="./avatar.png" alt="PlacePhoto" />
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-800">마리오</h3>
                <p className="text-base">재료가 너무 신선하고 음식 맛도 좋네요!! 강추요~</p>
              </div>
            </li>
            <li className="my-2 flex items-center py-4 px-6  border rounded-lg cursor-pointer">
              <img className="w-12 h-12 rounded-lg object-cover mr-4" src="./avatar.png" alt="PlacePhoto" />
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-800">마리오</h3>
                <p className=" text-base">재료가 너무 신선하고 음식 맛도 좋네요!! 강추요~</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ImageSilderBg;
