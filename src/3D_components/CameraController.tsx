import React, { useEffect, useRef } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface CameraControllerProps {
    children: React.ReactNode;
  }

const CameraController: React.FC<CameraControllerProps> = ({ children }) => {
  const { camera } = useThree();

  const groupRef = useRef<THREE.Group | null>(null);
  const box = new THREE.Box3();

  useEffect(() => {
    if (groupRef.current) {
      box.setFromObject(groupRef.current);
      const boxCenter = box.getCenter(new THREE.Vector3());
      camera.position.set(boxCenter.x, boxCenter.y, boxCenter.z + box.getSize(new THREE.Vector3()).length());
      camera.lookAt(boxCenter);
    }
  }, [children, camera]);

  useFrame(() => {
    if (groupRef.current) {
      camera.lookAt(box.getCenter(new THREE.Vector3()));
    }
  });

  return <group ref={groupRef}>{children}</group>;
};

export default CameraController;
