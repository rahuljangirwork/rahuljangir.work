"use client";

import React from "react";

type Language = {
    name: string;
    percent: number;
    text: string;
};

interface WakaTimeLanguagesCardProps {
    languages: Language[];
}

export function WakaTimeLanguagesCard({ languages }: WakaTimeLanguagesCardProps) {
    const topLanguages = languages.slice(0, 4);

    if (topLanguages.length === 0) {
        return (
            <div className="text-center py-6">
                <div className="w-2 h-2 mx-auto mb-2 rounded-full bg-palette-3/30" />
                <p className="text-sm text-palette-2/60">No language data</p>
            </div>
        );
    }

    return (
        <div className="space-y-4 flex-1">
            {topLanguages.map((lang, index) => (
                <div key={index} className="group relative">
                    <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2 min-w-0 flex-1">
                            <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${index === 0 ? 'bg-palette-4' : 'bg-palette-3/50'
                                }`} />
                            <span className="text-sm font-medium text-palette-2 truncate">
                                {lang.name}
                            </span>
                        </div>
                        <span className="text-sm font-mono text-palette-4 tabular-nums">
                            {lang.percent.toFixed(1)}%
                        </span>
                    </div>

                    {/* Ultra-minimal progress bar */}
                    <div className="w-full h-0.5 bg-palette-3/20 rounded-full overflow-hidden">
                        <div
                            className={`h-full rounded-full transition-all duration-700 ease-out ${index === 0 ? 'bg-palette-4' : 'bg-palette-4/70'
                                }`}
                            style={{
                                width: `${lang.percent}%`,
                                transform: 'translateX(0%)'
                            }}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}
