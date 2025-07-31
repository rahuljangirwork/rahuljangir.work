"use client";

import React from "react";

interface WakaTimeDailyAverageCardProps {
    average: string;
}

export function WakaTimeDailyAverageCard({ average }: WakaTimeDailyAverageCardProps) {
    return (
        <div className="flex flex-col justify-center flex-1">
            <p className="text-2xl md:text-3xl font-bold text-palette-4 mb-1">
                {average}
            </p>
            <p className="text-xs text-palette-3">
                per day
            </p>
        </div>
    );
}
