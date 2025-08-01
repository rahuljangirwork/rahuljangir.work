"use client";

import React from "react";
import { ProgressBlocks } from "@/app/components/ProgressBlocks";

type Machine = {
    name: string;
    percent: number;
    text: string;
    hours?: number;
    decimal?: string;
    digital?: string;
    minutes?: number;
    total_seconds?: number;
    machine_name_id?: string;
};

interface WakaTimeMachinesCardProps {
    machines: Machine[];
}

export function WakaTimeMachinesCard({ machines }: WakaTimeMachinesCardProps) {
    const topMachines = machines.slice(0, 3);

    if (topMachines.length === 0) {
        return (
            <div className="text-center py-4">
                <p className="text-sm text-palette-2/60">No machine data</p>
            </div>
        );
    }

    return (
        <div className="space-y-4 flex-1">
            {topMachines.map((machine, index) => {
                // Calculate blocks based on percentage (out of 20 blocks for fine granularity)
                const totalBlocks = 20;
                const completedBlocks = Math.round((machine.percent / 100) * totalBlocks);

                return (
                    <div key={index} className="space-y-2">
                        {/* Machine Name & Percentage */}
                        <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-palette-2 truncate">
                                {machine.name}
                            </span>
                            <div className="flex items-center gap-2 text-xs">
                                <span className="text-palette-4 font-medium">
                                    {machine.percent.toFixed(0)}%
                                </span>
                            </div>
                        </div>

                        {/* Progress Blocks */}
                        <ProgressBlocks
                            total={totalBlocks}
                            completed={completedBlocks}
                            size="sm"
                            showFraction={false}
                            showPercentage={false}
                            completedBlockClassName="bg-palette-4 border-palette-4"
                            emptyBlockClassName="bg-palette-3/30 border-palette-3/30"
                            className="space-y-0"
                        />
                    </div>
                );
            })}
        </div>
    );
}
