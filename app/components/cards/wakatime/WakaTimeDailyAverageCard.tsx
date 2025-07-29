"use client";
import React from "react";

export function WakaTimeDailyAverageCard({ average }: { average: string }) {
    return (
        <div className="card">
            <h3 className="font-bold text-lg">Daily Average</h3>
            <p className="text-xl">{average}</p>
        </div>
    );
}
