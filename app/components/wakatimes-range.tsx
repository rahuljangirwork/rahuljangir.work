// components/wakatimes-range.tsx

"use client";
import React, { useState, useTransition } from "react";
import { CodingDashboard } from "./wakatime-dashboard";
import { getWakaTimeStats } from "@/app/lib/wakatime/wakatime-service";

// Ensure this matches your declared union type somewhere, eg:
type StatsRange = "last_7_days" | "last_30_days" | "all_time";
const RANGE_OPTIONS: { label: string; value: StatsRange }[] = [
    { label: "Week", value: "last_7_days" },
    { label: "Month", value: "last_30_days" },
    { label: "All Time", value: "all_time" },
];

export function WakaTimeSection() { // <-- Capitalized
    const [range, setRange] = useState<StatsRange>("last_7_days"); // <--- Fix type!
    const [data, setData] = React.useState<any>(null);
    const [isPending, startTransition] = useTransition();
    const [error, setError] = React.useState<string | null>(null);

    React.useEffect(() => {
        let mounted = true;
        setError(null);
        startTransition(() => {
            getWakaTimeStats(range)
                .then((res) => mounted && setData(res))
                .catch(() => mounted && setError("Failed to load coding stats"));
        });
        return () => {
            mounted = false;
        };
    }, [range]);

    return (
        <div>
            <div className="flex gap-2 mb-6">
                {RANGE_OPTIONS.map(opt => (
                    <button
                        key={opt.value}
                        className={`px-3 py-1 rounded-md border
              ${range === opt.value
                                ? "bg-palette-4 text-white border-palette-4"
                                : "bg-muted border-transparent text-muted-foreground hover:bg-palette-2"}
            `}
                        disabled={isPending}
                        onClick={() => setRange(opt.value)}
                    >
                        {opt.label}
                    </button>
                ))}
            </div>
            {error && (
                <div className="bg-red-100 text-red-700 rounded p-3 mb-4">
                    {error}
                </div>
            )}
            {isPending || !data ? (
                <div className="space-y-6">
                    <div className="w-full h-32 bg-palette-2 animate-pulse rounded-lg" />
                    <div className="w-full h-32 bg-palette-2 animate-pulse rounded-lg" />
                </div>
            ) : (
                <CodingDashboard data={data} />
            )}
        </div>
    );
}
