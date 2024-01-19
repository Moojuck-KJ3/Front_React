import React from 'react';
import { Link } from 'react-router-dom';

const CardComponent: React.FC = ({ img, playMode, title, link }) => {
  return (
    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <Link to={`/selecttaste/${link}`}>
        <img src={img} alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
        <div className="px-4 py-3 w-72">
          <span className="text-gray-400 mr-3 uppercase text-xs">{playMode}</span>
          <p className="text-lg font-bold text-black truncate block capitalize">{title}</p>
          <div className="flex items-center justify-center m-3">
            <div className=" bg-white hover:bg-gray-100 text-gray-800 font-semibold border rounded py-2 px-4 shadow">
              시작하기
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardComponent;
