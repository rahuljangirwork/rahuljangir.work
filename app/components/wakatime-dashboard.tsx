"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    BarChart3,
    Clock,
    Star,
    Palette,
    Monitor,
    Merge,
    FolderKanban,
    Braces,
} from "lucide-react";

import { WakaTimeTotalTimeCard } from "@/app/components/cards/wakatime/WakaTimeTotalTimeCard";
import { WakaTimeDailyAverageCard } from "@/app/components/cards/wakatime/WakaTimeDailyAverageCard";
import { WakaTimeBestDayCard } from "@/app/components/cards/wakatime/WakaTimeBestDayCard";
import { WakaTimeLanguagesCard } from "@/app/components/cards/wakatime/WakaTimeLanguagesCard";
import { WakaTimeEditorsCard } from "@/app/components/cards/wakatime/WakaTimeEditorsCard";
import { WakaTimeOperatingSystemsCard } from "@/app/components/cards/wakatime/WakaTimeOperatingSystemsCard";
import { WakaTimeMachinesCard } from "@/app/components/cards/wakatime/WakaTimeMachinesCard";
import { WakaTimeProjectsCard } from "@/app/components/cards/wakatime/WakaTimeProjectsCard";

// Motion variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};
const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.96 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.23, 0.45, 0.47, 0.94] } },
};

//////////////////////////////////////////////////////////////////////////////////////
// Types reflecting your WakaTime data shapes based on your RPC response and usage //
//////////////////////////////////////////////////////////////////////////////////////

export interface WakaTimeStatItem {
    name: string;
    percent: number;
    text: string;
    total_seconds: number;
    hours: number;
    minutes: number;
    seconds?: number;
    color?: string | null;
}

export interface Project extends WakaTimeStatItem {
    ai_additions?: number;
    ai_deletions?: number;
    human_additions?: number;
    human_deletions?: number;
}

export interface WakaTimeStatsEntry {
    id: string;
    user_id: string;
    period_type: string;
    period_start: string; // ISO datetime
    period_end: string; // ISO datetime

    human_readable_total: string;
    human_readable_daily_average?: string | null;
    best_day?: { date: string; text: string; total_seconds?: number };
    total_seconds: number;

    languages: WakaTimeStatItem[];
    editors: WakaTimeStatItem[];
    operating_systems: WakaTimeStatItem[];
    machines: WakaTimeStatItem[];
    projects: Project[];

    // additional fields are allowed
    [key: string]: any;
}

/////////////////////////////////////////////////////////
// Component accepts a single WakaTimeStatsEntry object //
/////////////////////////////////////////////////////////

interface CodingDashboardProps {
    data: WakaTimeStatsEntry;
}

export function CodingDashboard({ data }: CodingDashboardProps) {
    // Extract all arrays safely with fallbacks
    const languages = data.languages || [];
    const editors = data.editors || [];
    const operatingSystems = data.operating_systems || [];
    const machines = data.machines || [];
    const projects = data.projects || [];

    // Use flat properties for totals
    const totalTime = data.human_readable_total || "—";
    const dailyAverage = data.human_readable_daily_average || "—";
    const bestDayText = data.best_day?.text || "—";
    const bestDayDate = data.best_day?.date || "";

    return (
        <div className="w-full mx-auto py-4 transition-colors duration-1000 ease-in-out text-palette-2 my-10 md:my-20">
            <motion.div
                className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {/* Total Coding Time */}
                <motion.div
                    variants={cardVariants}
                    className="col-span-2 sm:col-span-4 md:col-span-4 row-span-1 rounded-lg px-4 py-6 bg-palette-2/10 backdrop-blur-md flex flex-col border-none shadow-xl"
                >
                    <div className="flex items-center mb-2">
                        <Clock className="h-7 w-7 mr-2 text-palette-4" />
                        <h2 className="text-2xl font-bold">Total Coding Time</h2>
                    </div>
                    <div className="my-2">
                        <WakaTimeTotalTimeCard totalTime={totalTime} />
                    </div>
                </motion.div>

                {/* Daily Average */}
                <motion.div
                    variants={cardVariants}
                    className="col-span-2 sm:col-span-2 md:col-span-4 rounded-lg p-4 bg-primary border border-palette-1 shadow-xl flex flex-col"
                >
                    <div className="flex items-center mb-2">
                        <Palette className="h-6 w-6 mr-2 text-palette-4" />
                        <h3 className="text-md lg:text-lg font-semibold">Daily Average</h3>
                    </div>
                    <WakaTimeDailyAverageCard average={dailyAverage} />
                </motion.div>

                {/* Best Day */}
                <motion.div
                    variants={cardVariants}
                    className="col-span-2 sm:col-span-2 md:col-span-2 rounded-lg p-4 bg-primary border border-palette-1 shadow-xl flex flex-col"
                >
                    <div className="flex items-center mb-2">
                        <Star className="h-6 w-6 mr-2 text-palette-4" />
                        <h3 className="text-md lg:text-lg font-semibold">Best Day</h3>
                    </div>
                    <WakaTimeBestDayCard value={bestDayText} date={bestDayDate} />
                </motion.div>

                {/* Top Languages */}
                <motion.div
                    variants={cardVariants}
                    className="col-span-2 sm:col-span-4 md:col-span-4 rounded-lg p-4 bg-primary border border-palette-1 shadow-xl flex flex-col"
                >
                    <div className="flex items-center mb-2">
                        <Braces className="h-6 w-6 mr-2 text-palette-4" />
                        <h3 className="text-md lg:text-lg font-semibold">Top Languages</h3>
                    </div>
                    <WakaTimeLanguagesCard languages={languages} />
                </motion.div>

                {/* Editors */}
                <motion.div
                    variants={cardVariants}
                    className="col-span-2 sm:col-span-2 md:col-span-2 rounded-lg p-4 bg-primary border border-palette-1 shadow-xl flex flex-col"
                >
                    <div className="flex items-center mb-2">
                        <BarChart3 className="h-6 w-6 mr-2 text-palette-4" />
                        <h3 className="text-md lg:text-lg font-semibold">Editors</h3>
                    </div>
                    <WakaTimeEditorsCard editors={editors} />
                </motion.div>

                {/* Operating Systems */}
                <motion.div
                    variants={cardVariants}
                    className="col-span-2 sm:col-span-2 md:col-span-2 rounded-lg p-4 bg-primary border border-palette-1 shadow-xl flex flex-col"
                >
                    <div className="flex items-center mb-2">
                        <Monitor className="h-6 w-6 mr-2 text-palette-4" />
                        <h3 className="text-md lg:text-lg font-semibold">Operating Systems</h3>
                    </div>
                    <WakaTimeOperatingSystemsCard operatingSystems={operatingSystems} />
                </motion.div>

                {/* Machines */}
                <motion.div
                    variants={cardVariants}
                    className="col-span-2 sm:col-span-2 md:col-span-2 rounded-lg p-4 bg-primary border border-palette-1 shadow-xl flex flex-col"
                >
                    <div className="flex items-center mb-2">
                        <Merge className="h-6 w-6 mr-2 text-palette-4" />
                        <h3 className="text-md lg:text-lg font-semibold">Machines</h3>
                    </div>
                    <WakaTimeMachinesCard machines={machines} />
                </motion.div>

                {/* Projects */}
                <motion.div
                    variants={cardVariants}
                    className="col-span-2 sm:col-span-4 md:col-span-4 rounded-lg p-4 bg-primary border border-palette-1 shadow-xl flex flex-col"
                >
                    <div className="flex items-center mb-2">
                        <FolderKanban className="h-6 w-6 mr-2 text-palette-4" />
                        <h3 className="text-md lg:text-lg font-semibold">Top Projects</h3>
                    </div>
                    <WakaTimeProjectsCard projects={projects} />
                </motion.div>
            </motion.div>
        </div>
    );
}
