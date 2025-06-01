"use client";

import { useLanguage } from "@/context/languageContext";
import { Facebook, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function ContactSection() {
    const {translate} = useLanguage();
    return (
        <div className="w-full min-h-[calc(100vh/2)] relative border-t-2 border-t-white/15 border-dashed mt-10 flex flex-col gap-3 items-center justify-center" id="contact" data-pattern="dots">
<<<<<<< HEAD
            <h1 className="text-7xl uppercase text-white/40 font-black text-center max-sm:text-4xl">{translate("contact_me")}</h1>
            <Link href="mailto://iustinftw@gmail.com" className="py-3 px-5 bg-white text-black rounded-3xl inline-flex gap-3 transition-colors duration-150 hover:bg-zinc-800 hover:text-white"><Mail /> {translate("contact_email")}</Link>
            <Link target="_blank" href="https://www.facebook.com/IustinJK/" className="py-3 px-5 bg-white/5 text-white border border-white/20 rounded-3xl inline-flex gap-3 transition-colors duration-150 hover:bg-white/15"><Facebook /> {translate("contact_facebook")}</Link>
=======
            <h1 className="text-7xl uppercase text-white/40 font-black text-center max-sm:text-6xl">Contact Me</h1>
            <Link href="mailto:iustinftw@gmail.com" className="py-3 px-5 bg-white text-black rounded-3xl inline-flex gap-3 transition-colors duration-150 hover:bg-zinc-800 hover:text-white"><Mail /> Contact me via E-Mail</Link>
            <Link target="_blank" href="https://www.facebook.com/IustinJK/" className="py-3 px-5 bg-white/5 text-white border border-white/20 rounded-3xl inline-flex gap-3 transition-colors duration-150 hover:bg-white/15"><Facebook /> Or leave me a message on Facebook</Link>
>>>>>>> dd9498a7375a782e153c03c63fbfa3c83d7c6341
        </div>
    );
}
