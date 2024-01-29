import React, { useState } from 'react';

const CallPassButton = () => {
  const [okay, setOkay] = useState(false);
  const [no, setNo] = useState(false);

  const handleSelectOkay = () => {
    playSound('okay.mp3');
    if (no) {
      setNo(false);
    }
    setOkay(true);
  };

  const handleSelectBad = () => {
    playSound('no.mp3');
    if (okay) {
      setOkay(false);
    }
    setNo(true);
  };

  const playSound = (soundFileName) => {
    const audio = new Audio(`./${soundFileName}`);
    audio.play();
  };
  
  return (
    <div className="flex flex-col justify-center items-center relative ">
      <div className="absolute bottom-14">
        {okay && <img src="./O_sign.png" alt="Osign" className=" w-[150px] animate-flip-up" />}
        {no && <img src="./X_sign.png" alt="Osign" className="w-[150px] animate-flip-up" />}
      </div>
      <div className="flex justify-center gap-2">
        <button
          onClick={handleSelectOkay}
          className="hover:bg-green-300 hover:scale-105 transition-all w-[100px] h-10 bg-white border-2 shadow-2xl rounded-xl"
        >
          좋아
        </button>
        <button
          onClick={handleSelectBad}
          className="hover:bg-red-300 hover:scale-105 transition-all w-[100px] h-10 border-2 bg-white shadow-2xl rounded-xl"
        >
          싫어
        </button>
      </div>
    </div>
  );
};

export default CallPassButton;
