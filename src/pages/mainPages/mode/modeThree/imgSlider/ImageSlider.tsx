import React, { useEffect, useRef, useState } from 'react';
import ImageSilderBg from './ImageSilderBg';
import ImageSliderCard from './ImageSliderCard';
import Button from '../../../../../shared/components/buttton/Button';
import ImageSliderList from './ImageSliderList';

const DUMMY_PLACE = [
  {
    title: '맛집',
    imgUrl: './PlacePhoto_1.png',
  },
  {
    title: '카페',
    imgUrl: './PlacePhoto_2.png',
  },
  {
    title: '디저트',
    imgUrl: './PlacePhoto.png',
  },
];

const ImageSlider: React.FC = ({ onOpenModal }) => {
  const [bigPlaceImg, setBigPlaceImg] = useState(DUMMY_PLACE[0].imgUrl);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <ImageSilderBg img={bigPlaceImg} setShowModal={setShowModal} />
      </div>

      <div className="w-[220px] h-[580px] absolute right-5 top-5 items-center py-1 bg-white rounded-lg shadow-lg border-soild border-2 min-h-40">
        {/* Side Bar */}
        <ul className=" list-none flex flex-col px-4 m-0 min-h-40 rounded-lg gap-2">
          {DUMMY_PLACE.map((place, index) => (
            <li key={index}>
              <ImageSliderList
                imgUrl={place.imgUrl}
                changeBigPlace={() => setBigPlaceImg(place.imgUrl)}
                bigPlaceImg={bigPlaceImg}
              />
            </li>
          ))}
        </ul>
        <div className=" absolute bottom-4 left-[25%] flex justify-center items-center mt-4">
          <Button onClick={onOpenModal} title={'선택 완료'} />
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
