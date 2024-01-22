import React from 'react';
import MapModal from '../../shared/MapModal';
import PageNumberButton from '../../shared/components/buttton/PageNumberButton';
import SearchButton from '../../shared/components/buttton/SearchButton';

const TotalList = () => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-4 sm:grid-cols-8 p-4 gap-4">
        {/* 전체 리스트 */}
        <div className="col-span-4 sm:col-span-3">
          <div className="bg-white shadow rounded-lg p-6">
            <div className="flex flex-col items-center w-full">
              <h1 className="text-xl font-bold mb-6">지금까지 맛집을 분석한 결과 리스트에요.</h1>
              <div className="mr-auto">
                <SearchButton />
              </div>
              <div className="w-full my-2  flex justify-between items-center">
                <h1 className="text-md font-semibold text-gray-700">맛집 분석 결과지</h1>
                <div className="flex gap-2 items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM12 6a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 6ZM12 18a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 18ZM3.75 6.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM5.25 18.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5ZM3 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 12ZM9 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM12.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM9 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
                  </svg>

                  <img className="w-8 h-8 rounded-lg object-cover " src="./avatar.png" alt="PlacePhoto" />
                </div>
              </div>
              <div className=" gap-1 flex flex-col w-full">
                <ul className="">
                  <li className="flex items-center py-2 px-6  border rounded-lg">
                    <img className="my-2 w-12 h-12 rounded-lg object-cover mr-4" src="./avatar.png" alt="PlacePhoto" />
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-gray-800">공다리</h3>
                      <p className="ext-thin text-gray-500">3시간 전</p>
                    </div>
                  </li>
                  <li className=" my-2 flex items-center py-4 px-6  border rounded-lg">
                    <img className="w-12 h-12 rounded-lg object-cover mr-4" src="./avatar.png" alt="PlacePhoto" />
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-gray-800">마리오</h3>
                      <p className="text-thin text-gray-500">1일 전</p>
                    </div>
                  </li>
                  <li className="my-2 flex items-center py-4 px-6  border rounded-lg">
                    <img className="w-12 h-12 rounded-lg object-cover mr-4" src="./avatar.png" alt="PlacePhoto" />
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-gray-800">마리오</h3>
                      <p className=" ext-thin text-gray-500">1일 전</p>
                    </div>
                  </li>
                  <li className="my-2 flex items-center py-4 px-6  border rounded-lg">
                    <img className="w-12 h-12 rounded-lg object-cover mr-4" src="./avatar.png" alt="PlacePhoto" />
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-gray-800">마리오</h3>
                      <p className=" text-thin text-gray-500">3일 전</p>
                    </div>
                  </li>
                  <li className="my-2 flex items-center py-4 px-6  border rounded-lg">
                    <img className="w-12 h-12 rounded-lg object-cover mr-4" src="./avatar.png" alt="PlacePhoto" />
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-gray-800">마리오</h3>
                      <p className=" text-thin text-gray-500">5일전</p>
                    </div>
                  </li>
                </ul>
              </div>
              <PageNumberButton />
            </div>
          </div>
        </div>
        {/* 장소 자세히 보기 파트 */}
        <div className="col-span-4 sm:col-span-4">
          <div className="bg-white shadow rounded-lg p-2 items-center justify-center">
            <h1 className="text-3xl font-bold text-center m-5">가장 유사했던 장소</h1>

            <div className="flex px-6">
              <img
                src="./PlacePhoto.png"
                className="shadow-md overflow-hidden mx-auto mt-2 w-1/3 h-2/3 bg-gray-300 rounded-lg shrink-0 object-fit"
              />
              <div className="ml-4 mt-2 gap-1 flex flex-1 flex-col">
                <h3 className="text-2xl font-medium text-gray-800">가게 정보</h3>

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
            {/* 리뷰 보기 */}
            <div className="my-6">
              <h1 className="text-gray-700 font-semibold text-lg text-center m-4">그 밖에 유사했던 장소리스트</h1>
              <div className="py-2 gap-1 flex flex-col w-full justify-center">
                <ul className="w-full">
                  <li className="mx-4 my-2 py-4 flex flex-col px-6 border rounded-lg justify-center">
                    <h3 className=" text-xl font-medium text-gray-800">한과 와락</h3>
                    <div className="flex gap-2 items-center ">
                      <div className="flex justify-between">
                        <h3 className="text-lg font-md text-black font-bold">영업 중 ﹒</h3>
                      </div>
                      <div className="flex justify-between">
                        <h3 className="text-base font-medium text-gray-600">방문자 리뷰</h3>
                        <p className="ml-1 text-black">1,402 ﹒</p>
                      </div>

                      <div className="flex justify-between">
                        <h3 className="text-base font-medium text-gray-600">블로그 리뷰</h3>
                        <p className="ml-1 text-black">1,402 </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-1 justify-center">
                      <img className="w-40 h-40 rounded-lg object-cover " src="./PlacePhoto.png" alt="PlacePhoto" />
                      <img className="w-40 h-40 rounded-lg object-cover" src="./PlacePhoto_1.png" alt="PlacePhoto" />
                      <img className="w-40 h-40 rounded-lg object-cover" src="./PlacePhoto_2.png" alt="PlacePhoto" />
                    </div>
                  </li>
                  <li className="mx-4 my-2 py-4 flex flex-col px-6 border rounded-lg justify-center">
                    <h3 className=" text-xl font-medium text-gray-800">한과 와락</h3>
                    <div className="flex gap-2 items-center ">
                      <div className="flex justify-between">
                        <h3 className="text-lg font-md text-black font-bold">영업 중 ﹒</h3>
                      </div>
                      <div className="flex justify-between">
                        <h3 className="text-base font-medium text-gray-600">방문자 리뷰</h3>
                        <p className="ml-1 text-black">1,402 ﹒</p>
                      </div>

                      <div className="flex justify-between">
                        <h3 className="text-base font-medium text-gray-600">블로그 리뷰</h3>
                        <p className="ml-1 text-black">1,402 </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3 justify-center">
                      <img className="w-40 h-40 rounded-lg object-cover " src="./PlacePhoto.png" alt="PlacePhoto" />
                      <img className="w-40 h-40 rounded-lg object-cover" src="./PlacePhoto_1.png" alt="PlacePhoto" />
                      <img className="w-40 h-40 rounded-lg object-cover" src="./PlacePhoto_2.png" alt="PlacePhoto" />
                    </div>
                  </li>
                  <li className="mx-4 my-2 py-4 flex flex-col px-6 border rounded-lg justify-center">
                    <h3 className=" text-xl font-medium text-gray-800">한과 와락</h3>
                    <div className="flex gap-2 items-center ">
                      <div className="flex justify-between">
                        <h3 className="text-lg font-md text-black font-bold">영업 중 ﹒</h3>
                      </div>
                      <div className="flex justify-between">
                        <h3 className="text-base font-medium text-gray-600">방문자 리뷰</h3>
                        <p className="ml-1 text-black">1,402 ﹒</p>
                      </div>

                      <div className="flex justify-between">
                        <h3 className="text-base font-medium text-gray-600">블로그 리뷰</h3>
                        <p className="ml-1 text-black">1,402 </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3 justify-center">
                      <img className="w-40 h-40 rounded-lg object-cover " src="./PlacePhoto.png" alt="PlacePhoto" />
                      <img className="w-40 h-40 rounded-lg object-cover" src="./PlacePhoto_1.png" alt="PlacePhoto" />
                      <img className="w-40 h-40 rounded-lg object-cover" src="./PlacePhoto_2.png" alt="PlacePhoto" />
                    </div>
                  </li>
                </ul>
                <div className=" justify-center items-center mx-auto">
                  <PageNumberButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal ? <MapModal setShowModal={setShowModal} /> : null}
    </div>
  );
};

export default TotalList;
