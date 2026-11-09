import { useEffect, useState } from "react";

import { Moon, Sun } from "#/components/portfolio/Icons";

type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "portfolio-theme";
export const THEME_COLORS: Record<Theme, string> = {
    dark: "#111314",
    light: "#f6f6f3",
};

function applyTheme(theme: Theme) {
    document.documentElement.dataset.theme = theme;
    document
        .querySelector('meta[name="theme-color"]')
        ?.setAttribute("content", THEME_COLORS[theme]);
}

export function ThemeToggle() {
    // The server and first client render assume dark (the default edition);
    // the head script has already set the real theme, so sync from the DOM.
    const [theme, setTheme] = useState<Theme>("dark");

    useEffect(() => {
        setTheme(
            document.documentElement.dataset.theme === "light"
                ? "light"
                : "dark",
        );
    }, []);

    const next: Theme = theme === "dark" ? "light" : "dark";

    return (
        <button
            type="button"
            aria-label={`Switch to ${next} theme`}
            title={`Switch to ${next} theme`}
            onClick={() => {
                applyTheme(next);
                setTheme(next);
                try {
                    localStorage.setItem(THEME_STORAGE_KEY, next);
                } catch {
                    // Storage can be blocked; the toggle still works for this visit.
                }
            }}
            className="grid min-h-11 min-w-9 place-items-center bg-transparent text-[17px] text-muted transition-colors hover:text-accent-ink"
        >
            {theme === "dark" ? <Sun /> : <Moon />}
        </button>
    );
}
