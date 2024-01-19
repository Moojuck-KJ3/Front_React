import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';
import { SphereGeometry, MeshStandardMaterial, Vector3 } from 'three';

const Sphere: React.FC<{ geometry: SphereGeometry; material: MeshStandardMaterial; position: Vector3 }> = ({
  geometry,
  material,
  position,
}) => {
  return (
    <>
      <mesh geometry={geometry} material={material} position={position} />
    </>
  );
};

interface SphereViewerProps {
  children?: ReactNode;
  count: number;
}

export const SphereViewer: React.FC<SphereViewerProps> = ({ count, children }) => {
  const [spheres, setSpheres] = useState<Vector3[]>([]);
  const sphereGeometry = new SphereGeometry(1, 32, 32);
  const sphereMaterial = new MeshStandardMaterial({ color: 'orange' });
  const spheresRef = useRef<Vector3[]>([]);

  useEffect(() => {
    const newSpheres = Array.from(
      { length: count },
      () => new Vector3(Math.random() * 100 - 50, Math.random() * 100 - 50, Math.random() * 100 - 50),
    );
    setSpheres(newSpheres);
    spheresRef.current = newSpheres;
  }, [count]);

  return (
    <Canvas style={{ width: '75vw', height: '60vh' }}>
      <OrbitControls />
      {spheres.map((position, index) => (
        <Sphere key={index} geometry={sphereGeometry} material={sphereMaterial} position={position} />
      ))}
      {children}
    </Canvas>
  );
};

export default SphereViewer;
