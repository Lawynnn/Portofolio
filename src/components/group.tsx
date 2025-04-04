"use client";

import React from "react";

export default function GroupRow({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-row items-center h-fit w-fit px-3 py-3 gap-3 bg-zinc-700 rounded-xl">
            {React.Children.map(children, (child, idx) => {
                if(idx !== React.Children.count(children) - 1) {
                    return (
                        <>
                            {child}
                            <div className="w-[1px] h-10 bg-transparent border-l-2 border-dashed border-zinc-500"></div>
                        </>
                    );
                }
                return <div className="h-fit w-fit flex flex-row items-center justify-center">{child}</div>;
            })}
        </div>
    );

}