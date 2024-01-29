import React, { useState } from 'react';
import PlaceCard from './PlaceCard';
import BigPlaceCard from './BigPlaceCard';
import MapModal from '../../../../../shared/modal/MapModal';

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

const CardSlider: React.FC = () => {
  const [bigPlaceImg, setBigPlaceImg] = useState(DUMMY_PLACE[0].imgUrl);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className=" flex flex-col mt-10">
      <div className="w-full">
        <BigPlaceCard img={bigPlaceImg} setShowModal={setShowModal} />
      </div>
      <div className="grid grid-cols-3 sm:gap-6 gap-4 max-sm:px-6">
        {DUMMY_PLACE.map((place, index) => (
          <div key={index}>
            <PlaceCard
              imgUrl={place.imgUrl}
              changeBigPlace={() => setBigPlaceImg(place.imgUrl)}
              bigPlaceImg={bigPlaceImg}
            />
          </div>
        ))}
      </div>
      {showModal ? <MapModal setShowModal={setShowModal} /> : null}
    </div>
  );
};

export default CardSlider;
