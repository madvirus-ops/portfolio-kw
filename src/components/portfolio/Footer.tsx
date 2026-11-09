import { portfolio, systemsInProduction } from "#/data/portfolio";
import { ArrowUp } from "#/components/portfolio/Icons";
import { useLagosClock } from "#/hooks/useLagosClock";

export function Footer() {
    const clock = useLagosClock();

    return (
        <footer className="border-t border-dashed border-frame font-mono text-[0.72rem] leading-snug text-muted">
            <div className="shell gutter flex min-h-[64px] flex-wrap items-center justify-between gap-x-4 gap-y-2 py-3">
                <span className="inline-flex items-center gap-2">
                    <span
                        aria-hidden="true"
                        className="status-dot inline-block h-1.5 w-1.5 rounded-full bg-accent"
                    />
                    {portfolio.headline} · {systemsInProduction} systems in prod
                    · {portfolio.statusBar.signal}
                </span>
                <span className="inline-flex items-center gap-4">
                    <span className="tabular-nums" aria-live="off">
                        {clock}
                    </span>
                    <a
                        href="#about"
                        className="inline-flex min-h-11 items-center gap-1.5 transition-colors hover:text-accent-ink"
                    >
                        Back to top <ArrowUp />
                    </a>
                </span>
            </div>
        </footer>
    );
}
