import { useGLTF } from "@react-three/drei";

const SmallBananaModel = ({
  position,
}: {
  position: [number, number, number];
}) => {
  const { scene } = useGLTF("/model3d/smallBanana.glb");
  return (
    <primitive object={scene} position={position} scale={[0.5, 0.5, 0.5]} />
  );
};

export default SmallBananaModel;
