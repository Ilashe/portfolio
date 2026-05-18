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
  title: "Ilashe Benjamin Joseph | AWS Solutions Architect & DevOps Engineer",
  description:
    "AWS Certified Solutions Architect, DevOps Engineer, and HubSpot Engineer. I design scalable cloud infrastructure, build CI/CD pipelines, automate workflows, and develop modern web applications. Available for consulting and new projects.",
  keywords: [
    "Ilashe Benjamin Joseph",
    "AWS Solutions Architect",
    "DevOps Engineer",
    "HubSpot Engineer",
    "Cloud Infrastructure",
    "AWS Certified",
    "CI/CD",
    "Terraform",
    "Docker",
    "Next.js",
    "Workflow Automation",
    "Zapier",
    "Power Automate",
    "Claude Code",
    "Technical Consultant",
  ],
  authors: [{ name: "Ilashe Benjamin Joseph" }],
  creator: "Ilashe Benjamin Joseph",
  openGraph: {
    title: "Ilashe Benjamin Joseph | AWS Solutions Architect & DevOps Engineer",
    description:
      "AWS Certified Solutions Architect, DevOps Engineer, and HubSpot Engineer. Scalable cloud infrastructure, CI/CD automation, and modern web development.",
    type: "website",
    locale: "en_US",
    siteName: "Ilashe Benjamin Joseph Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ilashe Benjamin Joseph | AWS Solutions Architect & DevOps Engineer",
    description:
      "AWS Certified Solutions Architect, DevOps Engineer, and HubSpot Engineer. Scalable cloud infrastructure, CI/CD automation, and modern web development.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
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
