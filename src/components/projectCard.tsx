"use client";
import React, { CSSProperties } from "react";
import clsx from "clsx";
import { useInView } from "react-intersection-observer";

export type Langs = string;

export default function ProjectCard({
    className,
    title,
    languages,
    description = null,
    image = "",
    link = "",
    idx,
    ...props
}: {
    className?: string;
    title: string;
    image?: string;
    languages: Langs[];
    link?: string | null;
    description?: string | null;
    idx: number;
} & React.ComponentPropsWithoutRef<"div">) {
    const [ref, inView] = useInView({
        threshold: 0.2,
    });

    return (
        <div
            data-view={inView}
            ref={ref}
            onClick={e => {
                if (link) {
                    window.open(link, "_blank");
                }
                e.stopPropagation();
            }}
            className={clsx(
                "bg-zinc-950 flex flex-col items-center justify-center",
                "relative cursor-pointer group overflow-hidden",
                `bg-cover bg-center rounded-4xl border border-white/10`,
                "hover:border-white/25",
                "transition-all duration-300 ease-in-out",
                "data-[view='true']:opacity-100 data-[view='true']:scale-100 data-[view='true']:translate-x-0",
                "opacity-30 scale-[.9]",
                idx % 2 === 1 ? "translate-x-[50px]" : "-translate-x-[50px]",
                className
            )}
            data-pattern="stripes"
            style={{
                
            } as CSSProperties}
            {...props}
        >
            {/* <div
                className="absolute inset-0 h-full w-full bg-center bg-[radial-gradient(circle,#333_1px,transparent_1px)] bg-[size:50px_50px]
                group-hover:bg-[size:40px_40px] transition-all duration-150"
            /> */}
            <div className="p-10 flex flex-col items-center justify-center w-full h-full gap-2 z-[1]">
                <h1 className="text-white font-black text-3xl z-[1]">
                    {title}
                </h1>
                <p className="text-zinc-400 text-sm z-[1] text-center">{description}</p>
                <div className="flex flex-row items-center justify-center">
                    {languages.map((lang) => {
                        return (
                            <span
                                key={lang}
                                className="text-zinc-400 text-[.6rem] font-bold bg-zinc-800 rounded-[2px] px-2 py-1 m-1 uppercase"
                            >
                                {lang}
                            </span>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
