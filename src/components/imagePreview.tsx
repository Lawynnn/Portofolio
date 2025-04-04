"use client";

import React from "react";

export default function ImagePreview({ image, onOuterClick }: { image: string, onOuterClick?: () => void }) {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center gap-5 fixed top-0 left-0 z-[100] backdrop-blur-md bg-black/50 px-5" onClick={(e) => {
            if (onOuterClick && e.target === e.currentTarget) {
                onOuterClick();
            }
        }}>
            <img
                src={image}
                className="rounded-3xl max-w-full object-contain w-fit h-fit max-h-4/5 border-2 border-dashed border-white/50"
            />
        </div>
    )
}