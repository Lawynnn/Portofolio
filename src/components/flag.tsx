"use client";
import React from "react";

export default function Flag({ name }: { name: string }) {
    return (
        <div className="w-fit h-fit">
            <img width={"35px"} height={"35px"} src={`/assets/flags/${name}.png`} alt={name} />
        </div>
    )
}