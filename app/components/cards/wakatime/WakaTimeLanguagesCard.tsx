"use client";
import React from "react";
import { Code } from "lucide-react";

type Language = {
    name: string;
    percent: number;
    text: string;
};

export function WakaTimeLanguagesCard({ languages }: { languages: Language[] }) {
    return (
        <div className="card">
            {/* Optional title area */}
            {/* <div className="flex items-center mb-3">
                <Code className="h-6 w-6 mr-2 text-palette-4" />
                <h3 className="text-lg font-semibold">Top Languages</h3>
            </div> */}
            {/* Dynamic Avatars Row */}
            {/* <div className="flex gap-2 mb-3">
                {languages.slice(0, 5).map((lang, idx) => (
                    <DynamicLangIcon key={lang.name + "_pill"} name={lang.name} idx={idx} />
                ))}
            </div> */}
            <ul className="space-y-1 mt-2">
                {languages.slice(0, 5).map((lang, idx) => (
                    <li
                        key={lang.name}
                        className="flex justify-between items-center px-1"
                    >
                        <span className="flex items-center gap-2">
                            <DynamicLangIcon name={lang.name} idx={idx} />
                            {lang.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                            {lang.text} ({lang.percent}%)
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

const THEME_COLORS = [
    "#FF8400", // palette-4 (accent orange)
    "#7B4019", // palette-1 (earthy brown)
    "#F0F2BD", // palette-2 (beige)
    "#F6F1E9", // palette-3 (off-white)
];

function DynamicLangIcon({ name, idx }: { name: string; idx: number }) {
    // Cycle colors based on idx for visual distinction (repeat if > 4)
    const bg = THEME_COLORS[idx % THEME_COLORS.length];
    // Pick readable text color for contrast
    const textColor =
        idx % THEME_COLORS.length === 2 || idx % THEME_COLORS.length === 3
            ? "#4F200D" // Use primary brown for light backgrounds (palette-2, palette-3)
            : "#fff";   // White for darker backgrounds

    return (
        <span
            className="w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm border-2 border-white shadow"
            style={{
                background: bg,
                color: textColor,
                userSelect: "none"
            }}
            title={name}
        >
            {name[0]?.toLocaleUpperCase() || "?"}
        </span>
    );
}

