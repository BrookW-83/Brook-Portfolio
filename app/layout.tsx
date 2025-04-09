import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_Javanese } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import MouseFollower from "@/components/MouseFollower";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nath.",
  description: "This is a personal portfolio website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  antialiased`}
      >
        <MouseFollower />
        <NavBar />
        <div className="w-[95%] sm:w-[80%]  lg:w-[70%] xl:w-[65%] m-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
