"use client";

import Navbar from "@/components/navbar";
import AboutSection from "@/components/sections/about";
import ContactSection from "@/components/sections/contact";
import MainSection from "@/components/sections/main";
import ProjectsSection from "@/components/sections/projects";
import { useTheme } from "@/context/themeContext";

export default function Home() {
    const { theme, setTheme } = useTheme();
    return (
        <>
            <Navbar />
            <div className="flex flex-col h-fit w-full">
                <MainSection />
                <AboutSection />
                <ProjectsSection />
                <ContactSection />
            </div>
        </>
    );
}
