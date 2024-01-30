import React, { useState } from 'react';
import MicIcon from '@mui/icons-material/Mic';

const MODAL_MODE = {
  MODE0: 'MODE.MODE_NUMBER_ZERO',
  MODE1: 'MODE.MODE_NUMBER_ONE',
  MODE2: 'MODE.MODE_NUMBER_TWO',
};

const ModeOneExpainingModal: React.FC = ({ mode, onClose }) => {
  const [modalmode, setmodalMode] = useState(MODAL_MODE.MODE0);

  const handleSelectionDone = () => {
    console.log('안녕');

    if (modalmode === MODAL_MODE.MODE0) {
      console.log('mode0 changed to mode1');
      onClose();
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
      return (
        <div>
          <div className="modal fixed w-full h-full left-0 flex items-center justify-center">
            {/* overlay  */}
            <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>

            <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded-lg shadow-lg z-50  animate-jump-in">
              {/* Add modal content here */}
              <div className="modal-content py-4 text-left px-6">
                <div className="flex justify-between items-center pb-3">
                  <p className="text-2xl font-bold">어떤 분위기의 식당을 원하세요?</p>
                </div>
                <div className="flex justify-center">
                  <p>원하는 키워드를 말하면 해당 키워드가 자동으로 수집이 됩니다.</p>
                </div>

                <div className="mt-4 flex justify-end">
                  <button
                    onClick={handleSelectionDone}
                    className="px-4 bg-purple-500 p-3 ml-3 rounded-lg text-white hover:bg-purple-400"
                  >
                    확인
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case MODAL_MODE.MODE1:
      return (
        <div>
          <div className="modal fixed w-full h-full left-0 flex items-center justify-center">
            {/* overlay  */}
            <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>

            <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded-lg shadow-lg z-50  animate-jump-in">
              {/* Add modal content here */}
              <div className="modal-content py-4 text-left px-6">
                <div className="flex justify-between items-center pb-3">
                  <p className="text-2xl font-bold">어떤 분위기의 식당을 원하세요?</p>
                </div>
                <div className="flex justify-center">
                  <p>안녕</p>
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
  }
};

export default ModeOneExpainingModal;
