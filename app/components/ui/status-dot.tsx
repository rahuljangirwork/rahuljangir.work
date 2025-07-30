// src/components/ui/status-dot.tsx (or your path)

import { cn } from "@/app/lib/utils";
import {
    Check,
    Clock,
    Minus,
    EyeOff,
    MapPin,
    Zap,
    Power,
} from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "./tooltip";

export type UserStatus = string; // Accept any string status dynamically

const palette: Record<string, string> = {
    online: "bg-emerald-500",
    idle: "bg-amber-400",
    dnd: "bg-rose-500",
    invisible: "bg-zinc-400",
    travel: "bg-blue-500",
    busy: "bg-purple-500",
    offline: "bg-gray-500",

    // Default fallback color for unknown statuses
    fallback: "bg-zinc-400",
};

const Icon: Record<string, React.ElementType> = {
    online: Check,
    idle: Clock,
    dnd: Minus,
    invisible: EyeOff,
    travel: MapPin,
    busy: Zap,
    offline: Power,

    // Default fallback icon for unknown statuses
    fallback: Minus,
};

interface StatusDotProps extends React.HTMLAttributes<HTMLSpanElement> {
    status: UserStatus;
    withPulse?: boolean;
}

export function StatusDot({
    status,
    withPulse = true,
    className,
    ...props
}: StatusDotProps) {
    // Use fallback color/icon if status is unknown
    const colorClass = palette[status] ?? palette.fallback;
    const IconComp = Icon[status] ?? Icon.fallback;

    return (
        <TooltipProvider delayDuration={150}>
            <Tooltip>
                <TooltipTrigger asChild>
                    <span
                        role="status"
                        aria-label={status}
                        {...props}
                        className={cn(
                            "absolute bottom-2 right-2 z-30 flex h-5 w-5 items-center justify-center rounded-full border-2 border-background/80 shadow",
                            colorClass,
                            className
                        )}
                    >
                        {status === "online" && withPulse && (
                            <span
                                className={cn(
                                    "absolute inset-0 -z-10 rounded-full animate-ping",
                                    `${colorClass}/70`
                                )}
                            />
                        )}

                        <IconComp className="h-3 w-3 text-background" />
                    </span>
                </TooltipTrigger>

                <TooltipContent side="top" className="select-none text-xs capitalize">
                    {status}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
