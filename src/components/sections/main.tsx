"use client";

import React, { useEffect, useState } from "react";
import ArrowButton from "../arrow";
import { useLanguage } from "@/context/languageContext";
import { motion } from "framer-motion";
import {
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiTypescript,
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiMongodb,
    SiGit,
    SiTailwindcss,
} from "react-icons/si";

// Floating background icons
const floatingIcons = [
    { Icon: SiReact, className: "top-[15%] left-[10%]", delay: 0, color: "text-cyan-500/20" },
    { Icon: SiNextdotjs, className: "top-[25%] right-[15%]", delay: 0.5, color: "text-white/15" },
    { Icon: SiNodedotjs, className: "bottom-[30%] left-[8%]", delay: 1, color: "text-green-500/15" },
    { Icon: SiTypescript, className: "top-[40%] right-[8%]", delay: 1.5, color: "text-blue-500/15" },
    { Icon: SiJavascript, className: "bottom-[20%] right-[20%]", delay: 2, color: "text-yellow-400/15" },
    { Icon: SiHtml5, className: "top-[60%] left-[15%]", delay: 2.5, color: "text-orange-500/15" },
    { Icon: SiCss3, className: "top-[10%] right-[30%]", delay: 3, color: "text-blue-400/15" },
    { Icon: SiMongodb, className: "bottom-[40%] right-[12%]", delay: 3.5, color: "text-green-400/15" },
    { Icon: SiGit, className: "bottom-[15%] left-[25%]", delay: 4, color: "text-orange-600/15" },
    { Icon: SiTailwindcss, className: "top-[70%] right-[30%]", delay: 4.5, color: "text-cyan-400/15" },
];

function TypingText({ text }: { text: string }) {
    const [displayedText, setDisplayedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    // Reset and restart typing when text changes (language switch)
    useEffect(() => {
        setDisplayedText("");
        setCurrentIndex(0);
    }, [text]);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(text.substring(0, currentIndex + 1));
                setCurrentIndex((prev) => prev + 1);
            }, 30); // Speed of typing

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, text]);

    return (
        <span>
            {displayedText}
            <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                className="inline-block w-0.5 h-5 bg-red-500 ml-1 align-middle"
            />
        </span>
    );
}

export default function MainSection() {
    const { translate } = useLanguage();
    const subtitleText = translate("subtitle");

    return (
        <div
            className="w-full h-screen relative overflow-hidden"
            id="main"
            data-pattern="dots"
            style={{ "--size": "35px 35px" } as React.CSSProperties}
        >
            {/* Floating Tech Icons Background */}
            {floatingIcons.map(({ Icon, className, delay, color }, idx) => (
                <motion.div
                    key={idx}
                    className={`absolute ${className} ${color} pointer-events-none z-[2]`}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        y: [0, -15, 0],
                    }}
                    transition={{
                        opacity: { delay, duration: 1 },
                        scale: { delay, duration: 1 },
                        y: { delay, duration: 4, repeat: Infinity, ease: "easeInOut" },
                    }}
                >
                    <Icon className="w-12 h-12 md:w-16 md:h-16" />
                </motion.div>
            ))}

            {/* Ambient Floating Orbs */}
            <div className="ambient-orb orb-1 top-1/4 -left-32 opacity-60"></div>
            <div className="ambient-orb orb-2 bottom-1/4 -right-20 opacity-50"></div>
            <div className="ambient-orb orb-3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30"></div>

            <div className="flex flex-col w-full h-full items-center justify-center bg-transparent relative z-10">
                <motion.div
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    {/* Animated Gradient Title */}
                    <h1 className="text-7xl md:text-8xl font-black text-center gradient-text-animated drop-shadow-2xl max-sm:text-5xl">
                        Lawyn's Portofolio
                    </h1>

                    {/* Glow Background Effect */}
                    <div className="absolute inset-0 blur-[120px] opacity-50 -z-10">
                        <div className="w-full h-full bg-gradient-to-r from-red-500 via-red-400 to-transparent"></div>
                    </div>

                    {/* Accent Lines */}
                    <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-48 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-60"></div>
                </motion.div>

                {/* Enhanced Subtitle with Typing Animation */}
                <motion.p
                    className="p-5 mt-8 max-w-2xl text-lg text-zinc-400 font-normal text-center max-sm:text-[1rem] mb-10 leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    <TypingText text={subtitleText} />
                </motion.p>

                {/* Animated Arrow */}
                <motion.div
                    className="animate-float"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                >
                    <ArrowButton link="#about" />
                </motion.div>
            </div>

            {/* Background Image Overlay */}
            <div className="absolute bg-[url('/assets/background_2.png')] w-full h-full bg-no-repeat bg-center opacity-80 pointer-events-none top-0 left-0 z-[1]"></div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-zinc-950 to-transparent z-[2]"></div>
        </div>
    );
}
