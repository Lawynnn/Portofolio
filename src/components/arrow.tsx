"use client";
import { ChevronDown } from "lucide-react";
import React from "react";

export default function ArrowButton({ link }: { link: string }) {
    return (
        <a
            href={link}
            className="group relative flex items-center justify-center w-12 h-12 cursor-pointer"
        >
            {/* Outer ring with gradient */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-red-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

            {/* Circle with gradient border */}
            <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-zinc-900/50 backdrop-blur-sm border border-white/10 group-hover:border-red-500/50 transition-all duration-300 group-hover:bg-zinc-800/50">
                {/* Animated arrow */}
                <ChevronDown className="w-6 h-6 text-zinc-400 group-hover:text-red-400 transition-all duration-300 animate-bounce" />
            </div>

            {/* Pulse ring animation */}
            <div className="absolute inset-0 rounded-full border border-white/10 animate-ping opacity-30"></div>
        </a>
    );
}