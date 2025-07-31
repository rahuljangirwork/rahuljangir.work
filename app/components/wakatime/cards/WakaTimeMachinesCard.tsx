"use client";

import React from "react";

type Machine = {
    name: string;
    percent: number;
    text: string;
};

interface WakaTimeMachinesCardProps {
    machines: Machine[];
}

export function WakaTimeMachinesCard({ machines }: WakaTimeMachinesCardProps) {
    const topMachines = machines.slice(0, 3);

    if (topMachines.length === 0) {
        return (
            <div className="flex items-center justify-center h-24 text-palette-3">
                No machine data
            </div>
        );
    }

    return (
        <div className="space-y-2 flex-1">
            {topMachines.map((machine) => (
                <div key={machine.name} className="flex justify-between items-center">
                    <span className="text-sm font-medium text-palette-2">
                        {machine.name}
                    </span>
                    <span className="text-sm text-palette-3">
                        {machine.text}
                    </span>
                </div>
            ))}
        </div>
    );
}
