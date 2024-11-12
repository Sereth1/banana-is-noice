import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useState, useEffect } from "react";
import BananaModel from "../model/BananaModel";
import { SiApplemusic } from "react-icons/si";

export default function Banana3d() {
  const [isHovered, setIsHovered] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [isAudioAllowed, setIsAudioAllowed] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && isAudioAllowed) {
      const newAudio = new Audio();
      newAudio.src = "/BananaPhone.mp3";
      newAudio.preload = "auto";
      newAudio.addEventListener("canplaythrough", () => {
        console.log("Audio can play through without interruption.");
      });
      newAudio.addEventListener("error", (e) => {
        console.error("Error loading audio file:", e);
      });
      setAudio(newAudio);
    }
  }, [isAudioAllowed]);

  useEffect(() => {
    if (isHovered && audio) {
      audio.play().catch((error) => {
        console.error("Failed to play audio:", error);
      });
    } else if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  }, [isHovered, audio]);

  const enableAudio = () => {
    setIsAudioAllowed(true);
  };

  return (
    <div className="flex flex-col items-center h-[600px] w-full bg-hightLight bg-opacity-20">
      {!isAudioAllowed && (
        <button
          onClick={enableAudio}
          className="mb-4 px-4 py-2 border bg-black bg-op text-white rounded"
        >
          <SiApplemusic />
        </button>
      )}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex justify-center items-center h-full w-full"
      >
        <Canvas
          className="w-full h-full"
          shadows
          camera={{ position: [0, 20, 100], fov: 50 }}
        >
          <ambientLight intensity={0.5} />
          <directionalLight
            position={[2, 8, 2]}
            intensity={1.5}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <mesh receiveShadow position={[0, -8, 0]}>
            <cylinderGeometry args={[50, 50, 5, 200]} />
            <meshStandardMaterial color="#D32F2F" />
          </mesh>
          <BananaModel isHovered={isHovered} />
          <OrbitControls enableZoom={false} autoRotate />
        </Canvas>
      </div>
    </div>
  );
}
