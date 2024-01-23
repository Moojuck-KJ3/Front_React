import Viewer from '../../3D_components/viewer';
import { ClickableSphere } from '../../3D_components/testObject';
import RaycastChecker from '../../3D_components/rayCastChecker';
import React from 'react';
import { Mesh } from 'three';

function Test() {
  const [sphereRefs, setSphereRefs] = React.useState(() => Array.from({ length: 100 }, () => React.createRef<Mesh>()));

  const spheres = sphereRefs.map((ref, index) => (
    <ClickableSphere
      key={index}
      meshRef={ref}
      position={[
        Math.random() * 100 - 50, // X coordinate
        Math.random() * 100 - 50, // Y coordinate
        Math.random() * 100 - 50, // Z coordinate
      ]}
    />
  ));

  return (
    <div>
      <Viewer width={75} height={60}>
        <RaycastChecker>{spheres}</RaycastChecker>
      </Viewer>
    </div>
  );
}

export default Test;
