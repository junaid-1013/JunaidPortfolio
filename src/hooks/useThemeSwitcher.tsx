"use client";
import { Dispatch, ReactNode, createContext, useContext, useEffect, useState } from "react";

interface themeSwitcherType {
    themeMode: string;
    setThemeMode: Dispatch<string>;
}

const ThemeContext = createContext<themeSwitcherType | undefined>(undefined);

export function useThemeSwitcher() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("ThemeContext must be used within a ThemeSwitcherProvider");
    }
    return context;
}

interface ThemeSwitcherProviderProps {
    children: ReactNode;
}

export function ThemeSwitcherProvider({ children }: ThemeSwitcherProviderProps) {
    const preferDarkQuery = "(prefer-color-scheme: dark)";
    const [themeMode, setThemeMode] = useState("light");

    useEffect(() => {
        const mediaQuery = window.matchMedia(preferDarkQuery);
        const usePref = window.localStorage.getItem("theme");

        const handleChange = () => {
            if (usePref) {
                const check = usePref === "dark" ? "dark" : "light";
                setThemeMode(check);
                document.documentElement.classList.toggle("dark", check === "dark");
            } else {
                const check = mediaQuery.matches ? "dark" : "light";
                setThemeMode(check);
                document.documentElement.classList.toggle("dark", check === "dark");
            }
        };

        handleChange();
        mediaQuery.addEventListener("change", handleChange);

        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    useEffect(() => {
        window.localStorage.setItem("theme", themeMode);
        document.documentElement.classList.toggle("dark", themeMode === "dark");
    }, [themeMode]);

    const ThemeSwitcherValue: themeSwitcherType = {
        themeMode,
        setThemeMode,
    }
    return (
        <ThemeContext.Provider value={ThemeSwitcherValue} >
            {children}
        </ThemeContext.Provider>
    );
};

