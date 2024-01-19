import React from 'react';
import PlaceResultList from '../Components/PlaceResultList';
import PageNumberButton from '../Components/PageNumberButton';

const ResultPlace: React.FC = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-4 sm:grid-cols-8 p-4 gap-4">
        <div className="col-span-4 sm:col-span-3">
          <div className="bg-white shadow rounded-lg p-6">
            <div className="flex flex-col items-center w-full">
              <h1 className="text-xl font-bold mb-6">마찬옥님의 맛집 저격 결과</h1>
              <img src="./avatar.png" className="w-32 h-32 bg-gray-300 rounded-full shrink-0" />
              <PlaceResultList />
              <PageNumberButton />
            </div>
          </div>
        </div>
        <div className="col-span-6 sm:col-span-5">
          <div className="bg-white shadow rounded-lg p-6">
            <div className="flex justify-between ">
              <h1 className="text-xl font-bold mb-6">강남역 OOO 카페</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>

            <div className="flex py-4 px-6">
              <img
                src="./PlacePhoto.png"
                className="shadow-md overflow-hidden mx-auto mt-2 w-1/3 h-1/3 bg-gray-300 rounded-lg shrink-0 object-fit"
              />
              <div className="ml-4 mt-2 gap-1 flex flex-1 flex-col">
                <h3 className="text-2xl font-medium text-gray-800">맛집 정보</h3>

                <div className="flex justify-between">
                  <h3 className="text-base font-medium text-gray-600">가게 이름</h3>
                  <p className="text-black">강남역 OOO 카페</p>
                </div>
                <div className="flex justify-between">
                  <h3 className="text-base font-medium text-gray-600">방문자 리뷰</h3>
                  <p className="text-black">1,402</p>
                </div>
                <div className="flex justify-between">
                  <h3 className="text-base font-medium text-gray-600">블로그 리뷰</h3>
                  <p className="text-black">1,402</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-600 text-base">리뷰수</p>
                  <p> ⭐️4.5</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-600 text-base">영업중</p>
                  <p>21:00 영업 종료</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-600 text-base">위치</p>

                  <button className="flex gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path
                        fill-rule="evenodd"
                        d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <p className=" hover:text-blue-600">강남역 3번 출구 앞 300m</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultPlace;
