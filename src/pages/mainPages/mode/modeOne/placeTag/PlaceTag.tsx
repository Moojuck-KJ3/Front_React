import React from 'react';

const PlaceTag: React.FC = ({ title }) => {
  return (
    <div className="w-42 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <div className="px-4 py-3">
        <p className="text-lg font-bold text-black truncate block capitalize text-center">{title}</p>
        <div className="flex items-center justify-center m-4">
          <div className=" bg-white hover:bg-gray-100 text-gray-800 font-semibold border rounded py-1 px-2 shadow">
            선택하기
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceTag;
