import React, { useState } from 'react';
import ExpainingModal from './modal/ModeZeroExpainingModal';
import FoodTags from './foodTag/FoodTags';
import VideoContainer from '../../room/video/VideoContainer';
import ModeZeroSideBar from './sideBar/ModeZeroSideBar';
import SelectDoneModal from '../../../../shared/modal/SelectDoneModal';
import { connect } from 'react-redux';
import { getActions } from '../../../../store/actions/roomActions';

import * as apiType from '../../../../shared/utils/apiInterface';
import {sendFoodCategoryButton} from '../../../../api';
import { useSelector } from 'react-redux';

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

  const roomId :string = useSelector((state) => state.room.roomId);

  const addFoodTagToSidebar = (tag) => {
    const data: apiType.sendFoodCategoryButtonRequest = {
      categoryId: tag.id,
      isDelete: false,
    };

    const result = sendFoodCategoryButton(roomId, data);

    if (!result.error) {
      setSelectedFoodTags((prevTags) => [...prevTags, tag]);
    }
  };

  const removeFoodTagFromList = (tagsToRemove) => {
    console.log(selectedFoodTags);

    const data: apiType.sendFoodCategoryButtonRequest = {
      categoryId: tagsToRemove.id,
      isDelete: true,
    };

    const result = sendFoodCategoryButton(roomId, data);

    if (!result.error) {
      setSelectedFoodTags((prevTags) => prevTags.filter((tag) => tag.id !== tagsToRemove.id));
    }
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
      <ModeZeroSideBar onOpenModal={handleOpenModal} selectedFoodTags={selectedFoodTags} onDelete = {removeFoodTagFromList} />
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
