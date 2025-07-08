// app/lib/usePortfolioStatus.ts
"use client";

import { useEffect, useState } from "react";
import { supabase } from "./supabase";

export type UserStatus = "online" | "idle" | "dnd" | "invisible";

export function usePortfolioStatus() {
    const [status, setStatus] = useState<UserStatus>("invisible");

    useEffect(() => {
        /* 1 initial read (SSR/ISR friendly) */
        supabase
            .from("portfolio_status")
            .select("status")
            .eq("id", 1)
            .single()
            .then(({ data }) =>
                setStatus((data?.status ?? "invisible") as UserStatus)
            );

        /* 2 subscribe for changes (Row-change feed) */
        const ch = supabase
            .channel("public:portfolio_status")
            .on(
                "postgres_changes",
                {
                    event: "UPDATE",
                    schema: "public",
                    table: "portfolio_status",
                    filter: "id=eq.1",
                },
                (payload) => setStatus(payload.new.status as UserStatus)
            )
            .subscribe();

        return () => {
            supabase.removeChannel(ch);
        };
    }, []);

    return status;
}
