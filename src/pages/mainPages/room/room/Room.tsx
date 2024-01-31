import React, { useEffect, useState } from 'react';
import ModeZero from '../../mode/modeZero/ModeZero';
import ModeOne from '../../mode/modeOne/ModeOne';
import ModeTwo from '../../mode/modeTwo/ModeTwo';
import ModeThree from '../../mode/modeThree/ModeThree';
import ModeFour from '../../mode/modeFour/ModeFour';
import { connect } from 'react-redux';
import { getActions } from '../../../../store/actions/roomActions';

const MODE = {
  MODE0: 'MODE_NUMBER_ZERO',
  MODE1: 'MODE_NUMBER_ONE',
  MODE2: 'MODE_NUMBER_TWO',
  MODE3: 'MODE_NUMBER_THREE',
  MODE4: 'MODE_NUMBER_FOUR',
};

const Room: React.FC = () => {
  const [roomMode, setRoomMode] = useState(MODE.MODE0);
  const [isSelectDone, setIsSelectDone] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [isExpaining, setIsExpaining] = useState(true);

  const handleSelectionDone = () => {
    if (shouldAnimate) {
      return;
    }

    setShouldAnimate(true);
    setIsSelectDone(false);

    setTimeout(() => {
      if (roomMode === MODE.MODE0) {
        setRoomMode(MODE.MODE1);
        setShouldAnimate(false);
      }
      if (roomMode === MODE.MODE1) {
        setRoomMode(MODE.MODE2);
        setShouldAnimate(false);
      }

      if (roomMode === MODE.MODE2) {
        setRoomMode(MODE.MODE3);
        setShouldAnimate(false);
      }

      if (roomMode === MODE.MODE3) {
        setRoomMode(MODE.MODE4);
        setShouldAnimate(false);
      }
    }, 3000);
    setIsSelectDone(false);
  };

  const handleOpenModal = () => {
    setIsSelectDone(true);
  };

  const handleFinishExpain = () => {
    setIsExpaining(false);
  };

  switch (roomMode) {
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

export default connect(mapStoreStateToProps, mapActionToProps)(Room);
