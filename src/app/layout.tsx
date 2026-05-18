import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ilashe Benjamin Joseph -Solutions Architect & DevOps Engineer",
  description:
    "AWS Certified Solutions Architect and DevOps Engineer. Building cloud infrastructure that scales.",
  keywords: [
    "Ilashe Benjamin Joseph",
    "Solutions Architect",
    "DevOps Engineer",
    "AWS",
    "Cloud Infrastructure",
  ],
  openGraph: {
    title: "Ilashe Benjamin Joseph -Solutions Architect & DevOps Engineer",
    description: "AWS Certified cloud professional. Building infrastructure that scales.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${dmSans.variable} font-body bg-bg text-cream antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
