import { Link } from "@tanstack/react-router";

import { portfolio, primaryNavIdFor } from "#/data/portfolio";
import { LogoMark } from "#/components/portfolio/LogoMark";
import { ThemeToggle } from "#/components/portfolio/ThemeToggle";

type MastheadProps = {
    activeId: string;
};

export function Masthead({ activeId }: MastheadProps) {
    const primaryActiveId = primaryNavIdFor(activeId);

    return (
        <header className="sticky top-0 z-30 border-b border-dashed border-frame bg-paper">
            <div className="shell gutter flex min-h-[54px] items-center justify-between gap-3">
                <a
                    href="#about"
                    aria-label={`${portfolio.headline} home`}
                    className="inline-flex min-h-11 shrink-0 items-center gap-2 text-[1.16rem] font-semibold leading-none tracking-[-0.06em] whitespace-nowrap"
                >
                    <LogoMark
                        aria-hidden="true"
                        role="presentation"
                        className="h-[26px] w-auto flex-none text-ink"
                    />
                    <span className="max-[480px]:hidden">
                        Edwin
                        <span className="max-[640px]:hidden"> Beshel</span>
                        <span className="text-accent-ink">.</span>
                    </span>
                </a>

                <div className="flex min-w-0 items-center gap-x-[clamp(0.8rem,2.45vw,1.55rem)]">
                    <nav
                        aria-label="Site sections"
                        className="mobile-nav-scroll flex min-w-0 items-center gap-x-[clamp(0.8rem,2.45vw,1.55rem)] overflow-x-auto font-mono text-[0.74rem] font-medium"
                    >
                        {portfolio.primaryNav.map((item) => {
                            const isActive = primaryActiveId === item.id;

                            return (
                                <a
                                    key={item.id}
                                    href={item.href}
                                    aria-current={
                                        isActive ? "location" : undefined
                                    }
                                    className="nav-link"
                                >
                                    {item.label}
                                </a>
                            );
                        })}
                        <Link to="/resume" className="nav-link">
                            resume
                        </Link>
                    </nav>
                    {/* Outside the scrolling nav so it is always reachable. */}
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
}
