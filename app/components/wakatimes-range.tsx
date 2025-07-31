"use client";

import React, { useState, useEffect, useTransition } from "react";
// import { getWakaTimeStats } from "@/app/lib/wakatime/wakatime-service";

import { StatsRange } from "@/app/lib/types";
import type { WakaTimeStatsEntry } from "@/app/lib/types";
import { CodingDashboard } from "./wakatime-dashboard";

const RANGE_OPTIONS: { label: string; value: StatsRange }[] = [
    { label: "Today", value: "today" },
    { label: "Week", value: "week" },
    { label: "All Time", value: "all_time" },
];

export function WakaTimeSection() {
    // data now holds single WakaTimeStatsEntry or null
    const [data, setData] = useState<WakaTimeStatsEntry | null>(null);
    const [range, setRange] = useState<StatsRange>("today");
    const [error, setError] = useState<string | null>(null);
    const [isPending, startTransition] = useTransition();



    return (
        <div>
            <div className="flex gap-2 mb-6">
                {RANGE_OPTIONS.map(({ label, value }) => (
                    <button
                        key={value}
                        type="button"
                        className={`px-3 py-1 rounded-md border ${range === value
                                ? "bg-palette-4 text-white border-palette-4"
                                : "bg-muted border-transparent text-muted-foreground hover:bg-palette-2"
                            }`}
                        disabled={isPending}
                        onClick={() => setRange(value)}
                    >
                        {label}
                    </button>
                ))}
            </div>

            {error && (
                <div className="bg-red-100 text-red-700 rounded p-3 mb-4">{error}</div>
            )}

            {isPending || !data ? (
                <div className="space-y-6">
                    <div className="w-full h-32 bg-palette-2 animate-pulse rounded-lg" />
                    <div className="w-full h-32 bg-palette-2 animate-pulse rounded-lg" />
                </div>
            ) : (
                // Now `data` is a WakaTimeStatsEntry, exactly what CodingDashboard expects
                <CodingDashboard data={data} />
            )}
        </div>
    );
}
