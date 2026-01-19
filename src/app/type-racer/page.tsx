"use client";

import { useImagePreview } from "@/context/imagePreviewContext";
import { useLanguage } from "@/context/languageContext";
import { Github, ArrowLeft, Users, Gauge, Timer, Keyboard, Sparkles } from "lucide-react";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const features = [
    { key: "tr_feature_1", icon: Gauge },
    { key: "tr_feature_2", icon: Sparkles },
    { key: "tr_feature_3", icon: Users },
    { key: "tr_feature_4", icon: Timer },
];

export default function TypeRacer() {
    const prev = useImagePreview();
    const { translate, getLanguage, setLanguage } = useLanguage();

    return (
        <div className="min-h-screen w-full bg-zinc-950 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-950/20 via-zinc-950 to-zinc-950"></div>

            {/* Floating ambient orbs */}
            <div className="absolute top-1/4 -left-32 w-64 h-64 bg-red-500/10 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px]"></div>

            {/* Top Navigation */}
            <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6"
            >
                {/* Back Button */}
                <Link
                    href="/#projects"
                    className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span className="text-sm font-medium">{translate("tr_back")}</span>
                </Link>

                {/* Language Toggle */}
                <button
                    className="flex items-center justify-center w-8 h-8 rounded-lg bg-zinc-900/50 hover:bg-zinc-800/50 border border-zinc-700/50 transition-all duration-300 cursor-pointer text-xs font-medium text-zinc-400 hover:text-white"
                    onClick={() => {
                        const lang = getLanguage();
                        const langs = ["en", "ro", "it", "de"];
                        const idx = langs.indexOf(lang);
                        const next = langs[(idx + 1) % langs.length];
                        setLanguage(next);
                    }}
                >
                    {getLanguage().toUpperCase()}
                </button>
            </motion.nav>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center pt-24 pb-16 px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-center mb-12 max-w-3xl"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Keyboard className="w-10 h-10 text-red-500" />
                        <h1 className="text-5xl md:text-6xl font-black text-white">
                            {translate("tr_title")}
                        </h1>
                    </div>
                    <p className="text-zinc-400 text-lg leading-relaxed">
                        {translate("tr_description")}
                    </p>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl w-full"
                >
                    {features.map((feature, idx) => (
                        <motion.div
                            key={feature.key}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 + idx * 0.1 }}
                            className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-zinc-900/60 border border-zinc-700/50 hover:border-red-500/30 transition-all duration-300"
                        >
                            <feature.icon className="w-6 h-6 text-red-400" />
                            <span className="text-zinc-400 text-xs text-center leading-tight">
                                {translate(feature.key)}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>

                {/* GitHub Button */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <Link
                        className="flex items-center gap-3 px-6 py-3 rounded-full bg-red-500/20 border border-red-500/30 text-red-400 hover:bg-red-500/30 hover:text-red-300 transition-all duration-300 font-medium"
                        href="https://github.com/Lawynnn/TypeRacerRebuild_Backend"
                        target="_blank"
                    >
                        <Github className="w-5 h-5" />
                        {translate("tr_github")}
                    </Link>
                </motion.div>

                {/* Gallery Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-16 w-full max-w-6xl"
                >
                    <h2 className="text-2xl font-bold text-white/20 uppercase tracking-widest text-center mb-8">
                        {translate("tr_gallery")}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {Array.from({ length: 4 }).map((_, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 + idx * 0.1 }}
                                className="group relative overflow-hidden rounded-2xl bg-zinc-900/50 border border-zinc-700/50 hover:border-red-500/30 transition-all duration-300"
                            >
                                <img
                                    src={`/assets/type-racer/type-racer_${idx + 1}.png`}
                                    alt={`Type Racer Screenshot ${idx + 1}`}
                                    onClick={(e) => {
                                        prev.displayImage(e.currentTarget.src);
                                    }}
                                    className="w-full h-64 object-cover cursor-pointer transition-all duration-500 group-hover:scale-105"
                                />
                                {/* Hover gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
