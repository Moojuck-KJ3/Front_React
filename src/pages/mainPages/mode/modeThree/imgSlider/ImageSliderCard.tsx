import React from 'react';

const ImageSliderCard = ({ imgUrl, changeBigPlace, bigPlaceImg }) => {
  const handleClick = () => {
    if (bigPlaceImg !== imgUrl) {
      changeBigPlace(imgUrl);
    }
  };
  return (
    <div
      className={` rounded-xl p-2 ${bigPlaceImg === imgUrl ? 'scale-110  bg-white shadow-xl' : 'border-transparent'} cursor-pointer transition-all`}
      onClick={handleClick}
    >
      <div className=" flex justify-center items-center  bg-center bg-cover rounded-xl shadow-md overflow-hidden mx-auto  bg-gray-300 ">
        <img src={imgUrl} alt="PlacePhoto" className="w-[150px] h-[150px] object-cover flex shrink-0" />
      </div>
    </div>
  );
};

export default ImageSliderCard;
