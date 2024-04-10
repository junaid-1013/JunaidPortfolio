import { Footer, NavBar } from "@/components";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeSwitcherProvider } from "@/hooks/useThemeSwitcher";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export const metadata: Metadata = {
  title: "Junaid Ali Bhatti",
  description: "Software Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <ThemeSwitcherProvider>
      <html lang="en">
        <body className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}>
          <NavBar />
          {children}
          <Footer />
        </body>
      </html>
    </ThemeSwitcherProvider>
  );
}
