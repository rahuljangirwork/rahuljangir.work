// app/lib/wakatime/wakatime-service.ts

import type { StatsRange, WakaTimeStatsData } from "../types";

export interface DateRangeFilter {
    after?: string;
    before?: string;
}

export function getDateRange(range: StatsRange): DateRangeFilter {
    const now = new Date();

    switch (range) {
        case "today": {
            // Start from midnight today
            const startOfToday = new Date(now);
            startOfToday.setHours(0, 0, 0, 0);
            return {
                after: startOfToday.toISOString(),
                before: now.toISOString(),
            };
        }
        case "week":
            // Last 7 days including today
            return {
                after: new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString(),
                before: now.toISOString(),
            };
        case "all_time":
        default:
            return {};
    }
}

export async function getWakaTimeStats(range: StatsRange): Promise<WakaTimeStatsData> {
    const dateRange = getDateRange(range);

    // Supabase RPC expects filter: must include period_type + date range
    const filter = { period_type: "daily", ...dateRange };

    const response = await fetch("/api/portfolio", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ flag: "wakatime", filter }),
    });

    const json = await response.json();

    if (!response.ok) {
        throw new Error(json.error || "Failed to fetch WakaTime stats");
    }

    // Data is returned as an array of WakaTimeStatsEntry
    return json.data as WakaTimeStatsData;
}
