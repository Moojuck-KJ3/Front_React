import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Html } from '@react-three/drei';

interface CameraControllerProps {
  children: React.ReactNode;
}

export const CameraController: React.FC<CameraControllerProps> = ({ children }) => {
  const { camera, scene } = useThree();
  const [isMoving, setIsMoving] = useState(false);
  const [targetPosition, setTargetPosition] = useState<THREE.Vector3 | null>(null);
  const [cameraPosition, setCameraPosition] = useState<THREE.Vector3>(new THREE.Vector3());

  const [stage, setStage] = useState(0); // 단계 상태 변수 추가

  const groupRef = useRef<THREE.Group | null>(null);
  const box = new THREE.Box3();

  const group = new THREE.Group();
  const boxSize = new THREE.Vector3();
  const boxCenter = new THREE.Vector3();
  const nextCameraPos = new THREE.Vector3();

  const handleClick = useCallback(() => {
    // 다음 단계로 이동
    setStage((prevStage) => {
      const nextStage = prevStage + 1;

      // children의 개수를 넘어가면 stage를 0으로 설정
      if (groupRef.current && nextStage * 10 >= groupRef.current.children[0].children.length) {
        setIsMoving(true); // 카메라 이동 시작
        return 0;
      }
      setIsMoving(true); // 카메라 이동 시작
      return nextStage;
    });
  }, [groupRef, stage]);

  useEffect(() => {
    if (groupRef.current) {
      while (group.children.length > 0) {
        group.remove(group.children[0]);
      }

      // 단계에 따라 선택된 '구체'들만 포함되도록 그룹에 추가
      const selectedChildren = groupRef.current.children[0].children.filter((child, index) => {
        return Math.floor(index / 10) === stage;
      });

      selectedChildren.forEach((child) => {
        const clone = child.clone();
        if (clone instanceof THREE.Mesh) {
          clone.material = new THREE.MeshBasicMaterial({ color: 'red' }); // 빨간색 재질 설정
        }
        group.add(clone);
      });

      // 그룹에 추가되지 않은 '구체'들의 색상을 파란색으로 변경
      groupRef.current.children[0].children.forEach((child) => {
        if (!selectedChildren.includes(child) && child instanceof THREE.Mesh) {
          child.material = new THREE.MeshBasicMaterial({ color: 'blue' }); // 파란색 재질 설정
        }
      });

      // 그룹을 씬에 추가
      scene.add(group);

      // 그룹을 기반으로 박스를 계산
      box.setFromObject(group);
      box.getSize(boxSize);
      box.getCenter(boxCenter);
      nextCameraPos.set(boxCenter.x, boxCenter.y, boxCenter.z + boxSize.length());

      setTargetPosition(nextCameraPos); // targetPosition 업데이트

      // 카메라의 초기 위치 설정
      if (stage === 0 && !isMoving) {
        camera.position.copy(nextCameraPos);
      }
    }
  }, [children, camera, stage]);

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
    position: 'absolute',
    top: 20,
    right: 20,
  };

  // 컨텍스트에 startMove 함수 제공
  return (
    <>
      {/*  position={cameraPosition} */}
      <Html>
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <button style={buttonStyle} onClick={handleClick}>
            Move Camera
          </button>
        </div>
      </Html>
      <group ref={groupRef}>{children}</group>
    </>
  );
};
