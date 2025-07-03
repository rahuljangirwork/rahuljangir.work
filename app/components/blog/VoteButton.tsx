"use client";
import { useState } from "react";
import { usePostMetrics } from "@/app/lib/usePostMetrics";

export const VoteButton = ({ slug }: { slug: string }) => {
    const { votes, upvote } = usePostMetrics(slug);
    const [loading, setLoading] = useState(false);

    const handle = async () => {
        setLoading(true);
        await upvote();
        setLoading(false);
    };

    return (
        <button
            onClick={handle}
            disabled={loading}
            className="flex items-center gap-2 px-4 py-2 text-white bg-blue-600 rounded-md disabled:bg-gray-400"
        >
            👍 {votes} {loading && "…"}
        </button>
    );
};
