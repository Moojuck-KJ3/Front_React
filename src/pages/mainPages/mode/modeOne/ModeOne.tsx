import React from 'react';
import RandomPlaceTagList from '../../tag/placeTag/RandomPlaceTagList';
import VideoContainer from '../../room/video/VideoContainer';
import SideBar from '../modeZero/sideBar/SideBar';
import SelectDoneModal from '../../../../shared/modal/SelectDoneModal';

const ModeOne = ({
  shouldAnimate,
  isExpaining,
  handleFinishExpain,
  handleOpenModal,
  isSelectDone,
  handleSelectionDone,
  setIsSelectDone,
}) => {
  return (
    <div className="absolute w-full h-full top-0 left-0 flex bg-[#20B4C8]">
      <div className="w-full m-10 bg-white shadow sm:rounded-lg flex justify-center items-center relative">
        <div className={`${shouldAnimate ? 'animate-fade animate-once animate-ease-linear animate-reverse' : ''}`}>
          <RandomPlaceTagList />
        </div>
        <VideoContainer />
      </div>
      <SideBar onOpenModal={handleOpenModal} />
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

export default ModeOne;
