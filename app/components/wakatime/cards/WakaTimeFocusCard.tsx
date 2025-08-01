"use client";

import React from "react";

interface WakaTimeFocusCardProps {
    focusTimePercentage: number;
}

export function WakaTimeFocusCard({ focusTimePercentage }: WakaTimeFocusCardProps) {
    return (
        <div className="flex-1 flex flex-col justify-center">
            <p className="text-2xl md:text-3xl font-bold text-palette-2">
                {focusTimePercentage.toFixed(1)}%
            </p>
            <p className="text-xs text-palette-2/60 mt-1">Focus time</p>
        </div>
    );
}
