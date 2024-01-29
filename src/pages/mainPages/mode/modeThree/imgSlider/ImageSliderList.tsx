import React from 'react';

const ImageSliderList = ({ imgUrl, changeBigPlace, bigPlaceImg }) => {
  const handleClick = () => {
    if (bigPlaceImg !== imgUrl) {
      changeBigPlace(imgUrl);
    }
  };

  return (
    <div
      className={`p-2 flex items-center justify-between border rounded-lg transition-all ${bigPlaceImg === imgUrl ? ' scale-110  bg-white shadow-2xl' : 'border-transparent'}`}
      onClick={handleClick}
    >
      <div className=" flex items-center">
        <img src={imgUrl} alt="PlacePhoto" className="w-[40px] h-[40px] rounded-full object-cover flex shrink-0" />
      </div>
      <div className=" text-sm text-gray-900 font-bold mx-1">강남역 파프리치나</div>
    </div>
  );
};

export default ImageSliderList;
