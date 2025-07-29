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
    Braces
} from "lucide-react";

// WakaTime stat cards:
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
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } }
};
const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.96 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.23, 0.45, 0.47, 0.94] } }
};

interface CodingDashboardProps { data: any; }
interface Language { name: string; percent: number; text: string; total_seconds: number; hours: number; minutes: number; }
interface Editor { name: string; percent: number; text: string; }
interface OS { name: string; percent: number; text: string; }
interface Machine { name: string; percent: number; text: string; }
interface Project { name: string; percent: number; text: string; }

export function CodingDashboard({ data }: CodingDashboardProps) {
    const stats = data.stats?.data || {};
    const languages = data.languages?.data || [];
    const editors = data.editors?.data || [];
    const operatingSystems = data.operatingSystems?.data || [];
    const machines = data.machines?.data || [];
    const projects = stats.projects || [];

    return (
        <div className="w-full mx-auto py-4 transition-colors duration-1000 ease-in-out text-palette-2 my-10 md:my-20">
            <motion.div
                className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >

                {/* 1️⃣ Total Coding Time */}
                <motion.div
                    variants={cardVariants}
                    className="
            col-span-2 sm:col-span-4 md:col-span-4
            row-span-1 rounded-lg px-4 py-6 bg-palette-2/10
            backdrop-blur-md flex flex-col border-none shadow-xl
          "
                >
                    <div className="flex items-center mb-2">
                        <Clock className="h-7 w-7 mr-2 text-palette-4" />
                        <h2 className="text-2xl font-bold">Total Coding Time</h2>
                    </div>
                    <div className="my-2">
                        <WakaTimeTotalTimeCard totalTime={stats.human_readable_total || "—"} />
                    </div>
                </motion.div>

                {/* 2️⃣ Daily Average */}
                <motion.div
                    variants={cardVariants}
                    className="
            col-span-2 sm:col-span-2 md:col-span-4
            rounded-lg p-4 bg-primary border border-palette-1 shadow-xl
            flex flex-col
          "
                >
                    <div className="flex items-center mb-2">
                        <Palette className="h-6 w-6 mr-2 text-palette-4" />
                        <h3 className="text-md lg:text-lg font-semibold">Daily Average</h3>
                    </div>
                    <WakaTimeDailyAverageCard average={stats.human_readable_daily_average || "—"} />
                </motion.div>

                {/* 3️⃣ Best Day */}
                <motion.div
                    variants={cardVariants}
                    className="
            col-span-2 sm:col-span-2 md:col-span-2
            rounded-lg p-4 bg-primary border border-palette-1 shadow-xl
            flex flex-col
          "
                >
                    <div className="flex items-center mb-2">
                        <Star className="h-6 w-6 mr-2 text-palette-4" />
                        <h3 className="text-md lg:text-lg font-semibold">Best Day</h3>
                    </div>
                    <WakaTimeBestDayCard value={stats.best_day?.text || "—"} date={stats.best_day?.date || ""} />
                </motion.div>

                {/* 4️⃣ Top Languages */}
                <motion.div
                    variants={cardVariants}
                    className="
            col-span-2 sm:col-span-4 md:col-span-4
            rounded-lg p-4 bg-primary border border-palette-1 shadow-xl
            flex flex-col
          "
                >
                    <div className="flex items-center mb-2">
                        <Braces className="h-6 w-6 mr-2 text-palette-4" />
                        <h3 className="text-md lg:text-lg font-semibold">Top Languages</h3>
                    </div>
                    <WakaTimeLanguagesCard languages={languages as Language[]} />
                </motion.div>

                {/* 5️⃣ Editors */}
                <motion.div
                    variants={cardVariants}
                    className="
            col-span-2 sm:col-span-2 md:col-span-2
            rounded-lg p-4 bg-primary border border-palette-1 shadow-xl
            flex flex-col
          "
                >
                    <div className="flex items-center mb-2">
                        <BarChart3 className="h-6 w-6 mr-2 text-palette-4" />
                        <h3 className="text-md lg:text-lg font-semibold">Editors</h3>
                    </div>
                    <WakaTimeEditorsCard editors={editors as Editor[]} />
                </motion.div>

                {/* 6️⃣ Operating Systems */}
                <motion.div
                    variants={cardVariants}
                    className="
            col-span-2 sm:col-span-2 md:col-span-2
            rounded-lg p-4 bg-primary border border-palette-1 shadow-xl
            flex flex-col
          "
                >
                    <div className="flex items-center mb-2">
                        <Monitor className="h-6 w-6 mr-2 text-palette-4" />
                        <h3 className="text-md lg:text-lg font-semibold">Operating Systems</h3>
                    </div>
                    <WakaTimeOperatingSystemsCard operatingSystems={operatingSystems as OS[]} />
                </motion.div>

                {/* 7️⃣ Machines */}
                <motion.div
                    variants={cardVariants}
                    className="
            col-span-2 sm:col-span-2 md:col-span-2
            rounded-lg p-4 bg-primary border border-palette-1 shadow-xl
            flex flex-col
          "
                >
                    <div className="flex items-center mb-2">
                        <Merge className="h-6 w-6 mr-2 text-palette-4" />
                        <h3 className="text-md lg:text-lg font-semibold">Machines</h3>
                    </div>
                    <WakaTimeMachinesCard machines={machines as Machine[]} />
                </motion.div>

                {/* 8️⃣ Projects */}
                <motion.div
                    variants={cardVariants}
                    className="
            col-span-2 sm:col-span-4 md:col-span-4
            rounded-lg p-4 bg-primary border border-palette-1 shadow-xl
            flex flex-col
          "
                >
                    <div className="flex items-center mb-2">
                        <FolderKanban className="h-6 w-6 mr-2 text-palette-4" />
                        <h3 className="text-md lg:text-lg font-semibold">Top Projects</h3>
                    </div>
                    <WakaTimeProjectsCard projects={projects as Project[]} />
                </motion.div>
            </motion.div>
        </div>
    );
}
