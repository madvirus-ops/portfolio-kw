import type { SVGProps } from "react";

// The beshel.dev "B" mark, redrawn from the brand kit. The letterform follows
// the text colour and the ring follows the accent, so one component covers
// both themes (the kit ships separate light and dark files).
export function LogoMark(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            viewBox="26 12 60 76"
            fill="none"
            role="img"
            aria-label="beshel.dev"
            {...props}
        >
            <rect x="26" y="12" width="8" height="76" fill="currentColor" />
            <rect
                x="30"
                y="16"
                width="40"
                height="30"
                rx="15"
                stroke="currentColor"
                strokeWidth="8"
            />
            <rect
                x="30"
                y="50"
                width="52"
                height="34"
                rx="17"
                stroke="var(--accent)"
                strokeWidth="8"
            />
        </svg>
    );
}
