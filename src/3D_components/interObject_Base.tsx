import React from 'react';
import { Mesh } from 'three';

export interface InteractiveObjectProps {
  position: [number, number, number];
  onClick: () => void;
  children: React.ReactNode;
  meshRef?: React.Ref<Mesh>;
}

const InteractiveObject: React.FC<InteractiveObjectProps> = ({ position, onClick, children, meshRef }) => {
  React.useEffect(() => {
    if (meshRef && 'current' in meshRef && meshRef.current) {
      meshRef.current.userData.onClick = onClick;
    }
  }, [onClick, meshRef]);

  return (
    <mesh ref={meshRef} position={position}>
      {children}
    </mesh>
  );
};


export default InteractiveObject;
