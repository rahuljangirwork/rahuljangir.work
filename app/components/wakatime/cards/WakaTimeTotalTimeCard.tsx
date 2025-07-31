"use client";

import React from "react";

interface WakaTimeTotalTimeCardProps {
    totalTime: string;
}

export function WakaTimeTotalTimeCard({ totalTime }: WakaTimeTotalTimeCardProps) {
    return (
        <div className="flex flex-col justify-center">
            <p className="text-4xl md:text-6xl font-bold text-palette-4 mb-2">
                {totalTime}
            </p>
            <p className="text-sm text-palette-3">
                This week's total coding time
            </p>
        </div>
    );
}
