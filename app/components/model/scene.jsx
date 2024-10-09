"use client";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import MyRobot from "@/app/components/model/my-robot";
import Loader from "@/app/components/model/loader";
import { Suspense } from "react";

export default function Scene() {
  return (
    <div className="w-full h-full">
      <Canvas
        className="w-full h-full rounded-md bg-white bg-opacity-10"
        gl={{
          alpha: true,
        }}
      >
        <Suspense fallback={<Loader />}>
          <PerspectiveCamera makeDefault position={[0, 0, 40]} />
          <OrbitControls
            maxPolarAngle={Math.PI / 2}
            enableZoom
            enablePan
            enableRotate
          />
          <directionalLight
            position={[1, 1, 1]}
            intensity={8}
            color={0xffffff}
          />
          <directionalLight
            position={[-1, 1, 1]}
            intensity={2}
            color={0xffffff}
          />
          <MyRobot position={[0, -11, 0]} scale={[0.11, 0.11, 0.11]} />
        </Suspense>
      </Canvas>
    </div>
  );
}
