"use client";
import { useState } from "react";
import { Grab, Pointer } from "lucide-react";
import Scene from "@/app/components/model/scene";

const RobotScene = () => {
  const [isClicking, setIsClicking] = useState(false);

  return (
    <div
      className="mb-12 relative w-full max-w-md mx-auto h-56 px-2"
      onMouseDown={() => setIsClicking(true)}
      onMouseUp={() => setIsClicking(false)}
    >
      <Scene />
      <span className="absolute bottom-0 right-2 text-palette-2 p-1">
        {isClicking ? <Grab /> : <Pointer />}
      </span>
    </div>
  );
};

export default RobotScene;
