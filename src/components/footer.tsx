"use client";
import React from "react";
import { Logo } from "./logo";
import Link from "next/link";
import { Facebook, Github, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer
            className="relative bg-zinc-950 p-4 w-full h-fit py-16 flex flex-col items-center justify-center overflow-hidden"
            data-pattern="stripes"
        >
            {/* Gradient Divider at Top */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent"></div>

            {/* Content */}
            <div className="z-[1] flex flex-col items-center">
                {/* Logo with subtle animation */}
                <div className="animate-float">
                    <Logo />
                </div>

                {/* Social Icons - matching project card theme */}
                <div className="flex flex-row items-center gap-2 mt-10 p-2 rounded-2xl bg-zinc-950 border border-red-500/20">
                    <Link
                        target="_blank"
                        className="group p-3 rounded-xl bg-red-500/5 hover:bg-red-500/15 transition-all duration-300"
                        href="https://github.com/lawynnn"
                    >
                        <Github className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors duration-300" />
                    </Link>
                    <div className="w-px h-6 bg-red-500/20"></div>
                    <Link
                        target="_blank"
                        className="group p-3 rounded-xl bg-red-500/5 hover:bg-red-500/15 transition-all duration-300"
                        href="https://www.linkedin.com/in/buta-iustinian-93846a346/"
                    >
                        <Linkedin className="w-5 h-5 text-zinc-400 group-hover:text-blue-400 transition-colors duration-300" />
                    </Link>
                    <div className="w-px h-6 bg-red-500/20"></div>
                    <Link
                        target="_blank"
                        className="group p-3 rounded-xl bg-red-500/5 hover:bg-red-500/15 transition-all duration-300"
                        href="https://www.facebook.com/IustinJK/"
                    >
                        <Facebook className="w-5 h-5 text-zinc-400 group-hover:text-blue-500 transition-colors duration-300" />
                    </Link>
                </div>

                {/* Copyright */}
                <p className="text-zinc-600 text-sm mt-8">
                    © {new Date().getFullYear()} Lawyn.xyz
                </p>
            </div>

            {/* Ambient glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-red-500/5 rounded-full blur-[80px] pointer-events-none"></div>
        </footer>
    );
}
