"use client";

import React from "react";

type Editor = {
    name: string;
    percent: number;
    text: string;
};

interface WakaTimeEditorsCardProps {
    editors: Editor[];
}

export function WakaTimeEditorsCard({ editors }: WakaTimeEditorsCardProps) {
    const topEditors = editors.slice(0, 3);

    if (topEditors.length === 0) {
        return (
            <div className="flex items-center justify-center h-24 text-palette-3">
                No editor data
            </div>
        );
    }

    return (
        <div className="space-y-2 flex-1">
            {topEditors.map((editor) => (
                <div key={editor.name} className="flex justify-between items-center">
                    <span className="text-sm font-medium text-palette-2">
                        {editor.name}
                    </span>
                    <span className="text-sm text-palette-3">
                        {editor.text}
                    </span>
                </div>
            ))}
        </div>
    );
}
