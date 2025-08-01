"use client";

import React from "react";

interface WakaTimeProductivityCardProps {
    productivityScore: number;
}

export function WakaTimeProductivityCard({ productivityScore }: WakaTimeProductivityCardProps) {
    const getScoreColor = (score: number) => {
        if (score >= 70) return "text-green-500";
        if (score >= 50) return "text-yellow-500";
        return "text-red-500";
    };

    return (
        <div className="flex-1 flex flex-col justify-center">
            <p className={`text-2xl md:text-3xl font-bold ${getScoreColor(productivityScore)}`}>
                {productivityScore}%
            </p>
            <p className="text-xs text-palette-2/60 mt-1">Productivity score</p>
        </div>
    );
}
