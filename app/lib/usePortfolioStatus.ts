"use client";

import { useEffect, useState } from "react";

import { supabase } from "./supabase";


export interface PortfolioStatusData {
    id: string;
    city: string | null;
    tags: string[] | null;
    emoji: string;
    status: string;
    country: string | null;
    message: string;
    user_id: string;
    auto_set: boolean;
    metadata: Record<string, any>;
    timezone: string | null;
    is_active: boolean;
    created_at: string; // ISO Date string
    expires_at: string | null;
    started_at: string;
    updated_at: string;
    visibility: string;
    coordinates: any | null;
    focus_level: number | null;
    energy_level: number | null;
    custom_fields: Record<string, unknown>;
    is_work_hours: boolean;
    location_name: string | null;
    location_type: string | null;
    show_activity: boolean;
    show_location: boolean;
    status_category: string;
    auto_set_trigger: string | null;
    is_available_for_calls: boolean;
    synchronized_platforms: string[] | null;
    is_available_for_meetings: boolean;
    estimated_duration_minutes: number | null;
}

export function usePortfolioStatus() {
    const [statusData, setStatusData] = useState<PortfolioStatusData | null>(null);

    useEffect(() => {
        async function fetchStatus() {
            try {
                const res = await fetch("/api/portfolio", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ flag: "status" }),
                });

                if (!res.ok) {
                    console.error("Failed to fetch portfolio status:", await res.text());
                    return;
                }

                const json = await res.json();
                if (Array.isArray(json.data) && json.data.length > 0) {
                    setStatusData(json.data[0]);
                } else if (json.data) {
                    setStatusData(json.data);
                }
            } catch (error) {
                console.error("Error fetching portfolio status:", error);
            }
        }

        fetchStatus();

        // Set up subscription for real-time updates
        // You still keep your supabase subscription that listens on updates, for example:

     
        const channel = supabase
            .channel("public:portfolio_status_updates")
            .on(
                "postgres_changes",
                {
                    event: "UPDATE",
                    schema: "public",
                    table: "portfolio_status",
                    filter: "id=eq.1",
                },
                () => {
                    fetchStatus();
                }
            )
            .subscribe();

        return () => {
            supabase.removeChannel(channel);
        };
    }, []);

    return statusData;
}
