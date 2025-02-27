import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kevin Li | Software Developer",
  description: "Personal and portfolio website",
};

const lexend = Lexend({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lexend.className} antialiased h-screen w-screen max-w-full bg-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}
