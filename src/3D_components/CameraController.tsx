import React, { useEffect, useRef, useState } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Html } from '@react-three/drei';

interface CameraControllerProps {
  children: React.ReactNode;
}

export const CameraController: React.FC<CameraControllerProps> = ({ children }) => {
  const { camera } = useThree();
  const [positions, setPositions] = useState<THREE.Vector3[]>([]);
  const [rotations, setRotations] = useState<THREE.Euler[]>([]);
  const [isMoving, setIsMoving] = useState(false);
  const [targetPosition, setTargetPosition] = useState<THREE.Vector3 | null>(null);
  const [cameraPosition, setCameraPosition] = useState<THREE.Vector3>(new THREE.Vector3());

  const groupRef = useRef<THREE.Group | null>(null);
  const box = new THREE.Box3();

  const startMove = () => {
    // 새로운 카메라 위치를 설정하고 이동을 시작합니다.
    const newPosition = camera.position.clone();
    newPosition.x /= 2;
    newPosition.y /= 2;
    newPosition.z /= 2;
    setTargetPosition(newPosition);
    setIsMoving(true);
  };

  useEffect(() => {
    if (groupRef.current) {
      box.setFromObject(groupRef.current);
      const boxCenter = box.getCenter(new THREE.Vector3());
      camera.position.set(boxCenter.x, boxCenter.y, boxCenter.z + box.getSize(new THREE.Vector3()).length());
      camera.lookAt(boxCenter);
      setPositions((prevPositions) => [...prevPositions, camera.position.clone()]);
      setRotations((prevRotations) => [...prevRotations, camera.rotation.clone()]);
    }
  }, [children, camera]);

  useFrame(() => {
    if (groupRef.current && isMoving && targetPosition) {
      // 카메라 위치를 선형 보간합니다.
      camera.position.lerp(targetPosition, 0.05);
      // 목표 위치에 도달했는지 확인합니다.
      if (camera.position.distanceTo(targetPosition) < 0.01) {
        setIsMoving(false);

        setCameraPosition(camera.position.clone());
      }
    }
  });

  const buttonStyle: React.CSSProperties = {
    position: 'fixed',
    top: 20,
    right: 20,
  };

  // 컨텍스트에 startMove 함수 제공
  return (
    <group ref={groupRef}>
      <Html position={cameraPosition}>
        <div style={{ position: 'relative' , width: '100%', height: '100%'}}>
          <button style={buttonStyle} onClick={startMove}>
            Move Camera
          </button>
        </div>
      </Html>
      {children}
    </group>
  );
};
