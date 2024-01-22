import React, { useState } from 'react';
import InteractiveObject from './interObject_Base';
import { Mesh } from 'three';

interface ClickableSphereProps {
  position: [number, number, number];
  meshRef?: React.Ref<Mesh>;
}

export const ClickableSphere: React.FC<ClickableSphereProps> = ({position, meshRef}) => {
  const [isClicked, setClicked] = useState(false);

  const handleSphereClick = () => {
    setClicked((prev) => !prev);
  };

  return (
    <InteractiveObject position={position} onClick={handleSphereClick} meshRef={meshRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color={isClicked ? 'red' : 'blue'} />
    </InteractiveObject>
  );
};