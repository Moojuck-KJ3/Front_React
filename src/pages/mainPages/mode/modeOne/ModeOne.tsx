import React, { useState } from 'react';
import RandomPlaceTagList from './placeTag/RandomPlaceTagList';
import VideoContainer from '../../room/video/VideoContainer';
import SelectDoneModal from '../../../../shared/modal/SelectDoneModal';
import ModeOneSideBar from './sidebar/ModeOneSideBar';
import ModeOneExpainingModal from './modal/ModeOneExpainingModal';

const ModeOne = ({ shouldAnimate, handleOpenModal, isSelectDone, handleSelectionDone, setIsSelectDone }) => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [isExpaining, setIsExpaining] = useState(true);

  const addTagToSideBar = (tag) => {
    setSelectedTags((prevTags) => [...prevTags, tag]);
  };

  const removeTagFromList = (tagsToRemove) => {
    console.log(selectedTags);

    setSelectedTags((prevTags) => prevTags.filter((tag) => tag.id !== tagsToRemove.id));
  };

  const handleFinishExpain = () => {
    setIsExpaining(false);
  };

  return (
    <div className="absolute w-full h-full top-0 left-0 flex bg-[#20B4C8]">
      <div className="w-full m-10 bg-white shadow sm:rounded-lg flex justify-center items-center relative">
        <div className={`${shouldAnimate ? 'animate-fade animate-once animate-ease-linear animate-reverse' : ''}`}>
          <RandomPlaceTagList addTagToSideBar={addTagToSideBar} />
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
