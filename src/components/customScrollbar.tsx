"use client";

import React, { useEffect, useState, useCallback, useRef } from "react";

export default function CustomScrollbar() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const isDraggingRef = useRef(false);
    const trackRef = useRef<HTMLDivElement>(null);

    const handleScroll = useCallback(() => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        setScrollProgress(Math.min(Math.max(progress, 0), 100));
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    const scrollToPosition = useCallback((clientY: number) => {
        if (!trackRef.current) return;
        const rect = trackRef.current.getBoundingClientRect();
        const clickY = Math.max(0, Math.min(clientY - rect.top, rect.height));
        const percentage = (clickY / rect.height);
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        window.scrollTo({ top: percentage * docHeight, behavior: "auto" });
    }, []);

    const handleTrackClick = (e: React.MouseEvent<HTMLDivElement>) => {
        scrollToPosition(e.clientY);
    };

    useEffect(() => {
        const handleMove = (e: MouseEvent | TouchEvent) => {
            if (!isDraggingRef.current) return;
            const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
            scrollToPosition(clientY);
        };

        const handleEnd = () => {
            isDraggingRef.current = false;
            document.body.style.userSelect = '';
        };

        window.addEventListener("mousemove", handleMove, { passive: true });
        window.addEventListener("touchmove", handleMove, { passive: true });
        window.addEventListener("mouseup", handleEnd);
        window.addEventListener("touchend", handleEnd);

        return () => {
            window.removeEventListener("mousemove", handleMove);
            window.removeEventListener("touchmove", handleMove);
            window.removeEventListener("mouseup", handleEnd);
            window.removeEventListener("touchend", handleEnd);
        };
    }, [scrollToPosition]);

    const handleDragStart = () => {
        isDraggingRef.current = true;
        document.body.style.userSelect = 'none';
    };

    const thumbTop = Math.min(Math.max(scrollProgress, 0), 100);

    return (
        <div
            className="fixed right-1 md:right-2 top-1/2 z-[100] flex flex-col items-center gap-1 max-sm:scale-75 max-sm:origin-right"
            style={{ transform: 'translateY(-50%)' }}
        >
            {/* Percentage */}
            <div className="text-[10px] font-bold text-red-400/80 tabular-nums select-none w-7 text-center">
                {Math.round(scrollProgress)}%
            </div>

            {/* Track */}
            <div
                ref={trackRef}
                onClick={handleTrackClick}
                className="relative w-1 h-28 md:h-36 bg-zinc-800/80 rounded-full cursor-pointer"
            >
                {/* Fill */}
                <div
                    className="absolute top-0 left-0 w-full bg-gradient-to-b from-red-500 to-red-600 rounded-full"
                    style={{ height: `${thumbTop}%` }}
                />

                {/* Thumb */}
                <div
                    className="absolute left-1/2 w-2.5 h-2.5 bg-white rounded-full shadow-md shadow-red-500/30 cursor-grab active:cursor-grabbing select-none"
                    style={{
                        top: `${thumbTop}%`,
                        transform: 'translate(-50%, -50%)'
                    }}
                    onMouseDown={handleDragStart}
                    onTouchStart={handleDragStart}
                />
            </div>

            {/* Dots */}
            <div className="flex flex-col gap-0.5 mt-1">
                {[0, 1, 2].map((i) => (
                    <div
                        key={i}
                        className={`w-1 h-1 rounded-full ${scrollProgress > (i + 1) * 33 ? "bg-red-500" : "bg-zinc-700"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
