import React, { useEffect, useState } from 'react';
import PlaceCombineArea from './card/PlaceCombineArea';
import VideoContainer from '../../room/video/VideoContainer';
import SelectDoneModal from '../../../../shared/modal/SelectDoneModal';
import ModeTwoSideBar from './sidebar/ModeTwoSideBar';

import {getKeywordsToRests} from '../../../../api';
import { useSelector } from 'react-redux';

const ModeTwo: React.FC = ({
  shouldAnimate,
  isExpaining,
  handleFinishExpain,
  handleOpenModal,
  isSelectDone,
  handleSelectionDone,
  setIsSelectDone,
}) => {

  const [restaurants, setRestaurants] = useState([]);
  const roomId :string = useSelector((state) => state.room.roomId);

  useEffect(() => {
    const getKeywordsToRestsData = async () => {
      const result = await getKeywordsToRests(roomId);

      if(!result.error){
        setRestaurants(result.restaurants);
      }
    };

    getKeywordsToRestsData();
  })

  return (
    <div className="absolute w-full h-full top-0 left-0 flex bg-[#20B4C8]">
      <div className="flex w-full m-10 bg-white shadow sm:rounded-lg items-center">
        <div
          className={`${shouldAnimate ? 'animate-fade animate-once animate-ease-linear animate-reverse' : ''} flex w-full justify-center items-center`}
        >
          <div className="w-full flex justify-center gap-24">
            <PlaceCombineArea restaurantsData = {restaurants}/>
          </div>
          <ModeTwoSideBar />
        </div>
      </div>

      <VideoContainer />
      {isSelectDone && (
        <SelectDoneModal
          onYes={handleSelectionDone}
          onClose={() => setIsSelectDone(false)}
          title={'선택을 완료할까요?'}
          content={'"네"를 누르면 다음 화면으로 넘어갑니다.'}
        />
      )}
    </div>
  );
};

export default ModeTwo;
