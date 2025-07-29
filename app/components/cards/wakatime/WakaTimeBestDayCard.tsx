"use client";
import React from "react";

export function WakaTimeBestDayCard({
    date, value
}: { date: string; value: string }) {
    return (
        <div className="card">
            {/* <h3 className="font-bold text-lg">Best Day</h3> */}
            <p className="text-lg">{value}</p>
            <span className="text-xs text-muted-foreground">{date}</span>
        </div>
    );
}
