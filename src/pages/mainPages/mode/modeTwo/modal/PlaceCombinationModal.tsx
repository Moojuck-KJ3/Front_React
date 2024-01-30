import React from 'react';
import ResultCardLists from '../card/ResultCardLists';

const PlaceCombinationModal: React.FC = ({ onClose }) => {
  return (
    <div>
      <div className="fixed w-full h-full top-0 left-0 flex items-center justify-center">
        {/* overlay  */}

        <div className="modal-container bg-white w-1/2 h-1/2 mx-auto rounded-lg shadow-lg z-50 overflow-y-auto animate-jump-in">
          {/* Add modal content here */}
          <div className="modal-content py-4 text-left px-6">
            <ResultCardLists />
            <div className="mt-4 flex justify-end">
              <button
                className="px-4 bg-purple-500 p-3 ml-3 rounded-lg text-white hover:bg-purple-400"
                onClick={onClose}
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceCombinationModal;
