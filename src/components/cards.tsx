"use client";
import { useLanguage } from "@/context/languageContext";
import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Code2, BookOpen, Layout, Briefcase } from "lucide-react";

const cardIcons = [
    <Code2 key="code" className="w-5 h-5" />,
    <BookOpen key="book" className="w-5 h-5" />,
    <Layout key="layout" className="w-5 h-5" />,
    <Briefcase key="briefcase" className="w-5 h-5" />,
];

export default function Cards({ cardsData }: { cardsData: [string, string][] }) {
    const { translate } = useLanguage();

    return (
        <div className="flex flex-row flex-wrap justify-center items-stretch gap-5 p-5">
            {cardsData.map((card, idx) => {
                const [ref, inView] = useInView({
                    threshold: 0.2,
                    triggerOnce: true,
                });

                return (
                    <motion.div
                        key={idx}
                        ref={ref}
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                        transition={{
                            duration: 0.5,
                            delay: idx * 0.1,
                            ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                        whileHover={{
                            y: -5,
                            transition: { duration: 0.2 }
                        }}
                        className="group relative flex flex-col w-fit z-[1] rounded-2xl p-6 max-w-[280px]
                            bg-zinc-900/80 border border-zinc-700/60
                            hover:border-red-500/50 hover:shadow-xl hover:shadow-red-500/15
                            transition-colors duration-300
                            cursor-default overflow-hidden
                            shadow-lg shadow-black/20
                        "
                    >
                        {/* Gradient background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/50 via-zinc-900 to-zinc-900 opacity-100 rounded-2xl"></div>

                        {/* Top accent line */}
                        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-300"></div>

                        {/* Icon with glow */}
                        <div className="relative z-10 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 group-hover:bg-red-500/20 group-hover:border-red-500/30 transition-all duration-300">
                                {cardIcons[idx]}
                            </div>
                        </div>

                        {/* Title */}
                        <h1 className="relative z-10 text-white text-lg font-semibold mb-2 group-hover:text-red-400 transition-colors duration-300">
                            {translate(card[0])}
                        </h1>

                        {/* Description */}
                        <p className="relative z-10 text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-400 transition-colors duration-300">
                            {translate(card[1])}
                        </p>

                        {/* Corner accent */}
                        <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-red-500/5 rounded-full blur-2xl group-hover:bg-red-500/10 transition-all duration-300"></div>
                    </motion.div>
                );
            })}
        </div>
    );
}
