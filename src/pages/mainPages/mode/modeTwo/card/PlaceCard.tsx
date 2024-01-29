import React from 'react';

const PlaceCard = ({ imgUrl, changeBigPlace, bigPlaceImg }) => {
  const handleClick = () => {
    if (bigPlaceImg !== imgUrl) {
      changeBigPlace(imgUrl);
    }
  };
  return (
    <div
      className={` rounded-xl my-4 p-2 ${bigPlaceImg === imgUrl ? 'scale-110  bg-white shadow-xl' : 'border-transparent'} cursor-pointer transition-all`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center  bg-center bg-cover rounded-xl shadow-md overflow-hidden mx-auto  bg-gray-300 ">
        <img
          src={imgUrl}
          alt="PlacePhoto"
          style={{ width: '120px', height: '120px' }}
          className="flex shrink-0 object-fit"
        />
      </div>
    </div>
  );
};

export default PlaceCard;
