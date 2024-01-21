import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

interface ViewerProps {
  width?: number;
  height?: number;
  children: React.ReactNode;
}

const Viewer: React.FC<ViewerProps> = ({ width, height, children }) => {
  const canvasStyle: React.CSSProperties = {
    width: width ? `${width}vw` : '100vw',
    height: height ? `${height}vh` : '100vh',
  };

  return (
    <Canvas style={canvasStyle}>
      {/* 기본 조명 설정 */}
      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      {/* 동적으로 전달된 3D 오브젝트 렌더링 */}
      {children}

      {/* OrbitControls를 사용하여 카메라 조작 */}
      <OrbitControls enablePan={false} enableZoom={false} enableDamping dampingFactor={0.2} />
    </Canvas>
  );
}

export default Viewer;
