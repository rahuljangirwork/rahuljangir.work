"use client";
import { useEffect, useState } from "react";
import { supabase } from "./supabase";

export function usePostMetrics(slug: string) {
    const [views, setViews] = useState<number>(0);
    const [votes, setVotes] = useState<number>(0);

    // fetch counts
    useEffect(() => {
        async function getCounts() {
            // GET
            const { data } = await supabase.rpc("sp_blog_post", {
                p_action: "GET",
                p_slug: slug,
            });
            if (data?.views !== undefined) setViews(data.views);
            if (data?.votes !== undefined) setVotes(data.votes);
        }
        getCounts();
    }, [slug]);

    // up-vote helper
    const upvote = async () => {
        await supabase.rpc("sp_blog_post", { p_action: "UPVOTE", p_slug: slug });
        setVotes((v) => v + 1);
    };

    return { views, votes, upvote };
}
