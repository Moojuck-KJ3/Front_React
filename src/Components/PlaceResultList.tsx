import React from 'react';

const PlaceResultList = () => {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden w-5/6 mx-auto mt-6">
      <div className="bg-gray-100 py-2 px-4">
        <h2 className="text-xl font-semibold text-gray-800">장소 리스트</h2>
      </div>
      <ul className="divide-y divide-gray-200">
        <li className="flex items-center py-4 px-6">
          <span className="text-gray-700 text-lg font-medium mr-4">1.</span>
          <img className="w-20 h-20 rounded-lg object-cover mr-4" src="./PlacePhoto.png" alt="PlacePhoto" />
          <div className="flex-1">
            <h3 className="text-lg font-medium text-gray-800">강남역 OOO 카페</h3>
            <p className="text-gray-600 text-base">리뷰수 ⭐️4.5</p>
          </div>
        </li>
        <li className="flex items-center py-4 px-6">
          <span className="text-gray-700 text-lg font-medium mr-4">2.</span>
          <img className="w-20 h-20 rounded-lg object-cover mr-4" src="./PlacePhoto.png" alt="PlacePhoto" />
          <div className="flex-1">
            <h3 className="text-lg font-medium text-gray-800">역삼역 OOO 카페</h3>
            <p className="text-gray-600 text-base">리뷰수 ⭐️4.5</p>
          </div>
        </li>
        <li className="flex items-center py-4 px-6">
          <span className="text-gray-700 text-lg font-medium mr-4">3.</span>
          <img className="w-20 h-20 rounded-lg object-cover mr-4" src="./PlacePhoto.png" alt="PlacePhoto" />
          <div className="flex-1">
            <h3 className="text-lg font-medium text-gray-800">강남역 OOO 카페</h3>
            <p className="text-gray-600 text-base">리뷰수 ⭐️4.5</p>
          </div>
        </li>
        <li className="flex items-center py-4 px-6">
          <span className="text-gray-700 text-lg font-medium mr-4">4.</span>
          <img className="w-20 h-20 rounded-lg object-cover mr-4" src="./PlacePhoto.png" alt="PlacePhoto" />
          <div className="flex-1">
            <h3 className="text-lg font-medium text-gray-800">강남역 OOO 카페</h3>
            <p className="text-gray-600 text-base">리뷰수 ⭐️4.5</p>
          </div>
        </li>
        <li className="flex items-center py-4 px-6">
          <span className="text-gray-700 text-lg font-medium mr-4">5.</span>
          <img className="w-20 h-20 rounded-lg object-cover mr-4" src="./PlacePhoto.png" alt="PlacePhoto" />
          <div className="flex-1">
            <h3 className="text-lg font-medium text-gray-800">강남역 OOO 카페</h3>
            <p className="text-gray-600 text-base">리뷰수 ⭐️4.5</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default PlaceResultList;
