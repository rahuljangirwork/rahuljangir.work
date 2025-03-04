"use client";

import React from "react";
import { Construction } from "lucide-react";

interface WorkInProgressProps {
  width?: string;
  height?: string;
}

const WorkInProgress: React.FC<WorkInProgressProps> = ({
  width = "100%",
  height = "auto",
}) => {
  return (
    <div
      className="flex flex-col items-center justify-between border border-palette-2 rounded-md p-2 my-8 mx-auto text-center bg-palette-1/50 backdrop-blur-md"
      style={{ width, height }}
    >
      <Construction className="w-8 h-8 text-palette-4" />
      <h3 className="text-lg font-medium mb-2">Work in progress</h3>
      <p className="text-sm max-w-md">
        I&apos;m still working on this section. Check back soon for updates!
      </p>
    </div>
  );
};

export default WorkInProgress;
