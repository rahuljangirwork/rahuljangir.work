"use client";

import React from "react";
import { Progress } from "@/app/components/ui/progress";

type Project = {
    name: string;
    percent: number;
    text: string;
};

interface WakaTimeProjectsCardProps {
    projects: Project[];
}

export function WakaTimeProjectsCard({ projects }: WakaTimeProjectsCardProps) {
    const topProjects = projects.slice(0, 5);

    if (topProjects.length === 0) {
        return (
            <div className="flex items-center justify-center h-24 text-palette-3">
                No project data available
            </div>
        );
    }

    return (
        <div className="space-y-3 flex-1">
            {topProjects.map((project, index) => (
                <div key={project.name} className="space-y-1">
                    <div className="flex justify-between items-center text-sm">
                        <span className="font-medium text-palette-2 truncate">
                            {project.name}
                        </span>
                        <span className="text-palette-3">{project.text}</span>
                    </div>
                    <Progress
                        value={project.percent}
                        className="h-2"
                    />
                </div>
            ))}
        </div>
    );
}
