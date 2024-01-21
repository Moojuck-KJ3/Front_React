import Viewer from '../components/3D_Components/viewer';
import { ClickableSphere } from '../components/3D_Components/testObject';

function Test() {
  const spheres = Array.from({ length: 10 }, () => (
    <ClickableSphere
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
        {/* <ClickableSphere position={[0, 0, 0]} /> */}
        {spheres}
      </Viewer>
    </div>
  );
}

export default Test;
