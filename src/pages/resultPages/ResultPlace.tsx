import React from 'react';
import PlaceResultList from './PlaceResultList';
import PageNumberButton from '../../shared/components/buttton/PageNumberButton';
import MapModal from '../../shared/MapModal';

const ResultPlace: React.FC = () => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-4 sm:grid-cols-8 p-4 gap-4">
        {/* 전체 리스트 */}
        <div className="col-span-4 sm:col-span-4">
          <div className="bg-white shadow rounded-lg p-6">
            <div className="flex flex-col items-center w-full">
              <h1 className="text-xl font-bold mb-6">마찬옥님의 맛집 저격 결과</h1>
              <img src="./avatar.png" className="w-32 h-32 bg-gray-300 rounded-full shrink-0" />
              <PlaceResultList />
              <PageNumberButton />
            </div>
          </div>
        </div>
        {/* 장소 자세히 보기 파트 */}
        <div className="col-span-4 sm:col-span-4">
          <div className="bg-white shadow rounded-lg p-2">
            <div className="flex justify-between px-6 pt-4">
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
            <div className="mx-6 my-6">
              <div className="flex justify-between items-center">
                <h1 className="text-gray-700 font-semibold text-lg">리뷰 보기</h1>
                <button className=" bg-white hover:bg-gray-100 text-gray-800 font-medium border rounded-xl text-sm py-1 px-4 shadow-lg">
                  더보기
                </button>
              </div>
              <div className="py-2 gap-1 flex flex-col">
                <ul className="">
                  <li className="flex items-center py-2 px-6  border rounded-lg">
                    <img className="my-2 w-12 h-12 rounded-lg object-cover mr-4" src="./avatar.png" alt="PlacePhoto" />
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-gray-800">마리오</h3>
                      <p className="text-base">재료가 너무 신선하고 음식 맛도 좋네요!! 강추요~</p>
                    </div>
                  </li>
                  <li className=" my-2 flex items-center py-4 px-6  border rounded-lg">
                    <img className="w-12 h-12 rounded-lg object-cover mr-4" src="./avatar.png" alt="PlacePhoto" />
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-gray-800">마리오</h3>
                      <p className="text-base">재료가 너무 신선하고 음식 맛도 좋네요!! 강추요~</p>
                    </div>
                  </li>
                  <li className="my-2 flex items-center py-4 px-6  border rounded-lg">
                    <img className="w-12 h-12 rounded-lg object-cover mr-4" src="./avatar.png" alt="PlacePhoto" />
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-gray-800">마리오</h3>
                      <p className=" text-base">재료가 너무 신선하고 음식 맛도 좋네요!! 강추요~</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* 블로그 보기 */}
            <div className="mx-6 my-6">
              <div className="flex justify-between items-center">
                <h1 className="text-gray-700 font-semibold text-lg">블로그 리뷰</h1>
                <button className=" bg-white hover:bg-gray-100 text-gray-800 font-medium border rounded-xl text-sm py-1 px-4 shadow-lg">
                  더보기
                </button>
              </div>
              <div className="py-1 gap-1 flex flex-col">
                <ul className="">
                  <li className="my-2 flex py-4 px-4 border rounded-lg">
                    <div className="flex-1 pr-8">
                      <h3 className="text-lg font-medium text-gray-800">강남역 OO집 후기</h3>
                      <p className="text-gray-600 text-base">
                        오래만에 강남역 카페에 다녀왔어요. 예쁜 디저트로 유망한 집인데요. 보통 디저트하면 너무 단 걸
                        생각하잖아요. 그런데 여기는 하나도 안 달고 너무 맛있더라구요~~
                      </p>
                    </div>
                    <img className="w-32 h-32 rounded-lg object-cover mr-4" src="./PlacePhoto.png" alt="PlacePhoto" />
                  </li>
                  <li className="my-2 flex py-4 px-4 border rounded-lg">
                    <div className="flex-1 pr-8">
                      <h3 className="text-lg font-medium text-gray-800">강남역 OO집 후기</h3>
                      <p className="text-gray-600 text-base">
                        오래만에 강남역 카페에 다녀왔어요. 예쁜 디저트로 유망한 집인데요. 보통 디저트하면 너무 단 걸
                        생각하잖아요. 그런데 여기는 하나도 안 달고 너무 맛있더라구요~~
                      </p>
                    </div>
                    <img className="w-32 h-32 rounded-lg object-cover mr-4" src="./PlacePhoto.png" alt="PlacePhoto" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal ? <MapModal setShowModal={setShowModal} /> : null}
    </div>
  );
};

export default ResultPlace;
