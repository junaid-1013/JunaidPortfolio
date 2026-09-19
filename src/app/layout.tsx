import { Footer, NavBar } from "@/components";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export const metadata: Metadata = {
  title: "Junaid Ali Bhatti",
  description:
    "Junaid Ali Bhatti, Senior AI Engineer and Full-Stack Developer. LLM agents, RAG, MCP and multi-tenant AI SaaS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}>
        <Providers>
          <NavBar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
