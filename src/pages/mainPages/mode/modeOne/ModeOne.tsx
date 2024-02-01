import React, { useState, useEffect } from 'react';
import RandomPlaceTagList from './placeTag/RandomPlaceTagList';
import VideoContainer from '../../room/video/VideoContainer';
import SelectDoneModal from '../../../../shared/modal/SelectDoneModal';
import ModeOneSideBar from './sidebar/ModeOneSideBar';
import ModeOneExpainingModal from './modal/ModeOneExpainingModal';

import * as apiType from '../../../../shared/utils/apiInterface';
import {getMoodKeyword,postMoodKeywordButton} from '../../../../api';
import { useSelector } from 'react-redux';

const ModeOne = ({ shouldAnimate, handleOpenModal, isSelectDone, handleSelectionDone, setIsSelectDone }) => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [isExpaining, setIsExpaining] = useState(true);
  const [dataTags, setDataTags] = useState([]);

  const roomId :string = useSelector((state) => state.room.roomId);

  // mount 될 때의 처리
  useEffect(() => {
    // mood Keyword get 요청
    const getMoodKeywordData = async () => {
      const result = await getMoodKeyword(roomId);

      if(!result.error){
        setDataTags(result.moodKeywords);
      }
    };

    getMoodKeywordData();
  },[])

  const addTagToSideBar = (tag) => {
    const data: apiType.sendMoodKeywordButtonRequest = {
      keywordId: tag.id,
      isDelete: false,
    };

    const result = postMoodKeywordButton(roomId, data);

    if(!result.error){
      setSelectedTags((prevTags) => [...prevTags, tag]);
    }
  };

  const removeTagFromList = (tagsToRemove) => {
    const data: apiType.sendMoodKeywordButtonRequest = {
      keywordId: tagsToRemove.id,
      isDelete: true,
    };

    const result = postMoodKeywordButton(roomId, data);

    if(!result.error){
      console.log(selectedTags);

      setSelectedTags((prevTags) => prevTags.filter((tag) => tag.id !== tagsToRemove.id));
    }
    
  };

  const handleFinishExpain = () => {
    setIsExpaining(false);
  };

  return (
    <div className="absolute w-full h-full top-0 left-0 flex bg-[#20B4C8]">
      <div className="w-full m-10 bg-white shadow sm:rounded-lg flex justify-center items-center relative">
        <div className={`${shouldAnimate ? 'animate-fade animate-once animate-ease-linear animate-reverse' : ''}`}>
          <RandomPlaceTagList addTagToSideBar={addTagToSideBar} dataTags = {dataTags}/>
        </div>

        <VideoContainer ModeState={'MODE1'} />
      </div>
      <ModeOneSideBar onOpenModal={handleOpenModal} selectedTags={selectedTags} onDelete={removeTagFromList} />
      {isSelectDone && (
        <SelectDoneModal
          onYes={handleSelectionDone}
          onClose={() => setIsSelectDone(false)}
          title={'선택을 완료할까요?'}
          content={'"네"를 누르면 다음 화면으로 넘어갑니다.'}
        />
      )}
      {isExpaining && <ModeOneExpainingModal mode={'MODE1'} onClose={handleFinishExpain} />}
    </div>
  );
};

export default ModeOne;
