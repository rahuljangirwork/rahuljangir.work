"use client";
import React from "react";

type Language = {
    name: string;
    percent: number;
    text: string;
};

export function WakaTimeLanguagesCard({ languages }: { languages: Language[] }) {
    return (
        <div className="card">
            <h3 className="font-bold text-lg">Top Languages</h3>
            <ul className="space-y-1 mt-2">
                {languages.slice(0, 5).map(lang => (
                    <li key={lang.name} className="flex justify-between items-center">
                        <span>{lang.name}</span>
                        <span className="text-xs text-muted-foreground">{lang.text} ({lang.percent}%)</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
