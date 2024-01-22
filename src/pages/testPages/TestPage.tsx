import Viewer from '../../3D_components/viewer';
import { ClickableSphere } from '../../3D_components/testObject';
import RaycastChecker from '../../3D_components/rayCastChecker';

function Test() {
  const spheres = Array.from({ length: 10 }, (_, index) => (
    <ClickableSphere
      key={index}
      position={[
        Math.random() * 10 - 5, // X coordinate
        Math.random() * 10 - 5, // Y coordinate
        Math.random() * 10 - 5, // Z coordinate
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
