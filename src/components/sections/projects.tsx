"use client";

import React from "react";
import ProjectCard, { Langs } from "../projectCard";
import { useLanguage } from "@/context/languageContext";

export default function ProjectsSection() {
    const { translate } = useLanguage();
    return (
        <div
            className="w-full min-h-screen relative flex flex-col items-center bg-zinc-950 pt-16 gap-10 overflow-hidden"
            id="projects"
        >
            {/* Gradient Divider at Top */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent"></div>

            {/* Background Image */}
            <div className="absolute w-full h-full bg-[url('/assets/background_2.png')] bg-no-repeat bg-center top-0 left-0 z-[5] pointer-events-none opacity-50"></div>

            {/* Header */}
            <div className="flex flex-col items-center relative z-10">
                <h1 className="text-6xl md:text-7xl font-black uppercase text-center max-sm:text-4xl section-title">
                    {translate("projects")}
                </h1>
                <span className="text-zinc-500 text-lg font-medium text-center mt-3">
                    {translate("projects_desc")}
                </span>
            </div>

            {/* Projects Grid */}
            <div className="w-full h-full flex flex-row flex-wrap justify-center gap-10 max-w-[1200px] relative z-10 pb-10">
                <div className="grid grid-cols-3 grid-rows-5 gap-4 p-4 max-sm:flex max-sm:flex-col">
                    <ProjectCard
                        idx={0}
                        title="oogo"
                        image="/assets/oogo.png"
                        link="https://github.com/Lawynnn/oogo-backend"
                        description={translate("p_oogo_desc")}
                        languages={["nextjs", "nodejs", "mongodb"]}
                        className="col-span-2 row-span-2"
                    />
                    <ProjectCard
                        idx={1}
                        title="Helios"
                        image="/assets/Helios.png"
                        link={"https://github.com/Lawynnn/HeliosRemake"}
                        description={translate("p_helios_desc")}
                        languages={["html", "css", "js", "mongodb"]}
                        className="row-span-2 col-start-3"
                    />

                    <ProjectCard
                        idx={2}
                        title="Discurp"
                        description={translate("p_discurp_desc")}
                        languages={["html", "css", "electronjs", "nodejs"]}
                        className="row-span-3 row-start-3"
                        link="https://lawynnn.github.io"
                    />
                    <ProjectCard
                        idx={3}
                        title="LF Compiler"
                        link="https://github.com/Lawynnn/LF"
                        description={translate("p_lf_compiler_desc")}
                        languages={["nodejs", "discord.js"]}
                        className="col-span-2 row-span-2 row-start-3"
                    />
                    <ProjectCard
                        idx={4}
                        title="Type Racer"
                        link="/type-racer"
                        description={translate("p_type_racer_desc")}
                        languages={["html", "css", "js", "mongodb", "nodejs"]}
                        className="col-span-2 col-start-2 row-start-5"
                        isSpecial={true}
                    />
                </div>
            </div>

            {/* Ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-[150px] pointer-events-none"></div>
        </div>
    );
}
