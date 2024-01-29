import React from 'react';
import ResultCardList from './card/ResultCardList';
import CardSlider from './card/CardSlider';
import VideoContainer from '../../room/video/VideoContainer';
import SelectDoneModal from '../../../../shared/modal/SelectDoneModal';

const ModeTwo = ({
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
      <div className="flex flex-col w-full m-10 max-container bg-white shadow sm:rounded-lg items-center">
        <div
          className={`${shouldAnimate ? 'animate-fade animate-once animate-ease-linear animate-reverse' : ''} flex flex-col w-full justify-center items-center`}
        >
          <ResultCardList onOpenModal={handleOpenModal} />
          <div className="w-full flex justify-center gap-24">
            <CardSlider />
            <CardSlider />
          </div>
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
