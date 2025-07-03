"use client";
import { usePostMetrics } from "@/app/lib/usePostMetrics";

export const ViewCount = ({ slug }: { slug: string }) => {
    const { views } = usePostMetrics(slug);
    return (
        <span className="text-sm text-gray-500">
            👁 {views} {views === 1 ? "view" : "views"}
        </span>
    );
};
