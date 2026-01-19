"use client";

import { useLanguage } from "@/context/languageContext";
import { Facebook, Mail, Sparkles } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function ContactSection() {
    const { translate } = useLanguage();
    return (
        <div
            className="w-full min-h-[calc(100vh/2)] relative mt-10 flex flex-col gap-6 items-center justify-center overflow-hidden"
            id="contact"
            data-pattern="dots"
        >
            {/* Ambient Orbs */}
            <div className="ambient-orb orb-2 top-0 left-1/4 opacity-30"></div>
            <div className="ambient-orb orb-1 bottom-0 right-1/4 opacity-20"></div>

            {/* Gradient divider at top */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>

            {/* Section Title with Gradient */}
            <h1 className="text-6xl md:text-7xl uppercase font-black text-center max-sm:text-4xl section-title">
                {translate("contact_me")}
            </h1>

            <p className="text-zinc-400 text-center max-w-md mb-4">
                {translate("contact_subtitle")}
            </p>

            {/* Primary CTA Button */}
            <Link
                href="mailto:iustinftw@gmail.com"
                className="btn-primary group py-4 px-8 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full inline-flex items-center gap-3 font-semibold text-lg shadow-lg shadow-red-500/25 hover:shadow-red-500/40 hover:from-red-400 hover:to-red-500 transition-all duration-300"
            >
                <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                {translate("contact_email")}
                <Sparkles className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>

            {/* Secondary Button */}
            <Link
                target="_blank"
                href="https://www.facebook.com/IustinJK/"
                className="group py-3 px-6 glass text-white rounded-full inline-flex items-center gap-3 transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:translate-y-[-2px]"
            >
                <Facebook className="w-5 h-5 group-hover:text-blue-400 transition-colors duration-300" />
                {translate("contact_facebook")}
            </Link>
        </div>
    );
}
