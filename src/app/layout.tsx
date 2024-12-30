import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; // Tailwind and global styles

// Fonts
const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

// Metadata for the app
export const metadata: Metadata = {
    title: "Slimmpylk's Portfolio",
    description: "A showcase of my work and skills.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground font-sans m-0`}
        >
        {children}
        </body>
        </html>
    );
}
