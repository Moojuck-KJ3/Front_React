import React from 'react';
import { Mesh } from 'three';

export interface InteractiveObjectProps {
  position: [number, number, number];
  onClick: () => void;
  children: React.ReactNode;
}

const InteractiveObject: React.FC<InteractiveObjectProps> = ({ position, onClick, children }) => {
  const meshRef = React.useRef<Mesh>(null);

  React.useEffect(() => {
    if (meshRef.current) {
      meshRef.current.userData.onClick = onClick;
    }
  }, [onClick]);

  return (
    <mesh ref={meshRef} position={position}>
      {children}
    </mesh>
  );
};

export default InteractiveObject;
