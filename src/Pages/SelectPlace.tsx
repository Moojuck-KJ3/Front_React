import React from 'react';
import TastyTag from '../Components/TastyTag';
import { Link } from 'react-router-dom';

const SelectPlace = () => {
  return (
    <div>
      <body className="bg-gray-100">
        <div className="container mx-auto p-10">
          <div className="flex flex-col bg-white p-6 my-10 rounded-lg shadow-lg items-center">
            <h2 className="text-lg font-semibold mt-2 mb-8 text-center">오늘은 장소를 선호하시나요?</h2>
            <div className="flex justify-center ">
              <TastyTag />
            </div>
            <Link to={'/resultplace'}>
              <button className=" bg-white hover:bg-gray-100 text-gray-800 font-semibold border rounded-xl py-2 px-10 mt-6 shadow">
                선택 완료
              </button>
            </Link>
          </div>
        </div>
      </body>
    </div>
  );
};

export default SelectPlace;
