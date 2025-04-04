"use client";

import Link from "next/link";
import React from "react";
import { Logo } from "./logo";
import { Mail } from "lucide-react";

const Links = [
    {
        name: "Contact Me",
        href: "/#contact",
    },
];

export default function Navbar() {
    return (
        // <nav className="flex flex-row items-center justify-between w-full px-5 py-3 bg-transparent fixed top-0 z-50 gap-3">
        //     <Logo className="backdrop-blur-3xl h-full border-2 max-sm:text-lg max-sm:px-4" />
        //     <div className="h-[1px] w-full border-t-2 border-zinc-500 border-dashed"></div>
        //     <div className="flex flex-row items-center px-3 py-2 rounded-xl gap-8 backdrop-blur-3xl border-2 border-zinc-500 border-dashed h-full">
        //         {Links.map((l, idx) => {
        //             return (
        //                 <Link
        //                     key={idx}
        //                     href={l.href}
        //                     className="text-zinc-300 hover:text-zinc-100 transition-colors duration-150 font-normal text-[1.1rem] px-3 text-nowrap"
        //                 >
        //                     {l.name}
        //                 </Link>
        //             )
        //         })}
        //     </div>
        // </nav>
        <nav className="flex flex-row items-center justify-between px-5 w-full py-5 fixed top-0 left-0 z-[50] h-fit bg-transparent">
            <Link href="/#" className="flex flex-row items-center gap-1 rounded-xl backdrop-blur-3xl px-2 pr-5 py-1 border border-white/10 cursor-pointer" data-pattern="stripes">
                <img
                    src="/assets/logo.png"
                    alt="Logo"
                    className="object-center w-9"
                />
                <h1 className="text-white">Lawyn.xyz</h1>
            </Link>
            <Link href="#contact" className="flex flex-row items-center bg-white gap-3 rounded-xl backdrop-blur-3xl px-3 py-2 border border-white/10 cursor-pointer h-full" data-pattern="stripes">
                <Mail className="text-black w-5" />
                <h1 className="text-black">Contact</h1>
            </Link>
        </nav>
    );
}
