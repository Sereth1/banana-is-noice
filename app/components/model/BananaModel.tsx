import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { Mesh } from "three";

interface Props {
  isHovered: boolean;
}

const BananaModel = ({ isHovered }: Props) => {
  const meshRef = useRef<Mesh>(null);
  const { scene, animations } = useGLTF("/model3d/banana1.glb");
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    if (actions && animations.length > 0) {
      const action = actions[animations[0].name];
      if (action) {
        if (isHovered) {
          action.paused = false;
          action.play();
        } else {
          action.paused = true;
        }
      }
    }
  }, [actions, animations, isHovered]);

  useEffect(() => {
    scene.traverse((object) => {
      if ((object as Mesh).isMesh) {
        object.castShadow = true;
        object.receiveShadow = true;
      }
    });
  }, [scene]);

  return (
    <mesh ref={meshRef}>
      <primitive object={scene} scale={[20, 20, 20]} position={[0, -5, 0]} />
    </mesh>
  );
};

export default BananaModel;
