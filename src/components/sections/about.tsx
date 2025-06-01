"use client";

import React from "react";
import ArrowButton from "../arrow";
import Cards from "../cards";
import { useLanguage } from "@/context/languageContext";

const cardsData = [
    ["about_card_1", "about_card_1_desc"],
    ["about_card_2", "about_card_2_desc"],
    ["about_card_3", "about_card_3_desc"],
    ["about_card_4", "about_card_4_desc"],
] as [string, string][];

export default function AboutSection() {
    const { translate } = useLanguage();
    return (
        <div
            className="w-full min-h-[calc(100vh/2)] relative border-t-2 border-dashed gap-10 border-zinc-700 flex flex-col items-center justify-center bg-zinc-950 py-10"
            data-pattern="grid"
            id="about"
            style={
                {
                    "--size": "25px 25px",
                } as React.CSSProperties
            }
        >
            <h1 className="text-white font-black uppercase opacity-40 text-7xl text-center max-sm:text-4xl">{translate("about_me")}</h1>
            <div className="flex flex-col items-center justify-center">
                <Cards cardsData={cardsData} />
            </div>
            {/* <span className="absolute left-5 top-0 font-black text-9xl opacity-15 uppercase w-fit max-sm:text-8xl">About Me</span> */}
            {/* <div className="absolute bg-[url('/assets/grid.png')] w-full h-full bg-repeat bg-[length:30px] opacity-100 pointer-events-none top-0 left-0"></div> */}
            {/* <div className="opacity-100 absolute inset-0 h-full w-full bg-transparent bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div> */}
        </div>
    );
}
