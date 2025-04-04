"use client";

import clsx from "clsx";
import Link from "next/link";
import React from "react";

export function Logo({ className, ...props}: React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>) {
    return (
        <Link href="/" className={clsx("flex flex-row items-center justify-center px-8 py-2 rounded-xl border border-zinc-500 border-dashed transition-colors duration-150", 
        "hover:bg-zinc-800 text-xl bg-[rgba(255,255,255,.01)] backdrop-blur-[3px]",
        className)}>
            <img src="/assets/logo.png" alt="Logo" className="w-full h-full max-w-10 max-h-10 mr-2" />
            <span className="text-white/95 font-bold">Lawyn.xyz</span>
        </Link>
    )
}