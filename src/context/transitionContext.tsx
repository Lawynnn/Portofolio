"use client";
import React from "react";

export type TransitionContextType = {
    showTransition: (ms: number, cb?: () => void) => void;
    inTransition: boolean;
}

export const TransitionContext = React.createContext<TransitionContextType | null>(null);

export const TransitionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [inTransition, setInTransition] = React.useState(false);

    const showTransition = (ms: number, cb?: () => void) => {
        setInTransition(true);
        setTimeout(() => {
            setInTransition(false);
            if (cb) {
                cb();
            }
        }, ms);
    };

    return (
        <TransitionContext.Provider value={{ showTransition, inTransition }}>
            <div data-t={`${inTransition}`} className="z-[30] transition-all duration-300 w-full h-full fixed top-0 left-0 pointer-events-none
            data-[t='true']:scale-150 bg-zinc-900/50 backdrop-blur-md data-[t='true']:opacity-100 opacity-0"></div>
            {children}
        </TransitionContext.Provider>
    );
};

export function useTransition() {
    const context = React.useContext(TransitionContext);

    if (!context) {
        throw new Error("useTransition must be used within a TransitionProvider");
    }

    return context;
}