import React, { useEffect, useState } from 'react';

const Card = ({ title, imgUrl, delay }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay]);

  return (
    <div
      className={`hover:scale-105 cursor-move transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className={`  bg-white shadow-md rounded-xl my-1 p-2 transition-all`}>
        <h1 className=" text-sm font-bold p-1">{title}</h1>
        <div className="flex justify-center items-center  bg-center bg-cover rounded-xl shadow-md overflow-hidden mx-auto  bg-gray-300 ">
          <img
            src={imgUrl}
            alt="PlacePhoto"
            style={{ width: '120px', height: '120px' }}
            className="flex shrink-0 object-fit"
          />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Card;
