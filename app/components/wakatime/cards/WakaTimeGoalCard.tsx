"use client";

import React from "react";
import { ProgressBlocks } from "@/app/components/ProgressBlocks";
import { WakaTimeGoal } from "@/app/lib/validations/wakatime"; // Import your goal type

interface WakaTimeGoalCardProps {
    goal?: WakaTimeGoal;
}

export function WakaTimeGoalCard({ goal }: WakaTimeGoalCardProps) {
    if (!goal) {
        return (
            <div className="space-y-3 flex-1">
                <div className="text-center py-4">
                    <p className="text-lg font-bold text-palette-2/60">No Goal Set</p>
                    <p className="text-xs text-palette-2/60 mt-1">Set a coding goal to track progress</p>
                </div>
            </div>
        );
    }

    const todayData = goal.chart_data?.[goal.chart_data.length - 1];
    const successfulDays = goal.chart_data?.filter(day => day.range_status === 'success').length || 0;
    const totalActiveDays = goal.chart_data?.filter(day => day.range_status !== 'ignored').length || 7;

    const todayProgressPercent = todayData
        ? Math.min(100, (todayData.actual_seconds / todayData.goal_seconds) * 100)
        : 0;

    const successRate = totalActiveDays > 0 ? Math.round((successfulDays / totalActiveDays) * 100) : 0;

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'success': return 'bg-green-100 text-green-700';
            case 'pending': return 'bg-yellow-100 text-yellow-700';
            default: return 'bg-red-100 text-red-700';
        }
    };

    // const getStatusIcon = (status: string) => {
    //     if (status === "success") return "🎯";
    //     if (status === "pending") return "⏳";
    //     return "🔄";
    // };

    const formatGoalTime = () => {
        const hours = Math.floor(goal.seconds / 3600);
        const minutes = Math.floor((goal.seconds % 3600) / 60);
        if (hours > 0) {
            return `${hours}h ${minutes > 0 ? `${minutes}m` : ''}`;
        }
        return `${minutes}m`;
    };

    return (
        <div className="space-y-3 flex-1">
            {/* Goal Header */}
            <div className="flex justify-between items-start">
                <div className="flex items-center gap-2 flex-1 min-w-0">
                    {/* <span className="text-lg">{getStatusIcon(goal.average_status)}</span> */}
                    <span className="text-sm font-medium text-palette-2 truncate">
                        {goal.title}
                    </span>
                </div>
                {/* <span className={`text-xs px-2 py-1 rounded-full shrink-0 ${getStatusColor(goal.average_status)}`}>
                    {goal.average_status}
                </span> */}
            </div>

            {/* Today's Progress */}
            {todayData && (
                <div className="space-y-2">
                    <div className="flex justify-between items-center">
                        <span className="text-xs text-palette-2/60">Today&apos;s Progress</span>
                        <span className="text-xs text-palette-4 font-medium">
                            {todayData.actual_seconds_text} / {todayData.goal_seconds_text}
                        </span>
                    </div>

                    {/* Progress Blocks */}
                    <ProgressBlocks
                        total={20}
                        completed={Math.round((todayProgressPercent / 100) * 20)}
                        size="sm"
                        showFraction={false}
                        showPercentage={false}
                        completedBlockClassName="bg-palette-4 border-palette-4"
                        emptyBlockClassName="bg-palette-3/30 border-palette-3/30"
                        className="space-y-0"
                    />

                    {/* Status Message */}
                    <p className="text-xs text-palette-2/60">
                        {todayData.range_status_reason_short}
                    </p>
                </div>
            )}

            {/* Weekly Stats */}
            <div className="grid grid-cols-3 gap-3 pt-2 border-t border-palette-3/20">
                <div className="text-center">
                    <p className="text-lg font-bold text-palette-2">{successRate}%</p>
                    <p className="text-xs text-palette-2/60">Success Rate</p>
                </div>
                <div className="text-center">
                    <p className="text-lg font-bold text-palette-2">{successfulDays}/{totalActiveDays}</p>
                    <p className="text-xs text-palette-2/60">Days Completed</p>
                </div>
                <div className="text-center">
                    <p className="text-lg font-bold text-palette-2">{formatGoalTime()}</p>
                    <p className="text-xs text-palette-2/60">Daily Target</p>
                </div>
            </div>
        </div>
    );
}
