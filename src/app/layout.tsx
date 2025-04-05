import type { Metadata } from "next";
import { Poppins, Lexend } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/themeContext";
import Footer from "@/components/footer";
import { ImagePreviewProvider } from "@/context/imagePreviewContext";
import { SpeedInsights } from "@vercel/speed-insights/next";

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const lexend = Lexend({
    variable: "--font-lexend",
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
    title: "Portofolio - Lawyn.xyz",
    icons: {
        icon: "/assets/logo.png",
        shortcut: "/assets/logo.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${poppins.variable} ${lexend.variable} antialiased bg-zinc-950 text-white`}
            >
                <SpeedInsights />
                <ThemeProvider>
                    <ImagePreviewProvider>
                        <main className="min-w-full min-h-screen">
                            {children}
                        </main>
                        <Footer />
                    </ImagePreviewProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
