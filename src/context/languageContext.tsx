"use client";
import React from "react";
import translationsData from "@/data/translations";
import { useTransition } from "./transitionContext";

const validLanguages: string[] = ["en", "ro", "it", "de"];
export type LanguageListType = (typeof validLanguages)[number];
type LanguageContextType = {
    setLanguage: (lang: LanguageListType) => void;
    getLanguage: () => LanguageListType;
    translate: (key: string) => string;
};
const LanguageContext = React.createContext<LanguageContextType | null>(null);

export const LanguageProvider: React.FC<{
    children: React.ReactNode;
}> = ({ children }) => {
    const [lang, setLang] = React.useState<LanguageListType>("en");
    const { inTransition, showTransition } = useTransition();

    React.useEffect(() => {
        const storedLang = globalThis.window.localStorage.getItem("language") as LanguageListType;
        if (storedLang && validLanguages.includes(storedLang)) {
            setLang(storedLang);
        } else {
            setLang("en");
            globalThis.window.localStorage.setItem("language", "en");
        }
    }, []);

    const setLanguage = (lang: LanguageListType) => {
        showTransition(500, () => {
            if (inTransition) {
                return;
            }
            setLang(lang);
        });
        globalThis.window.localStorage.setItem("language", lang);
    };

    const getLanguage = (): LanguageListType => {
        return lang;
    };

    const translate = (key: string): string => {
        if (!validLanguages.includes(lang)) {
            return key;
        }

        const t = translationsData[lang];
        if (!t) {
            return key;
        }

        if (key in t) {
            return t[key];
        }

        return key;
    };

    return (
        <LanguageContext.Provider value={{ setLanguage, getLanguage, translate }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = React.useContext(LanguageContext);
    if (!context) {
        throw new Error(
            "useLanguage must be used within a LanguageProvider"
        );
    }
    return context;
};