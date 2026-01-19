"use client";

import React, { useEffect, useState, useCallback } from "react";
import { Mail } from "lucide-react";
import { useLanguage } from "@/context/languageContext";
import { motion } from "framer-motion";
import Link from "next/link";

// Section definitions
const sections = [
    { id: "about", translationKey: "nav_about" },
    { id: "projects", translationKey: "nav_projects" },
    { id: "contact", translationKey: "nav_contact" },
];

export default function Navbar() {
    const { getLanguage, setLanguage, translate } = useLanguage();
    const [activeSection, setActiveSection] = useState(-1);
    const [progressBetween, setProgressBetween] = useState<number[]>([0, 0]);
    const [showNav, setShowNav] = useState(false);

    const calculateProgress = useCallback(() => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const docHeight = document.documentElement.scrollHeight;

        // Show nav after scrolling past hero
        setShowNav(scrollY > windowHeight * 0.5);

        // Get all section positions
        const sectionData = sections.map(s => {
            const el = document.getElementById(s.id);
            if (!el) return null;
            const rect = el.getBoundingClientRect();
            return {
                id: s.id,
                top: rect.top + scrollY,
                bottom: rect.top + scrollY + rect.height,
                height: rect.height
            };
        }).filter(Boolean) as { id: string; top: number; bottom: number; height: number }[];

        if (sectionData.length === 0) return;

        const viewportCenter = scrollY + windowHeight * 0.5;

        // Find active section based on which section the viewport center is in
        let active = -1;
        for (let i = 0; i < sectionData.length; i++) {
            if (viewportCenter >= sectionData[i].top && viewportCenter < sectionData[i].bottom) {
                active = i;
                break;
            }
        }

        // If at the very bottom, consider contact active
        if (scrollY + windowHeight >= docHeight - 50) {
            active = sectionData.length - 1;
        }

        setActiveSection(active);

        // Calculate progress between sections based on active section
        const newProgress = [0, 0];

        if (active >= 0) {
            // Fill all previous lines completely
            for (let i = 0; i < active; i++) {
                newProgress[i] = 100;
            }

            // Calculate current section progress
            if (active < sectionData.length - 1) {
                const currentSection = sectionData[active];
                const nextSection = sectionData[active + 1];

                // Progress starts when we're 40% into current section
                // Progress ends when we reach the start of next section
                const progressStart = currentSection.top + currentSection.height * 0.4;
                const progressEnd = nextSection.top;

                if (viewportCenter <= progressStart) {
                    newProgress[active] = 0;
                } else if (viewportCenter >= progressEnd) {
                    newProgress[active] = 100;
                } else {
                    const progress = ((viewportCenter - progressStart) / (progressEnd - progressStart)) * 100;
                    newProgress[active] = Math.min(Math.max(progress, 0), 100);
                }
            }
        }

        setProgressBetween(newProgress);
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", calculateProgress);
        calculateProgress();
        return () => window.removeEventListener("scroll", calculateProgress);
    }, [calculateProgress]);

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            {/* Floating Logo - Top Left */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="fixed top-4 left-4 md:top-6 md:left-6 z-[60]"
            >
                <Link href="/#" className="flex items-center gap-2 group">
                    <img
                        src="/assets/logo.png"
                        alt="Logo"
                        className="w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                </Link>
            </motion.div>

            {/* Right Side Controls - Always visible */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="fixed top-4 right-8 md:top-6 md:right-6 z-[60] flex items-center gap-2"
            >
                {/* Language Toggle - Cycles through EN, RO, IT, DE */}
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

                {/* Contact Button - Prominent */}
                <Link
                    href="#contact"
                    className="px-4 py-2 rounded-full bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 text-red-400 hover:text-red-300 transition-all duration-300 flex items-center gap-2 font-medium text-sm"
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("contact");
                    }}
                >
                    <Mail className="w-4 h-4" />
                    <span className="max-sm:hidden">Contact</span>
                </Link>
            </motion.div>

            {/* Progress Line Navigation - Shows after scroll, hidden on mobile */}
            <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{
                    opacity: showNav ? 1 : 0,
                    y: showNav ? 0 : -20,
                    pointerEvents: showNav ? "auto" : "none"
                }}
                transition={{ duration: 0.3 }}
                className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-[55] hidden sm:block"
            >
                <div className="flex items-center gap-0 bg-zinc-950/90 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-zinc-800/50">
                    {sections.map((section, idx) => (
                        <React.Fragment key={section.id}>
                            {/* Section Target */}
                            <button
                                onClick={() => scrollToSection(section.id)}
                                className={`relative px-3 py-1 text-sm font-medium transition-all duration-300 cursor-pointer rounded-full
                                    ${activeSection === idx
                                        ? "text-red-400 bg-red-500/10"
                                        : "text-zinc-500 hover:text-zinc-300"
                                    }
                                `}
                            >
                                {translate(section.translationKey)}
                            </button>

                            {/* Progress Line Between Sections */}
                            {idx < sections.length - 1 && (
                                <div className="relative w-8 h-0.5 bg-zinc-700/50 mx-2 rounded-full overflow-hidden">
                                    {/* Filled Progress */}
                                    <div
                                        className="absolute top-0 left-0 h-full bg-red-500 rounded-full transition-all duration-200 ease-out"
                                        style={{
                                            width: `${progressBetween[idx]}%`
                                        }}
                                    />
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </motion.nav>
        </>
    );
}
