"use client";
import React from "react";

type OS = {
    name: string;
    percent: number;
    text: string;
};

export function WakaTimeOperatingSystemsCard({ operatingSystems }: { operatingSystems: OS[] }) {
    return (
        <div className="card">
            <h3 className="font-bold text-lg">Operating Systems</h3>
            <ul className="space-y-1 mt-2">
                {operatingSystems.slice(0, 5).map(os => (
                    <li key={os.name} className="flex justify-between items-center">
                        <span>{os.name}</span>
                        <span className="text-xs text-muted-foreground">{os.text} ({os.percent}%)</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
