"use client";

import React from "react";
import ArrowButton from "../arrow";

export default function MainSection() {
    return (
        <div className="w-full h-screen relative" id="main" data-pattern="dots" style={{ "--size": "35px 35px" } as React.CSSProperties}>
            <div className="flex flex-col w-full h-full items-center justify-center bg-transparent">
                <div className="relative">
                    {/* <h1 className="text-6xl text-white font-bold text-center">Lawyn's Portofolio</h1> */}
                    {/* <img className="z-[3]" src="/assets/logo.png" alt="Logo" /> */}
                    <h1 className="text-6xl font-black bg-gradient-to-r from-red-500 via-red-300 to-white to-60% via-30% bg-clip-text text-transparent text-center">Lawyn's Portofolio</h1>
                    <div className="bg-zinc-500 blur-[150px] w-full h-full absolute top-0 left-0 -z-[1]"></div>
                </div>
                <p className="p-5 mt-5 max-w-2xl text-lg text-zinc-400 font-normal text-center max-sm:text-[1rem] mb-10">Self-taught developer, passionate about crafting seamless web experiences through personal projects and freelancing</p>
                <ArrowButton link="#about" />
            </div>
            <div className="absolute bg-[url('/assets/background_2.png')] w-full h-full bg-no-repeat bg-center opacity-100 pointer-events-none top-0 left-0"></div>
            {/* <div className="absolute w-full h-full pointer-events-none top-0 left-0" data-pattern="stripes"></div> */}
        </div>
    );
}
