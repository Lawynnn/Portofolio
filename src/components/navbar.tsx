"use client";

import Link from "next/link";
import React from "react";
import Flag from "@/components/flag";
import { Mail } from "lucide-react";
import { useLanguage } from "@/context/languageContext";

const Links = [
    {
        name: "Contact Me",
        href: "/#contact",
    },
];

export default function Navbar() {
    const { getLanguage, setLanguage } = useLanguage();
    return (
        <nav className="flex flex-row items-center justify-between px-5 w-full py-5 fixed top-0 left-0 z-[50] h-fit bg-transparent">
            <Link
                href="/#"
                className="flex flex-row items-center gap-1 rounded-xl backdrop-blur-3xl px-2 pr-5 py-1 border border-white/10 cursor-pointer"
                data-pattern="stripes"
            >
                <img
                    src="/assets/logo.png"
                    alt="Logo"
                    className="object-center w-9"
                />
                <h1 className="text-white">Lawyn.xyz</h1>
            </Link>
            <div className="flex flex-row gap-4">
                <button className="cursor-pointer" onClick={() => {
                    const lang = getLanguage();
                    setLanguage(lang === "en" ? "ro" : "en");
                }}>
                    <Flag name={getLanguage()} />
                </button>
                <Link
                    href="#contact"
                    className="flex flex-row items-center bg-white gap-3 rounded-xl backdrop-blur-3xl px-3 py-2 border border-white/10 cursor-pointer h-full"
                >
                    <Mail className="text-black w-5" />
                    <h1 className="text-black">Contact</h1>
                </Link>
                
            </div>
        </nav>
    );
}
