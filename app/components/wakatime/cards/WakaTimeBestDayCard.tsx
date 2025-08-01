"use client";

import React from "react";

interface WakaTimeBestDayCardProps {
    date: string;
    value: string;
}

export function WakaTimeBestDayCard({ date, value }: WakaTimeBestDayCardProps) {
    const formatDate = (dateString: string) => {
        if (!dateString) return "";
        return new Date(dateString).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric'
        });
    };

    const getTimeAgo = (dateString: string) => {
        if (!dateString) return "";

        try {
            // Handle both "2025-07-29" and full ISO strings
            const date = dateString.includes('T')
                ? new Date(dateString)
                : new Date(dateString + 'T00:00:00');

            const now = new Date();
            const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));

            if (diffInDays === 0) return "Today";
            if (diffInDays === 1) return "Yesterday";
            if (diffInDays <= 30) return `${diffInDays} days ago`;
            return formatDate(dateString); // Fall back to formatted date for older dates
        } catch {
            return formatDate(dateString);
        }
    };

    return (
        <div className="flex-1 flex flex-col justify-center">
            <p className="text-xl md:text-2xl font-bold text-palette-2">{value}</p>
            {date && (
                <div className="flex items-center gap-2 mt-1">
                    <p className="text-xs text-palette-2/60">
                        {formatDate(date)}
                    </p>
                    <span className="text-xs text-palette-2/40">•</span>
                    <p className="text-xs text-palette-4 font-medium">
                        {getTimeAgo(date)}
                    </p>
                </div>
            )}
        </div>
    );
}
