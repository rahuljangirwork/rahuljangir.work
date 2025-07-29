"use client";
import React from "react";

type Project = { name: string; percent: number; text: string; };

export function WakaTimeProjectsCard({ projects }: { projects: Project[] }) {
    return (
        <div className="card">
            {/* <h3 className="font-bold text-lg">Projects</h3> */}
            <ul className="space-y-1 mt-2">
                {projects.slice(0, 5).map(project => (
                    <li key={project.name} className="flex justify-between items-center">
                        <span>{project.name}</span>
                        <span className="text-xs text-muted-foreground">{project.text} ({project.percent}%)</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
