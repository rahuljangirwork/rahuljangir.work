"use client";
import React from "react";
import { WakaTimeTotalTimeCard } from "@/app/components/cards/wakatime/WakaTimeTotalTimeCard";
import { WakaTimeDailyAverageCard } from "@/app/components/cards/wakatime/WakaTimeDailyAverageCard";
import { WakaTimeBestDayCard } from "@/app/components/cards/wakatime/WakaTimeBestDayCard";
import { WakaTimeLanguagesCard } from "@/app/components/cards/wakatime/WakaTimeLanguagesCard";
import { WakaTimeEditorsCard } from "@/app/components/cards/wakatime/WakaTimeEditorsCard";
import { WakaTimeOperatingSystemsCard } from "@/app/components/cards/wakatime/WakaTimeOperatingSystemsCard";
import { WakaTimeMachinesCard } from "@/app/components/cards/wakatime/WakaTimeMachinesCard";
import { WakaTimeProjectsCard } from "@/app/components/cards/wakatime/WakaTimeProjectsCard";

// Type definitions
interface Language {
    name: string;
    percent: number;
    text: string;
    total_seconds: number;
    hours: number;
    minutes: number;
}
interface Editor { name: string; percent: number; text: string; }
interface OS { name: string; percent: number; text: string; }
interface Machine { name: string; percent: number; text: string; }
interface Project { name: string; percent: number; text: string; }

interface CodingDashboardProps {
    data: any; // raw API response
}

export function CodingDashboard({ data }: CodingDashboardProps) {
    // Fallbacks prevent runtime crashes if WakaTime hasn't synced yet
    const stats = data.stats?.data || {};
    const languages = data.languages?.data || [];
    const editors = data.editors?.data || [];
    const operatingSystems = data.operatingSystems?.data || [];
    const machines = data.machines?.data || [];
    const projects = stats.projects || [];

    // Parse values to your card expected structure if needed
    return (
        <div className="flex flex-col space-y-8">
            {/* Summary Cards Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <WakaTimeTotalTimeCard totalTime={stats.human_readable_total || "—"} />
                <WakaTimeDailyAverageCard average={stats.human_readable_daily_average || "—"} />
                <WakaTimeBestDayCard value={stats.best_day?.text || "—"} date={stats.best_day?.date || ""} />
            </div>
            {/* Detail Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <WakaTimeLanguagesCard languages={languages as Language[]} />
                <WakaTimeEditorsCard editors={editors as Editor[]} />
                <WakaTimeOperatingSystemsCard operatingSystems={operatingSystems as OS[]} />
                <WakaTimeMachinesCard machines={machines as Machine[]} />
                <WakaTimeProjectsCard projects={projects as Project[]} />
            </div>
        </div>
    );
}

