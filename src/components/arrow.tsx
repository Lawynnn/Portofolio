"use client";
import { ArrowDown } from "lucide-react";
import React from "react";

export default function ArrowButton({ link }: { link: string }) {
    return (
        <a href={link} className="p-3 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors duration-150 border border-zinc-500 border-dashed">
            <ArrowDown />
        </a>
    );
}