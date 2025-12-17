import { useEffect } from "react";

export default function useTheme() {
    useEffect(() => {
        const isDark = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;
        document.documentElement.classList.toggle("dark", isDark);
    }, []);
}
