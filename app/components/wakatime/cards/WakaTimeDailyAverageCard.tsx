"use client";

import React from "react";

interface WakaTimeDailyAverageCardProps {
    average: string;
}

export function WakaTimeDailyAverageCard({ average }: WakaTimeDailyAverageCardProps) {
    return (
        <div className="flex-1 flex flex-col justify-center">
            <p className="text-2xl md:text-3xl font-bold text-palette-2">{average}</p>
            <p className="text-xs text-palette-2/60 mt-1">Per day</p>
        </div>
    );
}
