import React from "react";
import { Html, useProgress } from "@react-three/drei";
const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className="canvas-load text-xl flex justify-center flex-auto"></span>
      <h2 className="text-2xl bg-hightLight mt-10">{progress.toFixed(2)}%</h2>
    </Html>
  );
};

export default CanvasLoader;
