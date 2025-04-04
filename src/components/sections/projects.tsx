"use client";

import React from "react";
import ProjectCard, { Langs } from "../projectCard";

export default function ProjectsSection() {
    return (
        <div
            className="w-full min-h-screen relative border-t-2 border-dashed border-zinc-700 flex flex-col items-center bg-zinc-950 pt-10 gap-10"
            id="about"
        >
            <div className="absolute w-full h-full bg-[url('/assets/background_2.png')] bg-no-repeat bg-center top-0 left-0 z-[5] pointer-events-none"></div>
            <div className="flex flex-col items-center">
                <h1 className="text-white font-black uppercase opacity-40 text-7xl text-center">
                    What I build
                </h1>
                <span className="text-zinc-300 text-lg font-bold text-center">
                    Here is some of my projects
                </span>
            </div>
            <div className="w-full h-full flex flex-row flex-wrap justify-center gap-10 max-w-[1200px]">
                <div className="grid grid-cols-3 grid-rows-5 gap-4 p-4 max-sm:flex max-sm:flex-col">
                    <ProjectCard
                        idx={0}
                        title="oogo"
                        image="/assets/oogo.png"
                        link="https://github.com/Lawynnn/oogo-backend"
                        description={
                            "A website for ride sharing, where you can find a ride or offer one"
                        }
                        languages={["nextjs", "nodejs", "mongodb"]}
                        className="bg-red-950 border-red-800 col-span-2 row-span-2"
                    />
                    <ProjectCard
                        idx={1}
                        title="Helios"
                        image="/assets/Helios.png"
                        link={"https://github.com/Lawynnn/HeliosRemake"}
                        description={
                            "A website for my university that helps teachers with marks and homeworks"
                        }
                        languages={["html", "css", "js", "mongodb"]}
                        className="bg-blue-950 row-span-2 col-start-3"
                    />

                    <ProjectCard
                        idx={2}
                        title="Discurp"
                        description={
                            "An desktop app that can be used to set a custom status on discord, with a custom message and a custom image"
                        }
                        languages={["html", "css", "electronjs", "nodejs"]}
                        className="bg-blue-950 row-span-3 row-start-3"
                        link="https://lawynnn.github.io"
                    />
                    <ProjectCard
                        idx={3}
                        title="LF Compiler"
                        link="https://github.com/Lawynnn/LF"
                        description={
                            "A compiler for a custom language I made, with a custom syntax and a custom compiler, designed for easy discord bot creation"
                        }
                        languages={["nodejs", "discord.js"]}
                        className="bg-blue-950 col-span-2 row-span-2 row-start-3"
                    />
                    <ProjectCard
                        idx={4}
                        title="Type Racer"
                        link="/type-racer"
                        description={
                            "An multiplayer type racing game, where you can play with your friends to see who types faster"
                        }
                        languages={["html", "css", "js", "mongodb", "nodejs"]}
                        className="bg-blue-950 col-span-2 col-start-2 row-start-5"
                    />
                </div>
            </div>

            {/* <span className="absolute left-5 top-0 font-black text-9xl opacity-15 uppercase w-fit max-sm:text-8xl">About Me</span> */}
            {/* <div className="absolute bg-[url('/assets/grid.png')] w-full h-full bg-repeat bg-[length:30px] opacity-100 pointer-events-none top-0 left-0"></div> */}
            {/* <div className="opacity-100 absolute inset-0 h-full w-full bg-transparent bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div> */}
        </div>
    );
}
