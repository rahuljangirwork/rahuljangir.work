"use client";

import React from "react";

type OS = {
    name: string;
    percent: number;
    text: string;
};

interface WakaTimeOperatingSystemsCardProps {
    operatingSystems: OS[];
}

export function WakaTimeOperatingSystemsCard({
    operatingSystems
}: WakaTimeOperatingSystemsCardProps) {
    const topOS = operatingSystems.slice(0, 3);

    if (topOS.length === 0) {
        return (
            <div className="flex items-center justify-center h-24 text-palette-3">
                No OS data
            </div>
        );
    }

    return (
        <div className="space-y-2 flex-1">
            {topOS.map((os) => (
                <div key={os.name} className="flex justify-between items-center">
                    <span className="text-sm font-medium text-palette-2">
                        {os.name}
                    </span>
                    <span className="text-sm text-palette-3">
                        {os.text}
                    </span>
                </div>
            ))}
        </div>
    );
}
