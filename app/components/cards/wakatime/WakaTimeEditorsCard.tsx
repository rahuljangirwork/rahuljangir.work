"use client";
import React from "react";

type Editor = {
    name: string;
    percent: number;
    text: string;
};

export function WakaTimeEditorsCard({ editors }: { editors: Editor[] }) {
    return (
        <div className="card">
            {/* <h3 className="font-bold text-lg">Editors</h3> */}
            <ul className="space-y-1 mt-2">
                {editors.slice(0, 5).map(editor => (
                    <li key={editor.name} className="flex justify-between items-center">
                        <span>{editor.name}</span>
                        <span className="text-xs text-muted-foreground">{editor.text} ({editor.percent}%)</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
