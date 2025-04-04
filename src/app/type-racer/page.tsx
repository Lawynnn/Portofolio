"use client";

import { useImagePreview } from "@/context/imagePreviewContext";
import { Github } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";
// export const metadata: Metadata = {
//     title: "Type Racer - Lawyn.xyz",
//     icons: {
//         icon: "/assets/logo.png",
//         shortcut: "/assets/logo.png",
//     }
// };
export default function TypeRacer() {
    const prev = useImagePreview();
    return (
        <div className="w-full h-full flex flex-col items-center p-10 gap-10">
            <div className="flex flex-col max-w-5xl max-sm:w-full gap-2">
                <h1 className="text-6xl font-black uppercase">Type Racer</h1>
                <span className="max-w-5xl text-white/70">
                    Type Racer is a multiplayer game where you can play with
                    friends using a lobby system. A player creates a room and
                    then shares the code with friends to join. The game offers
                    multiple difficulty levels, determined by the number and
                    length of words. Each player's WPM (words per minute) and
                    current cursor position are displayed in real-time. A room
                    can host up to 12 players simultaneously. You also have the
                    option to set a custom phrase, adjust the maximum time
                    limit, enable a "first to finish" win condition, and
                    generate random, unrelated words for an extra challenge.
                </span>
            </div>

            <Link
                className="flex flex-row gap-3 px-4 py-4 rounded-2xl bg-white/10 border border-white/10 transition-colors duration-150 hover:bg-white/20 hover:border-white/20"
                href="#type-racer"
            >
                <Github /> Check the project on Github
            </Link>

            <div className="w-full h-full flex flex-row flex-wrap items-center justify-center gap-5">
                {Array.from({ length: 4 })
                    .fill(0)
                    .map((_, idx) => {
                        return (
                            <img
                                key={idx}
                                src={`/assets/type-racer/type-racer_${
                                    idx + 1
                                }.png`}
                                onClick={(e) => {
                                    prev.displayImage(e.currentTarget.src);
                                }}
                                className="rounded-3xl object-cover w-md h-[28rem] border-2 border-dashed border-white/50 cursor-pointer transition-all duration-150 hover:scale-105
                                hover:border-white/50"
                            />
                        );
                    })}
            </div>
        </div>
    );
}
