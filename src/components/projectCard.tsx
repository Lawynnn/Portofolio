"use client";
import React, { useState } from "react";
import clsx from "clsx";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, Globe, Sparkles, X } from "lucide-react";
import { useLanguage } from "@/context/languageContext";
import { motion, AnimatePresence } from "framer-motion";
import {
    SiNextdotjs,
    SiNodedotjs,
    SiMongodb,
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiElectron,
    SiDiscord,
} from "react-icons/si";

export type Langs = string;

// Language icon mapping with colors
const langIcons: Record<string, { icon: React.ReactNode; color: string }> = {
    nextjs: { icon: <SiNextdotjs className="w-4 h-4" />, color: "text-white" },
    nodejs: { icon: <SiNodedotjs className="w-4 h-4" />, color: "text-green-500" },
    mongodb: { icon: <SiMongodb className="w-4 h-4" />, color: "text-green-400" },
    html: { icon: <SiHtml5 className="w-4 h-4" />, color: "text-orange-500" },
    css: { icon: <SiCss3 className="w-4 h-4" />, color: "text-blue-500" },
    js: { icon: <SiJavascript className="w-4 h-4" />, color: "text-yellow-400" },
    electronjs: { icon: <SiElectron className="w-4 h-4" />, color: "text-cyan-400" },
    "discord.js": { icon: <SiDiscord className="w-4 h-4" />, color: "text-indigo-400" },
};

// Get icon for URL
function getUrlIcon(url: string) {
    if (url.includes("github")) {
        return <Github className="w-12 h-12 text-white" />;
    }
    return <Globe className="w-12 h-12 text-white" />;
}

// Get site name from URL
function getSiteName(url: string) {
    if (url.includes("github")) return "GitHub";
    if (url.includes("facebook")) return "Facebook";
    if (url.includes("linkedin")) return "LinkedIn";
    try {
        return new URL(url).hostname.replace("www.", "");
    } catch {
        return "External Site";
    }
}

// Confirmation Modal Component
function ConfirmModal({
    isOpen,
    onClose,
    onConfirm,
    link,
}: {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    link: string;
}) {
    const { translate } = useLanguage();

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-md"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="relative bg-zinc-950 border border-red-500/20 rounded-3xl p-8 max-w-sm w-full mx-4 shadow-2xl shadow-red-500/10"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Icon */}
                        <div className="flex justify-center mb-6">
                            <div className="p-4 rounded-2xl bg-gradient-to-br from-red-500/20 to-transparent">
                                {getUrlIcon(link)}
                            </div>
                        </div>

                        {/* Content */}
                        <h2 className="text-xl font-bold text-white text-center mb-2">
                            {translate("redirect_title")}
                        </h2>
                        <p className="text-zinc-400 text-center mb-6">
                            {translate("redirect_message")} <span className="text-red-400 font-semibold">{getSiteName(link)}</span>
                        </p>

                        {/* Buttons */}
                        <div className="flex gap-3">
                            <button
                                onClick={onClose}
                                className="flex-1 py-3 px-4 rounded-xl bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white transition-all duration-200 font-medium"
                            >
                                {translate("redirect_cancel")}
                            </button>
                            <button
                                onClick={onConfirm}
                                className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-red-600 to-red-500 text-white hover:from-red-500 hover:to-red-400 transition-all duration-200 font-medium shadow-lg shadow-red-500/25"
                            >
                                {translate("redirect_confirm")}
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default function ProjectCard({
    className,
    title,
    languages,
    description = null,
    image = "",
    link = "",
    idx,
    isSpecial = false,
    ...props
}: {
    className?: string;
    title: string;
    image?: string;
    languages: Langs[];
    link?: string | null;
    description?: string | null;
    idx: number;
    isSpecial?: boolean;
} & React.ComponentPropsWithoutRef<"div">) {
    const [ref, inView] = useInView({
        threshold: 0.15,
        triggerOnce: true,
    });
    const [showConfirm, setShowConfirm] = useState(false);
    const { translate } = useLanguage();

    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (link) {
            if (link.startsWith("/")) {
                window.location.href = link;
            } else {
                setShowConfirm(true);
            }
        }
    };

    const handleConfirm = () => {
        if (link) {
            window.open(link, "_blank");
        }
        setShowConfirm(false);
    };

    // WOW animation variants
    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 60,
            scale: 0.9,
            rotateX: 15,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            transition: {
                type: "spring" as const,
                stiffness: 100,
                damping: 15,
                delay: idx * 0.1,
            },
        },
    };

    const iconVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: (i: number) => ({
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring" as const,
                stiffness: 200,
                damping: 10,
                delay: idx * 0.1 + 0.3 + i * 0.05,
            },
        }),
    };

    return (
        <>
            <motion.div
                ref={ref}
                variants={cardVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                whileHover={{
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.2 }
                }}
                onClick={handleClick}
                className={clsx(
                    "group relative flex flex-col items-center justify-center",
                    "cursor-pointer overflow-hidden",
                    "rounded-2xl",
                    "bg-zinc-900/90",
                    "border border-zinc-700/50 hover:border-red-500/50",
                    "shadow-lg shadow-black/30",
                    "hover:shadow-2xl hover:shadow-red-500/20",
                    className
                )}
                style={{ perspective: "1000px" }}
            >
                {/* Subtle gradient background with red tint */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-950/30 via-zinc-900 to-zinc-900 opacity-100"></div>

                {/* Top accent line - always slightly visible */}
                <motion.div
                    className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={inView ? { scaleX: 1, opacity: 0.7 } : {}}
                    transition={{ delay: idx * 0.1 + 0.2, duration: 0.5 }}
                />

                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-red-500/0 group-hover:from-red-500/5 group-hover:to-transparent transition-all duration-500"></div>

                {/* Special badge for internal pages */}
                {isSpecial && (
                    <motion.div
                        className="absolute top-3 right-3 z-10"
                        initial={{ opacity: 0, x: 20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: idx * 0.1 + 0.4 }}
                    >
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-800/80 border border-zinc-700/50">
                            <Sparkles className="w-3 h-3 text-amber-400" />
                            <span className="text-[.6rem] font-medium text-zinc-300 uppercase tracking-wide">
                                {translate("special_page") || "Try it here"}
                            </span>
                        </div>
                    </motion.div>
                )}

                {/* Content */}
                <div className="p-8 flex flex-col items-center justify-center w-full h-full gap-4 z-[1]">
                    {/* Title */}
                    <motion.div
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: idx * 0.1 + 0.15 }}
                    >
                        <h1 className="text-white font-semibold text-xl md:text-2xl tracking-tight group-hover:text-red-400 transition-colors duration-300">
                            {title}
                        </h1>
                        {link && !isSpecial && (
                            <ExternalLink className="w-4 h-4 text-zinc-600 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:text-red-400" />
                        )}
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        className="text-zinc-500 text-sm text-center leading-relaxed group-hover:text-zinc-400 transition-colors duration-300 max-w-[280px]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: idx * 0.1 + 0.2 }}
                    >
                        {description}
                    </motion.p>

                    {/* Tech Icons - Icon focused, minimal text */}
                    <div className="flex flex-row items-center justify-center gap-3 mt-2">
                        {languages.map((lang, i) => {
                            const langData = langIcons[lang.toLowerCase()];
                            if (langData) {
                                return (
                                    <motion.div
                                        key={lang}
                                        custom={i}
                                        variants={iconVariants}
                                        initial="hidden"
                                        animate={inView ? "visible" : "hidden"}
                                        className="group/icon relative"
                                        title={lang.toUpperCase()}
                                    >
                                        <div className={`p-2 rounded-lg bg-zinc-800/50 border border-zinc-700/50 hover:border-zinc-600 hover:bg-zinc-800 transition-all duration-200 ${langData.color}`}>
                                            {langData.icon}
                                        </div>
                                    </motion.div>
                                );
                            }
                            return (
                                <motion.span
                                    key={lang}
                                    custom={i}
                                    variants={iconVariants}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    className="text-zinc-500 text-[.55rem] font-medium bg-zinc-800/50 border border-zinc-700/50 rounded-lg px-2 py-1.5 uppercase tracking-wider"
                                >
                                    {lang}
                                </motion.span>
                            );
                        })}
                    </div>
                </div>
            </motion.div>

            {/* Confirmation Modal - only for external links */}
            {!isSpecial && (
                <ConfirmModal
                    isOpen={showConfirm}
                    onClose={() => setShowConfirm(false)}
                    onConfirm={handleConfirm}
                    link={link || ""}
                />
            )}
        </>
    );
}
