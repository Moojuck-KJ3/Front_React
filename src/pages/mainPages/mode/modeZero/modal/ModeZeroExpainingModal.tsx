import React, { useState } from 'react';
import MicIcon from '@mui/icons-material/Mic';
import KaKaoTalkSearchModal from './KaKaoTalkSearchModal';

const MODAL_MODE = {
  MODE0: 'MODE.MODE_NUMBER_ZERO',
  MODE1: 'MODE.MODE_NUMBER_ONE',
  MODE2: 'MODE.MODE_NUMBER_TWO',
};

const ModeZeroExpainingModal: React.FC = ({ mode, onClose }) => {
  const [modalmode, setmodalMode] = useState(MODAL_MODE.MODE0);

  const handleSelectionDone = () => {
    console.log('안녕');

    if (modalmode === MODAL_MODE.MODE0) {
      console.log('mode0 changed to mode1');
      setmodalMode(MODAL_MODE.MODE1);
    }

    if (modalmode === MODAL_MODE.MODE1) {
      console.log('mode1 changed to mode2');
      setmodalMode(MODAL_MODE.MODE2);
    }
    if (modalmode === MODAL_MODE.MODE2) {
      console.log('mode2 changed to mode3');
      onClose();
    }
  };

  switch (modalmode) {
    case MODAL_MODE.MODE0:
      return <KaKaoTalkSearchModal handleSelectionDone={handleSelectionDone} />;

    case MODAL_MODE.MODE1:
      return (
        <div>
          <div className="modal fixed w-full h-full -top-10 left-0 flex items-center justify-center">
            {/* overlay  */}
            <div className="modal-overlay absolute w-full h-full opacity-50"></div>

            <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded-lg shadow-lg z-50  animate-jump-in">
              {/* Add modal content here */}
              <div className="modal-content py-4 text-left px-6">
                <div className="flex justify-between items-center pb-3">
                  <p className="text-2xl font-bold">오늘 어떤 종류의 음식을 먹고 싶으세요?</p>
                </div>
                <div className="flex justify-center">
                  <p>
                    버튼을 누른 뒤, 5초 동안 어떤 음식을 먹고 싶은지 말을 해보세요. 해당 음성을 기반으로 추천 음식
                    카테고리가 생성됩니다.
                  </p>
                </div>

                <div className="mt-4 flex justify-end">
                  <button
                    onClick={handleSelectionDone}
                    className="px-4 bg-purple-500 p-3 ml-3 rounded-lg text-white hover:bg-purple-400"
                  >
                    음성 인식 시작하기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case MODAL_MODE.MODE2:
      return (
        <div>
          <div className="modal fixed w-full h-full -top-10 left-0 flex items-center justify-center">
            {/* overlay  */}
            <div className="modal-overlay absolute w-full h-full opacity-50"></div>

            <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded-lg shadow-lg z-50  animate-jump-in">
              {/* Add modal content here */}
              <div className="modal-content py-4 text-left px-6">
                <div className="flex justify-between items-center pb-3">
                  <p className="text-2xl font-bold">5초 동안 말을 하세요. </p>
                </div>
                <div className="flex justify-center">
                  <p>예시 : 오늘은 한식이나 일식이 먹고 싶어.</p>
                </div>

                <div className="mt-4 flex justify-end">
                  <button
                    onClick={handleSelectionDone}
                    className="px-4 bg-purple-500 p-3 ml-3 rounded-lg text-white hover:bg-purple-400"
                  >
                    <MicIcon />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  }
};

export default ModeZeroExpainingModal;
