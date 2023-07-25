import type { Metadata } from "next";
import { Poppins, Prata } from "next/font/google";
import { twJoin } from "tailwind-merge";
import "./globals.css";

const prata = Prata({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full w-full base-layout">
      <body
        suppressHydrationWarning
        className={twJoin(prata.className, poppins.className, "h-full w-full")}
      >
        {children}
      </body>
    </html>
  );
}
