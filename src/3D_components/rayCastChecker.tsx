import React, { useRef, useEffect } from 'react';
import { Mesh, Raycaster, Vector2, ArrowHelper, Vector3 } from 'three';
import { useThree, ThreeEvent, extend } from '@react-three/fiber';
import { InteractiveObjectProps } from './interObject_Base';

interface RaycastProviderProps {
  children: React.ReactElement<InteractiveObjectProps & { ref: React.RefObject<Mesh> }>[];
}

// ArrowHelper를 JSX 컴포넌트로 사용하기 위한 확장
extend({ ArrowHelper });

const RaycastChecker: React.FC<RaycastProviderProps> = ({ children }) => {
  const raycaster = useRef(new Raycaster());
  const { camera, gl } = useThree();

  const arrowHelperRef = useRef<ArrowHelper>(new ArrowHelper());

  const updateArrow = () => {
    if (arrowHelperRef.current) {
      arrowHelperRef.current.setDirection(raycaster.current.ray.direction);
      arrowHelperRef.current.position.copy(raycaster.current.ray.origin);
    }
  };

  const handleMouseClick = (event: ThreeEvent<MouseEvent>) => {
    if (!gl.domElement) return;

    const canvas = gl.domElement;
    const rect = canvas.getBoundingClientRect();

    const mouse = new Vector2();
    mouse.x = ((event.clientX - rect.left) / canvas.clientWidth) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / canvas.clientHeight) * 2 + 1;

    raycaster.current.setFromCamera(mouse, camera);
    updateArrow();

    const intersects = raycaster.current?.intersectObjects(
      children
        .map((child) => child.props.ref?.current)
        .filter((mesh): mesh is Mesh => mesh !== null && mesh !== undefined),
    );

    console.dir(
      'raycastChecker child map: ',
      children.map((child) => child.props.ref?.current),
    );

    if (intersects.length > 0) {
      const mesh = intersects[0].object as Mesh;
      const onClick = mesh.userData.onClick as () => void;
      onClick();
    }
  };

  // ArrowHelper 초기화
  useEffect(() => {
    arrowHelperRef.current = new ArrowHelper(new Vector3(), new Vector3(0, 0, 1), 100, 0xff0000);
    updateArrow(); // 초기에 화살표 업데이트
  }, []);

  // div 사용시 error 발생
  // 특정 목표의 위치를 클릭했을 때, 해당 목표의 onClick 함수를 실행시키기 위해
  // mesh 선언
  return (
    <mesh onClick={handleMouseClick}>
      {children}
      {arrowHelperRef.current && <primitive object={arrowHelperRef.current} />}
    </mesh>
  );
};

export default RaycastChecker;
