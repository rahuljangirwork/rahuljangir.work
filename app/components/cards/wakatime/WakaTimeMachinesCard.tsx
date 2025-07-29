"use client";
import React from "react";

type Machine = { name: string; percent: number; text: string; };

export function WakaTimeMachinesCard({ machines }: { machines: Machine[] }) {
    return (
        <div className="card">
            <h3 className="font-bold text-lg">Machines</h3>
            <ul className="space-y-1 mt-2">
                {machines.slice(0, 5).map(machine => (
                    <li key={machine.name} className="flex justify-between items-center">
                        <span>{machine.name}</span>
                        <span className="text-xs text-muted-foreground">{machine.text} ({machine.percent}%)</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
