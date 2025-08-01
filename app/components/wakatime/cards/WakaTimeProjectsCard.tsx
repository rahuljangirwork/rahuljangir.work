"use client";

import React from "react";

type Project = {
    name: string;
    percent: number;
    text: string;
};

interface WakaTimeProjectsCardProps {
    projects: Project[];
}

export function WakaTimeProjectsCard({ projects }: WakaTimeProjectsCardProps) {
    const topProjects = projects.slice(0, 4);

    if (topProjects.length === 0) {
        return (
            <div className="text-center py-4">
                <p className="text-sm text-palette-2/60">No project data</p>
            </div>
        );
    }

    return (
        <div className="space-y-2 flex-1">
            {topProjects.map((project, index) => (
                <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-2 min-w-0 flex-1">
                        <span className="text-sm font-medium text-palette-2 truncate">{project.name}</span>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                        <div className="w-12 bg-palette-3/30 rounded-full h-2">
                            <div
                                className="bg-palette-4 h-2 rounded-full transition-all duration-300"
                                style={{ width: `${project.percent}%` }}
                            />
                        </div>
                        <span className="text-xs text-palette-2/60 w-8">{project.percent.toFixed(0)}%</span>
                    </div>
                </div>
            ))}
        </div>
    );
}
