"use client";

import React from "react";
import { cn } from "../lib/utils";

interface ProgressBlocksProps {
    total: number;
    completed: number;
    className?: string;
    blockClassName?: string;
    completedBlockClassName?: string;
    emptyBlockClassName?: string;
    size?: 'sm' | 'md' | 'lg';
    showPercentage?: boolean;
    showFraction?: boolean;
    label?: string;
    percentageLabel?: string;
}

const sizeConfig = {
    sm: 'w-2 h-3',
    md: 'w-3 h-4',
    lg: 'w-4 h-5'
};

export function ProgressBlocks({
    total,
    completed,
    className,
    blockClassName,
    completedBlockClassName,
    emptyBlockClassName,
    size = 'md',
    showPercentage = true,
    showFraction = true,
    label,
    percentageLabel = "completed"
}: ProgressBlocksProps) {
    const percentage = Math.round((completed / total) * 100);

    return (
        <div className={cn("space-y-2.5", className)}>
            {/* Progress Bar */}
            <div className="flex grow gap-1">
                {[...Array(total)].map((_, i) => (
                    <span
                        key={i}
                        className={cn(
                            `inline-block rounded-sm border transition-colors`,
                            sizeConfig[size],
                            blockClassName,
                            i < completed
                                ? cn('bg-primary border-primary', completedBlockClassName)
                                : cn('bg-muted border-muted', emptyBlockClassName)
                        )}
                    />
                ))}
            </div>

            {/* Stats */}
            {(showFraction || showPercentage) && (
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                    {showFraction && (
                        <span>{completed}/{total} {label || 'items'}</span>
                    )}
                    {showPercentage && (
                        <span className="font-semibold text-foreground">
                            {percentage}% {percentageLabel}
                        </span>
                    )}
                </div>
            )}
        </div>
    );
}
