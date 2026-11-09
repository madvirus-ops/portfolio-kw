import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Icon({ children, ...props }: IconProps) {
    return (
        <svg
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            focusable="false"
            className="block flex-none"
            {...props}
        >
            {children}
        </svg>
    );
}

export const ArrowDown = (p: IconProps) => (
    <Icon {...p}>
        <path d="M12 5v14M6 13l6 6 6-6" />
    </Icon>
);
export const ArrowUp = (p: IconProps) => (
    <Icon {...p}>
        <path d="M12 19V5M6 11l6-6 6 6" />
    </Icon>
);
export const ArrowRight = (p: IconProps) => (
    <Icon {...p}>
        <path d="M5 12h14M13 6l6 6-6 6" />
    </Icon>
);
export const ArrowUpRight = (p: IconProps) => (
    <Icon {...p}>
        <path d="M7 17 17 7M8 7h9v9" />
    </Icon>
);
export const Search = (p: IconProps) => (
    <Icon {...p}>
        <circle cx="11" cy="11" r="6.5" />
        <path d="m20 20-4.2-4.2" />
    </Icon>
);
export const Close = (p: IconProps) => (
    <Icon {...p}>
        <path d="M6 6l12 12M18 6 6 18" />
    </Icon>
);
export const Sun = (p: IconProps) => (
    <Icon {...p}>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6 7 7M17 17l1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4" />
    </Icon>
);
export const Moon = (p: IconProps) => (
    <Icon {...p}>
        <path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5Z" />
    </Icon>
);
export const Pin = (p: IconProps) => (
    <Icon {...p}>
        <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z" />
        <circle cx="12" cy="9.5" r="2.4" />
    </Icon>
);
export const Mail = (p: IconProps) => (
    <Icon {...p}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
    </Icon>
);
export const Github = (p: IconProps) => (
    <Icon {...p}>
        <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
    </Icon>
);
export const Linkedin = (p: IconProps) => (
    <Icon {...p}>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M8 11v5M8 8v.01M12 16v-5m0 2.5c0-1.4 1-2.5 2.3-2.5S16.5 12 16.5 13.5V16" />
    </Icon>
);
export const XLogo = (p: IconProps) => (
    <Icon {...p}>
        <path d="M4 4l16 16M20 4 4 20" />
    </Icon>
);
export const Phone = (p: IconProps) => (
    <Icon {...p}>
        <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
    </Icon>
);
export const Commit = (p: IconProps) => (
    <Icon {...p}>
        <circle cx="12" cy="12" r="3.2" />
        <path d="M3 12h5.8M15.2 12H21" />
    </Icon>
);
