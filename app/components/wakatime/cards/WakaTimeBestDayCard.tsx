"use client";

import React from "react";

interface WakaTimeBestDayCardProps {
    date: string;
    value: string;
}

export function WakaTimeBestDayCard({ date, value }: WakaTimeBestDayCardProps) {
    const formatDate = (dateString: string) => {
        if (!dateString) return "—";
        return new Date(dateString).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric'
        });
    };

    return (
        <div className="flex flex-col justify-center flex-1">
            <p className="text-xl md:text-2xl font-bold text-palette-4 mb-1">
                {value}
            </p>
            <p className="text-xs text-palette-3">
                {formatDate(date)}
            </p>
        </div>
    );
}
