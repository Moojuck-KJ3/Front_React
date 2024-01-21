import React, { useState } from 'react';
import InteractiveObject from './InterObject_Base';

interface ClickableSphereProps {
    position: [number, number, number];
  }

export const ClickableSphere: React.FC<ClickableSphereProps> = ({position}) => {
  const [isClicked, setClicked] = useState(false);

  const handleSphereClick = () => {
    setClicked((prev)=>(!prev));
  };

  return (
    <InteractiveObject position={position} onClick={handleSphereClick}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color={isClicked ? 'red' : 'blue'} />
    </InteractiveObject>
  );
};
