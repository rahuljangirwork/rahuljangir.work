"use client";

import React from "react";
import { Construction, Mail } from "lucide-react";
import { Card, CardFooter, CardHeader } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";

interface WorkInProgressProps {
  width?: string;
  height?: string;
}

const WorkInProgress: React.FC<WorkInProgressProps> = ({
  width = "100%",
  height = "auto",
}) => {
  return (
    <Card className="mx-auto overflow-hidden" style={{ width, height }}>
      <div className="p-4 flex flex-col items-center text-center">
        <Construction className="w-10 h-10 text-palette-4" />
        <h2 className="text-2xl font-bold mb-2 text-palette-2">
          This section is a work in progress
        </h2>
        <p className="text-md mb-6 text-muted-foreground text-balance">
          This section is currently under construction. I&apos;m working
          diligently to finish this post according to my time.
        </p>
      </div>
      <CardFooter className="justify-center pb-6">
        <Button asChild className="bg-palette-1/80 backdrop-blur-sm">
          <a
            href="mailto:contact@example.com"
            className="inline-flex items-center"
          >
            <Mail className="w-4 h-4 mr-2" />
            Contact Me for Updates
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default WorkInProgress;
