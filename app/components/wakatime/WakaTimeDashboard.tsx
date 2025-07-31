"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    RefreshCw,
    Calendar,
    TrendingUp,
    Clock,
    Star,
    Palette,
    Monitor,
    Merge,
    FolderKanban,
    Braces,
    BarChart3
} from "lucide-react";
import { useWakaTime } from "@/app/lib/hooks/use-wakatime";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Skeleton } from "@/app/components/ui/skeleton";
import { Progress } from "@/app/components/ui/progress";

// Motion variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.96 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.23, 0.45, 0.47, 0.94] } },
};

const fadeInLeft = { hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } };

export function WakaTimeDashboard() {
    const [isRefreshing, setIsRefreshing] = useState(false);

    const {
        stats,
        isLoading,
        error,
        fetchLatestStats,
        refreshStats,
        clearError,
        lastUpdated,
    } = useWakaTime();

    const handleRefresh = async () => {
        setIsRefreshing(true);
        try {
            await refreshStats();
        } finally {
            setIsRefreshing(false);
        }
    };

    const formatLastUpdated = (timestamp: string | null) => {
        if (!timestamp) return "Never";
        const date = new Date(timestamp);
        const now = new Date();
        const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));

        if (diffInMinutes < 1) return "Just now";
        if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
        if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
        return date.toLocaleDateString();
    };

    // Loading skeleton
    if (isLoading && !stats) {
        return (
            <div className="w-full mx-auto py-4 transition-colors duration-1000 ease-in-out text-palette-2 my-10 md:my-20">
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                    <div className="space-y-2">
                        <Skeleton className="h-8 w-64 bg-palette-2/20" />
                        <Skeleton className="h-4 w-48 bg-palette-2/20" />
                    </div>
                    <Skeleton className="h-10 w-24 bg-palette-2/20" />
                </div>

                {/* Grid skeleton */}
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
                    <Skeleton className="col-span-2 sm:col-span-4 md:col-span-4 h-32 rounded-lg bg-palette-3/30" />
                    <Skeleton className="col-span-2 sm:col-span-2 md:col-span-4 h-32 rounded-lg bg-palette-3/30" />
                    <Skeleton className="col-span-2 sm:col-span-2 md:col-span-2 h-32 rounded-lg bg-palette-3/30" />
                    <Skeleton className="col-span-2 sm:col-span-4 md:col-span-4 h-32 rounded-lg bg-palette-3/30" />
                    <Skeleton className="col-span-2 sm:col-span-2 md:col-span-2 h-32 rounded-lg bg-palette-3/30" />
                    <Skeleton className="col-span-2 sm:col-span-2 md:col-span-2 h-32 rounded-lg bg-palette-3/30" />
                    <Skeleton className="col-span-2 sm:col-span-2 md:col-span-2 h-32 rounded-lg bg-palette-3/30" />
                    <Skeleton className="col-span-2 sm:col-span-4 md:col-span-4 h-32 rounded-lg bg-palette-3/30" />
                </div>
            </div>
        );
    }

    // Error state
    if (error) {
        return (
            <div className="w-full mx-auto py-4 transition-colors duration-1000 ease-in-out text-palette-2 my-10 md:my-20">
                <motion.div
                    variants={fadeInLeft}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5 }}
                    className="text-center space-y-4"
                >
                    <TrendingUp className="h-12 w-12 text-destructive mx-auto" />
                    <h2 className="text-2xl font-bold text-destructive">
                        Unable to load WakaTime data
                    </h2>
                    <p className="text-sm text-muted-foreground">{error}</p>
                    <div className="flex gap-2 justify-center">
                        <Button
                            onClick={fetchLatestStats}
                            variant="outline"
                            disabled={isLoading}
                            className="border-palette-1 text-palette-1 hover:bg-palette-1/10"
                        >
                            {isLoading ? "Retrying..." : "Retry"}
                        </Button>
                        <Button
                            onClick={clearError}
                            variant="ghost"
                            className="text-palette-1 hover:bg-palette-2/20"
                        >
                            Dismiss
                        </Button>
                    </div>
                </motion.div>
            </div>
        );
    }

    // No stats state
    if (!stats) {
        return (
            <div className="w-full mx-auto py-4 transition-colors duration-1000 ease-in-out text-palette-2 my-10 md:my-20">
                <motion.div
                    variants={fadeInLeft}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5 }}
                    className="text-center space-y-4"
                >
                    <Calendar className="h-12 w-12 text-palette-1 mx-auto" />
                    <h2 className="text-2xl font-bold text-palette-1">
                        No coding data available
                    </h2>
                    <p className="text-muted-foreground">
                        Connect your WakaTime account to see coding activity insights.
                    </p>
                    <Button
                        onClick={fetchLatestStats}
                        className="bg-palette-4 hover:bg-palette-4/90 text-white"
                    >
                        Load WakaTime Stats
                    </Button>
                </motion.div>
            </div>
        );
    }

    // Extract data safely with fallbacks
    const languages = stats.languages || [];
    const editors = stats.editors || [];
    const operatingSystems = stats.operating_systems || [];
    const machines = stats.machines || [];
    const projects = stats.projects || [];

    const totalTime = stats.human_readable_total || "—";
    const dailyAverage = stats.human_readable_daily_average || "—";
    const bestDayText = stats.best_day?.text || "—";
    const bestDayDate = stats.best_day?.date || "";

    return (
        <div className="w-full mx-auto py-4 transition-colors duration-1000 ease-in-out text-palette-2 my-10 md:my-20">
            {/* Header */}
            <motion.div
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8"
                variants={fadeInLeft}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5 }}
            >
                <div className="space-y-1">
                    <div className="flex items-center gap-3">
                        <h1 className="text-3xl md:text-4xl font-bold text-palette-1">
                            Development Analytics<span className="text-palette-4">.</span>
                        </h1>
                        <Badge variant="secondary" className="text-xs bg-palette-2 text-palette-1 border-palette-2">
                            Last 7 days
                        </Badge>
                    </div>
                    <p className="text-sm text-palette-1/80">
                        Last updated: {formatLastUpdated(lastUpdated)}
                    </p>
                </div>

                <Button
                    onClick={handleRefresh}
                    variant="outline"
                    size="sm"
                    disabled={isRefreshing || isLoading}
                    className="flex items-center gap-2 border-palette-1 text-palette-1 hover:bg-palette-1/10"
                >
                    <RefreshCw className={`h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
                    {isRefreshing ? "Refreshing..." : "Refresh"}
                </Button>
            </motion.div>

            {/* Dashboard Grid */}
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
                        <h2 className="text-2xl font-bold text-palette-1">Total Coding Time</h2>
                    </div>
                    <div className="my-2">
                        <p className="text-4xl md:text-5xl font-bold text-palette-1">{totalTime}</p>
                        <p className="text-sm text-palette-1/60 mt-1">This week</p>
                    </div>
                </motion.div>

                {/* Daily Average */}
                <motion.div
                    variants={cardVariants}
                    className="col-span-2 sm:col-span-2 md:col-span-4 rounded-lg p-4 bg-primary border border-palette-1 shadow-xl flex flex-col"
                >
                    <div className="flex items-center mb-2">
                        <Palette className="h-6 w-6 mr-2 text-palette-4" />
                        <h3 className="text-md lg:text-lg font-semibold text-palette-1">Daily Average</h3>
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                        <p className="text-2xl md:text-3xl font-bold text-palette-1">{dailyAverage}</p>
                        <p className="text-xs text-palette-1/60 mt-1">Per day</p>
                    </div>
                </motion.div>

                {/* Best Day */}
                <motion.div
                    variants={cardVariants}
                    className="col-span-2 sm:col-span-2 md:col-span-2 rounded-lg p-4 bg-primary border border-palette-1 shadow-xl flex flex-col"
                >
                    <div className="flex items-center mb-2">
                        <Star className="h-6 w-6 mr-2 text-palette-4" />
                        <h3 className="text-md lg:text-lg font-semibold text-palette-1">Best Day</h3>
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                        <p className="text-xl md:text-2xl font-bold text-palette-1">{bestDayText}</p>
                        {bestDayDate && (
                            <p className="text-xs text-palette-1/60 mt-1">
                                {new Date(bestDayDate).toLocaleDateString()}
                            </p>
                        )}
                    </div>
                </motion.div>

                {/* Top Languages */}
                <motion.div
                    variants={cardVariants}
                    className="col-span-2 sm:col-span-4 md:col-span-4 rounded-lg p-4 bg-primary border border-palette-1 shadow-xl flex flex-col"
                >
                    <div className="flex items-center mb-2">
                        <Braces className="h-6 w-6 mr-2 text-palette-4" />
                        <h3 className="text-md lg:text-lg font-semibold text-palette-1">Top Languages</h3>
                    </div>
                    <div className="space-y-2 flex-1">
                        {languages.slice(0, 4).map((lang, index) => (
                            <div key={index} className="flex items-center justify-between">
                                <div className="flex items-center gap-2 min-w-0 flex-1">
                                    <span className="text-sm font-medium text-palette-1 truncate">{lang.name}</span>
                                </div>
                                <div className="flex items-center gap-2 shrink-0">
                                    <div className="w-12 bg-palette-3/30 rounded-full h-2">
                                        <div
                                            className="bg-palette-4 h-2 rounded-full transition-all duration-300"
                                            style={{ width: `${lang.percent}%` }}
                                        />
                                    </div>
                                    <span className="text-xs text-palette-1/60 w-8">{lang.percent.toFixed(0)}%</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Editors */}
                <motion.div
                    variants={cardVariants}
                    className="col-span-2 sm:col-span-2 md:col-span-2 rounded-lg p-4 bg-primary border border-palette-1 shadow-xl flex flex-col"
                >
                    <div className="flex items-center mb-2">
                        <BarChart3 className="h-6 w-6 mr-2 text-palette-4" />
                        <h3 className="text-md lg:text-lg font-semibold text-palette-1">Editors</h3>
                    </div>
                    <div className="space-y-2 flex-1">
                        {editors.slice(0, 3).map((editor, index) => (
                            <div key={index} className="flex justify-between items-center">
                                <span className="text-sm text-palette-1 truncate">{editor.name}</span>
                                <span className="text-xs text-palette-4 font-medium">{editor.percent.toFixed(0)}%</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Operating Systems */}
                <motion.div
                    variants={cardVariants}
                    className="col-span-2 sm:col-span-2 md:col-span-2 rounded-lg p-4 bg-primary border border-palette-1 shadow-xl flex flex-col"
                >
                    <div className="flex items-center mb-2">
                        <Monitor className="h-6 w-6 mr-2 text-palette-4" />
                        <h3 className="text-md lg:text-lg font-semibold text-palette-1">Operating Systems</h3>
                    </div>
                    <div className="space-y-2 flex-1">
                        {operatingSystems.slice(0, 3).map((os, index) => (
                            <div key={index} className="flex justify-between items-center">
                                <span className="text-sm text-palette-1 truncate">{os.name}</span>
                                <span className="text-xs text-palette-4 font-medium">{os.percent.toFixed(0)}%</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Machines */}
                <motion.div
                    variants={cardVariants}
                    className="col-span-2 sm:col-span-2 md:col-span-2 rounded-lg p-4 bg-primary border border-palette-1 shadow-xl flex flex-col"
                >
                    <div className="flex items-center mb-2">
                        <Merge className="h-6 w-6 mr-2 text-palette-4" />
                        <h3 className="text-md lg:text-lg font-semibold text-palette-1">Machines</h3>
                    </div>
                    <div className="space-y-2 flex-1">
                        {machines.length > 0 ? machines.slice(0, 3).map((machine, index) => (
                            <div key={index} className="flex justify-between items-center">
                                <span className="text-sm text-palette-1 truncate">{machine.name}</span>
                                <span className="text-xs text-palette-4 font-medium">{machine.percent.toFixed(0)}%</span>
                            </div>
                        )) : (
                            <div className="text-center py-4">
                                <p className="text-sm text-palette-1/60">No machine data</p>
                            </div>
                        )}
                    </div>
                </motion.div>

                {/* Projects */}
                <motion.div
                    variants={cardVariants}
                    className="col-span-2 sm:col-span-4 md:col-span-4 rounded-lg p-4 bg-primary border border-palette-1 shadow-xl flex flex-col"
                >
                    <div className="flex items-center mb-2">
                        <FolderKanban className="h-6 w-6 mr-2 text-palette-4" />
                        <h3 className="text-md lg:text-lg font-semibold text-palette-1">Top Projects</h3>
                    </div>
                    <div className="space-y-2 flex-1">
                        {projects.slice(0, 4).map((project, index) => (
                            <div key={index} className="flex items-center justify-between">
                                <div className="flex items-center gap-2 min-w-0 flex-1">
                                    <span className="text-sm font-medium text-palette-1 truncate">{project.name}</span>
                                </div>
                                <div className="flex items-center gap-2 shrink-0">
                                    <div className="w-12 bg-palette-3/30 rounded-full h-2">
                                        <div
                                            className="bg-palette-4 h-2 rounded-full transition-all duration-300"
                                            style={{ width: `${project.percent}%` }}
                                        />
                                    </div>
                                    <span className="text-xs text-palette-1/60 w-8">{project.percent.toFixed(0)}%</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}
