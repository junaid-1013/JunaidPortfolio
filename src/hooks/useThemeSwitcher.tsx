"use client";
import { Dispatch, ReactNode, createContext, useContext, useEffect, useState } from "react";

interface ThemeSwitcherType {
    themeMode: string;
    setThemeMode: Dispatch<string>;
}

const ThemeContext = createContext<ThemeSwitcherType | undefined>(undefined);

export function useThemeSwitcher() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useThemeSwitcher must be used within a ThemeSwitcherProvider");
    }
    return context;
}

interface ThemeSwitcherProviderProps {
    children: ReactNode;
}

export function ThemeSwitcherProvider({ children }: ThemeSwitcherProviderProps) {
    const preferDarkQuery = "(prefers-color-scheme: dark)";
    const isBrowser = typeof window !== "undefined";

    const [themeMode, setThemeMode] = useState(() => {
        if (isBrowser) {
            const storedTheme = localStorage.getItem("theme");
            if (storedTheme) {
                return storedTheme;
            } else {
                const mediaQuery = window.matchMedia(preferDarkQuery);
                return mediaQuery.matches ? "dark" : "light";
            }
        }
        return "light";
    });

    useEffect(() => {
        if (!isBrowser) return;

        const mediaQuery = window.matchMedia(preferDarkQuery);

        const handleChange = () => {
            const usePref = localStorage.getItem("theme");
            if (usePref) {
                setThemeMode(usePref);
                document.documentElement.classList.toggle("dark", usePref === "dark");
            } else {
                const check = mediaQuery.matches ? "dark" : "light";
                setThemeMode(check);
                document.documentElement.classList.toggle("dark", check === "dark");
            }
        };

        handleChange();
        mediaQuery.addEventListener("change", handleChange);

        return () => mediaQuery.removeEventListener("change", handleChange);
    }, [isBrowser, preferDarkQuery]);

    useEffect(() => {
        if (isBrowser) {
            localStorage.setItem("theme", themeMode);
            document.documentElement.classList.toggle("dark", themeMode === "dark");
        }
    }, [themeMode, isBrowser]);

    const themeSwitcherValue: ThemeSwitcherType = {
        themeMode,
        setThemeMode,
    };

    return (
        <ThemeContext.Provider value={themeSwitcherValue}>
            {children}
        </ThemeContext.Provider>
    );
};
