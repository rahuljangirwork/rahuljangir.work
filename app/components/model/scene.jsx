"use client";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import MyRobot from "@/app/components/model/my-robot";
import Loader from "@/app/components/model/loader";
import { Suspense } from "react";
import { cn } from "@/app/lib/utils";

export default function Scene({ className }) {
  return (
    <Canvas
      className={cn(className)}
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
