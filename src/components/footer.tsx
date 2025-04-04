"use client";
import React from "react";
import { Logo } from "./logo";
import Link from "next/link";
import { Facebook, Github, Linkedin } from "lucide-react";
import GroupRow from "./group";

export default function Footer() {
    return (
        <footer
            className="bg-zinc-900 p-4 w-full h-fit py-10 flex flex-col items-center justify-center border-t-2 border-zinc-700 border-dashed relative"
            data-pattern="stripes"
        >
            <div className="z-[1]">
                <Logo />
                <div className="flex flex-row items-center justify-center gap-2 mt-10">
                    <GroupRow>
                        <Link
                            target="_blank"
                            className="px-3 py-3 bg-zinc-800 rounded-xl transition-colors duration-150 hover:bg-zinc-900"
                            href="https://github.com/lawynnn"
                        >
                            <Github />
                        </Link>
                        <Link
                            target="_blank"
                            className="px-3 py-3 bg-zinc-800 rounded-xl transition-colors duration-150 hover:bg-zinc-900"
                            href="https://www.linkedin.com/in/buta-iustinian-93846a346/"
                        >
                            <Linkedin />
                        </Link>
                        <Link
                            target="_blank"
                            className="px-3 py-3 bg-zinc-800 rounded-xl transition-colors duration-150 hover:bg-zinc-900"
                            href="https://www.facebook.com/IustinJK/"
                        >
                            <Facebook />
                        </Link>
                    </GroupRow>
                </div>
            </div>

            {/* <div className="absolute bg-[repeating-linear-gradient(-45deg,white_0%,white_.5%,transparent_.5%,transparent_1%)] left-0 top-0 w-full h-full opacity-2 pointer-events-none"></div> */}
        </footer>
    );
}
