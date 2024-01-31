import React, { useState } from 'react';
import ExpainingModal from './modal/ModeZeroExpainingModal';
import FoodTags from './foodTag/FoodTags';
import VideoContainer from '../../room/video/VideoContainer';
import ModeZeroSideBar from './sideBar/ModeZeroSideBar';
import SelectDoneModal from '../../../../shared/modal/SelectDoneModal';
import { connect } from 'react-redux';
import { getActions } from '../../../../store/actions/roomActions';

const ModeZero: React.FC = ({
  shouldAnimate,
  isExpaining,
  handleFinishExpain,
  handleOpenModal,
  isSelectDone,
  handleSelectionDone,
  setIsSelectDone,
}) => {
  const [selectedFoodTags, setSelectedFoodTags] = useState([]);
  const addFoodTagToSidebar = (tag) => {
    setSelectedFoodTags((prevTags) => [...prevTags, tag]);
  };

  return (
    <div className="absolute w-full h-full top-0 left-0 flex bg-[#20B4C8]">
      <div className="w-full m-10 bg-white shadow sm:rounded-lg flex justify-center items-center relative">
        <button onClick={focus}>안녕</button>
        <div className={`${shouldAnimate ? 'animate-fade animate-once animate-ease-linear animate-reverse' : ''}`}>
          {/* 컨텐츠 구역 */}
          {isExpaining ? (
            <ExpainingModal mode={'MODE0'} onClose={handleFinishExpain} />
          ) : (
            <FoodTags addFoodTagToSidebar={addFoodTagToSidebar} />
          )}
        </div>
        <VideoContainer ModeState={'MODE0'} />
      </div>
      <ModeZeroSideBar onOpenModal={handleOpenModal} selectedFoodTags={selectedFoodTags} />
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

const mapStoreStateToProps = ({ room }) => {
  return {
    ...room,
  };
};

const mapActionToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(mapStoreStateToProps, mapActionToProps)(ModeZero);
