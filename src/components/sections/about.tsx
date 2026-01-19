"use client";

import React from "react";
import ArrowButton from "../arrow";
import Cards from "../cards";
import { useLanguage } from "@/context/languageContext";

const cardsData = [
    ["about_card_1", "about_card_1_desc"],
    ["about_card_2", "about_card_2_desc"],
    ["about_card_3", "about_card_3_desc"],
    ["about_card_4", "about_card_4_desc"],
] as [string, string][];

export default function AboutSection() {
    const { translate } = useLanguage();
    return (
        <div
            className="w-full min-h-[calc(100vh/2)] relative gap-10 flex flex-col items-center justify-center bg-zinc-950 py-16 overflow-hidden"
            data-pattern="grid"
            id="about"
            style={{
                "--size": "30px 30px",
            } as React.CSSProperties}
        >
            {/* Gradient Divider at Top */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-600/50 to-transparent"></div>

            {/* Section Title */}
            <h1 className="text-6xl md:text-7xl font-black uppercase text-center max-sm:text-4xl section-title">
                {translate("about_me")}
            </h1>

            <div className="flex flex-col items-center justify-center relative z-10">
                <Cards cardsData={cardsData} />
            </div>

            {/* Ambient glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-red-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        </div>
    );
}
