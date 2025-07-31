"use client";

import React from "react";
import { Progress } from "@/app/components/ui/progress";

type Language = {
    name: string;
    percent: number;
    text: string;
};

interface WakaTimeLanguagesCardProps {
    languages: Language[];
}

export function WakaTimeLanguagesCard({ languages }: WakaTimeLanguagesCardProps) {
    const topLanguages = languages.slice(0, 5);

    if (topLanguages.length === 0) {
        return (
            <div className="flex items-center justify-center h-24 text-palette-3">
                No language data available
            </div>
        );
    }

    return (
        <div className="space-y-3 flex-1">
            {topLanguages.map((language, index) => (
                <div key={language.name} className="space-y-1">
                    <div className="flex justify-between items-center text-sm">
                        <span className="font-medium text-palette-2">{language.name}</span>
                        <span className="text-palette-3">{language.text}</span>
                    </div>
                    <Progress
                        value={language.percent}
                        className="h-2"
                        style={{
                            '--progress-background': `hsl(var(--palette-${index + 1}))`,
                        } as React.CSSProperties}
                    />
                </div>
            ))}
        </div>
    );
}
