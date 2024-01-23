import React, { useRef, useEffect } from 'react';
import { Mesh, Raycaster, Vector2, Vector3 } from 'three';
import { useThree, ThreeEvent, extend } from '@react-three/fiber';
import { InteractiveObjectProps } from './interObject_Base';

interface RaycastProviderProps {
  children: React.ReactElement<InteractiveObjectProps & { ref: React.RefObject<Mesh> }>[];
}

const RaycastChecker: React.FC<RaycastProviderProps> = ({ children }) => {
  const raycaster = useRef(new Raycaster());
  const { camera, gl } = useThree();

  const handleMouseClick = (event: ThreeEvent<MouseEvent>) => {
    // 이벤트 버블링을 막기 위하여 stopPropagation 사용
    // 즉, 이 이벤트는 한번만 실행되고, 부모 요소로 전파되지 않는다.
    event.stopPropagation();

    if (!gl.domElement) return;

    const canvas = gl.domElement;
    const rect = canvas.getBoundingClientRect();

    const mouse = new Vector2();
    mouse.x = ((event.clientX - rect.left) / canvas.clientWidth) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / canvas.clientHeight) * 2 + 1;

    raycaster.current.setFromCamera(mouse, camera);

    const intersects = raycaster.current?.intersectObjects(
      children
        .map((child) => child.props.meshRef?.current)
        .filter((mesh): mesh is Mesh => mesh !== null && mesh !== undefined),
    );

    if (intersects && intersects.length > 0) {
      const mesh = intersects[0].object as Mesh;
      const onClick = mesh.userData.onClick as () => void;
      onClick();

      intersects.length = 0;
    }
  };

  // div 사용시 error 발생
  // 특정 목표의 위치를 클릭했을 때, 해당 목표의 onClick 함수를 실행시키기 위해
  // mesh 선언
  return (
    <mesh onClick={handleMouseClick}>
      {children}
    </mesh>
  );
};

export default RaycastChecker;
