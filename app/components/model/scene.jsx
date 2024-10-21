"use client";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import MyRobot from "@/app/components/model/my-robot";
import Loader from "@/app/components/model/loader";
import { Suspense } from "react";

export default function Scene() {
  return (
    <Canvas
      className="border border-palette-1 shadow-xl rounded-md"
      gl={{
        alpha: true,
      }}
    >
      <Suspense fallback={<Loader />}>
        <PerspectiveCamera makeDefault position={[0, 15, 40]} />
        <OrbitControls
          maxPolarAngle={Math.PI / 2}
          enableZoom
          enablePan
          enableRotate
        />
        <directionalLight
          position={[3.3, 1.0, 4.4]}
          intensity={8}
          color={0xffffff}
        />
        <MyRobot position={[0, -14, 0]} scale={[0.13, 0.13, 0.13]} />
      </Suspense>
    </Canvas>
  );
}
