"use client";

import React from "react";

interface WakaTimeTotalTimeCardProps {
    weeklyTotalTime: string;
}

export function WakaTimeTotalTimeCard({ weeklyTotalTime }: WakaTimeTotalTimeCardProps) {
    return (
        <div className="flex flex-col justify-center">
            <p className="text-4xl md:text-5xl font-bold text-palette-2">
                {weeklyTotalTime}
            </p>
            <p className="text-sm text-palette-2/60 mt-1">
                This week
            </p>
        </div>

      
    );
}
