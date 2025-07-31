"use client";

import React from "react";
import { motion } from "framer-motion";
import { WakaTimeDashboard } from "./WakaTimeDashboard";

const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
};

export function WakaTimeSection() {
    return (
        <motion.section
            className="w-full py-16 md:py-24"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-palette-2 mb-4">
                        Coding Activity
                    </h2>
                    <p className="text-lg text-palette-3 max-w-2xl mx-auto">
                        Real-time insights into my development workflow, languages, and productivity metrics
                    </p>
                </motion.div>

                <WakaTimeDashboard />
            </div>
        </motion.section>
    );
}
