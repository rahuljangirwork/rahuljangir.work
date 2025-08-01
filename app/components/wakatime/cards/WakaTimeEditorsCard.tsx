"use client";

import React from "react";
import { ProgressBlocks } from "@/app/components/ProgressBlocks"; // Adjust import path as needed

type Editor = {
    name: string;
    percent: number;
    text: string;
    hours?: number;
    decimal?: string;
    digital?: string;
    minutes?: number;
    total_seconds?: number;
};

interface WakaTimeEditorsCardProps {
    editors: Editor[];
}

export function WakaTimeEditorsCard({ editors }: WakaTimeEditorsCardProps) {
    const topEditors = editors.slice(0, 3);

    if (topEditors.length === 0) {
        return (
            <div className="text-center py-4">
                <p className="text-sm text-palette-2/60">No editor data</p>
            </div>
        );
    }

    return (
        <div className="space-y-4 flex-1">
            {topEditors.map((editor, index) => {
                // Calculate blocks based on percentage (out of 20 blocks for fine granularity)
                const totalBlocks = 20;
                const completedBlocks = Math.round((editor.percent / 100) * totalBlocks);

                return (
                    <div key={index} className="space-y-2">
                        {/* Editor Name & Percentage */}
                        <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-palette-2 truncate">
                                {editor.name}
                            </span>
                            <div className="flex items-center gap-2 text-xs">
                                {/* <span className="text-palette-2/60">{editor.text}</span> */}
                                <span className="text-palette-4 font-medium">
                                    {editor.percent.toFixed(0)}%
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
