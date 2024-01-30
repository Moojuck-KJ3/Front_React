import React, { useState } from 'react';
import ModeZero from '../../mode/modeZero/ModeZero';
import ModeOne from '../../mode/modeOne/ModeOne';
import ModeTwo from '../../mode/modeTwo/ModeTwo';
import ModeThree from '../../mode/modeThree/ModeThree';
import ModeFour from '../../mode/modeFour/ModeFour';
import { getActions } from '../../../../store/actions/roomActions';
import { connect } from 'react-redux';

const MODE = {
  MODE0: 'MODE.MODE_NUMBER_ZERO',
  MODE1: 'MODE.MODE_NUMBER_ONE',
  MODE2: 'MODE.MODE_NUMBER_TWO',
  MODE3: 'MODE.MODE_NUMBER_THREE',
  MODE4: 'MODE.MODE_NUMBER_FOUR',
};

// 인자로 전달된 action들
interface RoomProps {
  setMoodKeyWard: (roomId: string, user1 : object, user2 : object) => void;
  getTagsByAudio: (user1 : object, user2 : object) => void;
  getKeywords2Rests: (user1_id : string, user2_id : string) => void;
  getNewCombine: (roomId : string, new_combi : object) => void;
  getRestCallPass : (user1_id : string, user2_id : string) => void;
  getResultRests : (user1_id : string, user2_id : string) => void;
}

const Room: React.FC<RoomProps> = ({}) => {
  const [isSelectDone, setIsSelectDone] = useState(false);
  const [mode, setMode] = useState(MODE.MODE0);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [isExpaining, setIsExpaining] = useState(true);

  const handleSelectionDone = () => {
    if (shouldAnimate) {
      return;
    }

    setShouldAnimate(true);
    setIsSelectDone(false);

    setTimeout(() => {
      if (mode === MODE.MODE0) {
        console.log('mode0 changed to mode1');
        setMode(MODE.MODE1);
        setShouldAnimate(false);
      }
      if (mode === MODE.MODE1) {
        console.log('mode1 changed to mode2');
        setMode(MODE.MODE2);
        setShouldAnimate(false);
      }

      if (mode === MODE.MODE2) {
        console.log('mode2 changed to mode3');
        setMode(MODE.MODE3);
        setShouldAnimate(false);
      }

      if (mode === MODE.MODE3) {
        console.log('mode3 changed to mode4');
        setMode(MODE.MODE4);
        setShouldAnimate(false);
      }
    }, 3000); // Adjust the delay time as needed

    setIsSelectDone(false);

    // To Do : something else when mode changes
  };

  const handleOpenModal = () => {
    setIsSelectDone(true);
  };

  const handleFinishExpain = () => {
    setIsExpaining(false);
  };

  switch (mode) {
    case MODE.MODE0:
      return (
        <ModeZero
          shouldAnimate={shouldAnimate}
          isExpaining={isExpaining}
          handleFinishExpain={handleFinishExpain}
          handleOpenModal={handleOpenModal}
          isSelectDone={isSelectDone}
          handleSelectionDone={handleSelectionDone}
          setIsSelectDone={setIsSelectDone}
        />
      );

    case MODE.MODE1:
      return (
        <ModeOne
          shouldAnimate={shouldAnimate}
          handleOpenModal={handleOpenModal}
          isSelectDone={isSelectDone}
          handleSelectionDone={handleSelectionDone}
          setIsSelectDone={setIsSelectDone}
        />
      );

    case MODE.MODE2:
      return (
        <ModeTwo
          shouldAnimate={shouldAnimate}
          isExpaining={isExpaining}
          handleFinishExpain={handleFinishExpain}
          handleOpenModal={handleOpenModal}
          isSelectDone={isSelectDone}
          handleSelectionDone={handleSelectionDone}
          setIsSelectDone={setIsSelectDone}
        />
      );

    case MODE.MODE3:
      return (
        <ModeThree
          shouldAnimate={shouldAnimate}
          isExpaining={isExpaining}
          handleFinishExpain={handleFinishExpain}
          handleOpenModal={handleOpenModal}
          isSelectDone={isSelectDone}
          handleSelectionDone={handleSelectionDone}
          setIsSelectDone={setIsSelectDone}
        />
      );

    case MODE.MODE4:
      return (
        <ModeFour
          shouldAnimate={shouldAnimate}
          isExpaining={isExpaining}
          handleFinishExpain={handleFinishExpain}
          handleOpenModal={handleOpenModal}
          isSelectDone={isSelectDone}
          handleSelectionDone={handleSelectionDone}
          setIsSelectDone={setIsSelectDone}
        />
      );

    default:
      return <div>Invalid mode</div>;
  }
};

//export default Room;

const mapActionToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};


const ConnectedRoom = connect(null, mapActionToProps)(Room);

export default ConnectedRoom;