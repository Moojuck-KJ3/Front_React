import React, { useRef } from 'react';
import { Mesh } from 'three';
import { useFrame } from '@react-three/fiber';

interface InteractiveObjectProps {
  position: [number, number, number];
  onClick: () => void;
  children: React.ReactNode;
}

const InteractiveObject: React.FC<InteractiveObjectProps> = ({ position, onClick, children }) => {
  const meshRef = useRef<Mesh>(null!);

  // 클릭 시 호출될 함수
  const handleClick = () => {
    onClick();
  };

  // 클릭 가능한 객체의 프레임마다 호출되는 함수
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} position={position} onClick={handleClick}>
      {children}
    </mesh>
  );
};

export default InteractiveObject;
