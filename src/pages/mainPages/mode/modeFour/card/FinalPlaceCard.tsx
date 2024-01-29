import React from 'react';
import PageNumberButton from '../../../../../shared/components/buttton/PageNumberButton';

const FinalPlaceCard = () => {
  return (
    <div className="grid grid-cols-2 mx-60 px-6 bg-white shadow-2xl rounded-xl">
      <div className="flex flex-col">
        <h1 className=" text-4xl p-4 font-bold">최종 결과</h1>
        <div className=" flex">
          <img
            src="./PlacePhoto_1.png"
            className="w-[300px] h-[250px] shadow-md overflow-hidden mx-auto mt-2 bg-gray-300 rounded-lg shrink-0 object-fit m-2"
          />
          <div className="m-2 mb-4 gap-4 flex flex-1 flex-col p-2">
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
          </div>
        </div>
        {/* Review */}
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
            </ul>
          </div>
        </div>
        <div>
          {/* Blog */}
          <div className="mx-4">
            <div className="flex justify-between items-center">
              <h1 className="text-gray-700 font-semibold text-lg">블로그 리뷰</h1>
              <button className=" bg-white hover:bg-gray-100 text-gray-800 font-medium border rounded-xl text-sm py-1 px-4 shadow-lg">
                더보기
              </button>
            </div>
            <div className="py-1 gap-1 flex flex-col">
              <ul className=" ">
                <li className="my-2 flex py-4 px-4 border rounded-lg">
                  <div className="flex-1 pr-8">
                    <h3 className="text-lg font-medium text-gray-800">강남역 OO집 후기</h3>
                    <p className="text-gray-600 text-base overflow-ellipsis">오래만에 강남역 카페에 다녀왔어요...</p>
                  </div>
                  <img className="w-24 h-24 rounded-lg object-cover mr-4" src="./PlacePhoto.png" alt="PlacePhoto" />
                </li>
                <li className="my-2 flex py-4 px-4 border rounded-lg">
                  <div className="flex-1 pr-8">
                    <h3 className="text-lg font-medium text-gray-800">강남역 OO집 후기</h3>
                    <p className="text-gray-600 text-base">예쁜 디저트로 유망한 집인데요....</p>
                  </div>
                  <img className="w-24 h-24 rounded-lg object-cover mr-4" src="./PlacePhoto.png" alt="PlacePhoto" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Map */}
      <div>
        <div className="relative p-6 flex-auto overflow-hidden">
          <div className="rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d126.9779692!3d37.566535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca1bda76a4b5b%3A0xf85c4e4618c2edc!2sSeoul%2C%20South%20Korea!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
              width="100%"
              height="300"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="my-4">
          <h1 className="text-gray-700 font-semibold text-lg text-center">그 밖에 유사했던 장소리스트</h1>
          <div className="flex flex-col w-full h-f justify-center">
            <ul className="w-full">
              <li className="mx-4 my-3 py-4 flex flex-col px-6 border rounded-lg justify-center">
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
              <li className="mx-4 my-3 py-4 flex flex-col px-6 border rounded-lg justify-center">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalPlaceCard;
