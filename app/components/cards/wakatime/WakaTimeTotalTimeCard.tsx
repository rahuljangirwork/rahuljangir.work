"use client";
import React from "react";

export function WakaTimeTotalTimeCard({ totalTime }: { totalTime: string }) {
    return (
        <div className="card">
            {/* <h3 className="font-bold text-lg">Total Coding Time</h3> */}
            <p className="text-2xl font-mono">{totalTime}</p>
        </div>
    );
}
