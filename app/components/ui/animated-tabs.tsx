"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface Tab {
    id: string;
    label: string;
}

interface AnimatedTabsProps {
    tabs: Tab[];
    defaultTab?: string;
    onChange?: (tabId: string) => void;
}

export function AnimatedTabs({
    tabs,
    defaultTab,
    onChange
}: AnimatedTabsProps) {
    const [activeTab, setActiveTab] = useState(defaultTab || tabs[0].id);

    const handleTabChange = (tabId: string) => {
        setActiveTab(tabId);
        onChange?.(tabId);
    };

    return (
        <div className="flex space-x-1">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`
                        relative rounded-full px-3 py-1.5 text-sm font-medium
                        text-palette-2 transition duration-200
                        ${activeTab === tab.id ? "" : "hover:text-palette-4"}
                    `}
                    style={{
                        WebkitTapHighlightColor: "transparent",
                    }}
                >
                    {activeTab === tab.id && (
                        <motion.span
                            layoutId="bubble"
                            className="absolute inset-0 z-10 bg-palette-4 mix-blend-normal"
                            style={{ borderRadius: "9999px" }}
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                    )}
                    <span className="relative z-10">{tab.label}</span>
                </button>
            ))}
        </div>
    );
}
