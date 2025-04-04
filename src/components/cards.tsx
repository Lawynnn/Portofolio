"use client";
import React, { CSSProperties } from "react";
import { useInView } from "react-intersection-observer";

type Card = {
    title: string;
    description: string;
};

export default function Cards({ cardsData }: { cardsData: Card[] }) {

    return (
        <div
            className="flex flex-row flex-wrap justify-center items-stretch gap-4 p-5"
        >
            {cardsData.map((card, idx) => {
                const [ref, inView] = useInView({
                    threshold: 0.2,
                });
                return (
                <div
                    key={idx}
                    ref={ref}
                    data-view={inView}
                    className="relative flex flex-col w-fit border-dashed border-2 border-zinc-700 bg-zinc-950 z-[1] rounded-xl p-3 max-w-[300px]
                after:content-[''] after:absolute after:-left-[.5rem] after:-top-[.5rem] after:w-[1rem] after:h-[1rem] after:bg-red-500 after:border-2 
                after:border-red-300 after:rounded-full after:z-10
                transition-all duration-300 ease-in-out delay-[var(--delay)]
                opacity-0 translate-y-[-50px] scale-[.9]
                data-[view='true']:opacity-100 data-[view='true']:translate-y-0 data-[view='true']:scale-100
                "
                    style={
                        {
                            "--delay": inView ? `${0.3 + idx * 0.1}s` : "0s",
                        } as CSSProperties
                    }
                >
                    <h1 className="text-white text-xl font-bold">
                        {card.title}
                    </h1>
                    <p className="text-zinc-300">{card.description}</p>
                </div>
            )
            })}
        </div>
    );
}
