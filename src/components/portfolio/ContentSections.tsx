import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { isExternalHref, portfolio } from "#/data/portfolio";
import { useReveal } from "#/hooks/useReveal";
import { ActionLinks } from "#/components/portfolio/ActionLinks";
import { LogoMark } from "#/components/portfolio/LogoMark";
import {
    ArrowDown,
    ArrowUpRight,
    Github,
    Linkedin,
    Mail,
    Phone,
    Pin,
    XLogo,
} from "#/components/portfolio/Icons";

type RevealSectionProps = ComponentPropsWithoutRef<"section"> & {
    id: string;
};

export function RevealSection({
    id,
    className = "",
    children,
    ...rest
}: RevealSectionProps) {
    const { ref, state } = useReveal<HTMLElement>();

    return (
        <section
            ref={ref}
            id={id}
            data-reveal={state}
            className={`reveal ruled ${className}`.trim()}
            aria-labelledby={`${id}-heading`}
            {...rest}
        >
            {children}
        </section>
    );
}

type SectionHeaderProps = {
    id: string;
    children: ReactNode;
    aside?: ReactNode;
};

export function SectionHeader({ id, children, aside }: SectionHeaderProps) {
    return (
        <div className="gutter flex flex-wrap items-center justify-between gap-x-4 gap-y-1 pt-3.5 pb-2.5">
            <h2
                id={`${id}-heading`}
                className="font-serif text-[1.83rem] leading-none font-normal tracking-[-0.033em] sm:text-[2.02rem]"
            >
                {children}
            </h2>
            {aside}
        </div>
    );
}

type TagListProps = {
    tags: readonly string[];
    className?: string;
};

export function TagList({ tags, className = "mt-4" }: TagListProps) {
    return (
        <ul className={`flex flex-wrap gap-1.5 ${className}`.trim()}>
            {tags.map((tag) => (
                <li key={tag} className="chip">
                    {tag}
                </li>
            ))}
        </ul>
    );
}

export function Hero() {
    return (
        <section id="about" aria-labelledby="about-heading">
            <div className="p-1.5">
                <img
                    src="/banner.svg"
                    alt="An illustrated city skyline at dusk, lit windows glowing under a teal-to-amber sky."
                    width={1640}
                    height={436}
                    fetchPriority="high"
                    className="block aspect-[3.76/1] max-[580px]:aspect-[2.9/1] w-full rounded-[3px] bg-[#0d0f11] object-cover"
                />
            </div>

            <div className="ruled gutter flex flex-wrap items-center gap-x-[clamp(0.95rem,2.7vw,1.55rem)] gap-y-3 py-5">
                <div
                    aria-hidden="true"
                    className="grid size-[clamp(72px,11.2vw,106px)] flex-none place-items-center rounded-[11px] border-[3px] border-rule bg-wash"
                >
                    <LogoMark
                        role="presentation"
                        className="h-[58%] w-auto text-ink"
                    />
                </div>
                <div className="min-w-0 flex-1">
                    <h1
                        id="about-heading"
                        className="font-serif text-[clamp(2.5rem,5.1vw,3.58rem)] leading-[0.99] font-normal tracking-[-0.043em]"
                    >
                        {portfolio.headline}
                    </h1>
                    <p className="mt-1 text-[0.94rem] font-medium tracking-[-0.018em] text-body sm:text-[1.05rem]">
                        {portfolio.title}
                    </p>
                    <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[0.69rem] text-muted">
                        <span className="inline-flex items-center gap-1.5">
                            <Pin className="size-3" />
                            {portfolio.location}
                        </span>
                        <span>@{portfolio.handle}</span>
                    </p>
                </div>
                <a
                    href="#work"
                    className="nav-link ml-auto gap-2 px-2 font-mono text-[0.74rem] max-[580px]:hidden"
                >
                    View work <ArrowDown className="size-4" />
                </a>
            </div>
        </section>
    );
}

export function AboutSection() {
    return (
        <section
            id="summary"
            aria-label="Summary"
            className="ruled gutter py-6 sm:py-7"
        >
            <div className="grid items-start gap-6 sm:grid-cols-[minmax(0,1fr)_minmax(0,0.98fr)] sm:gap-8">
                <div>
                    <p className="font-mono text-[0.68rem] font-medium tracking-[0.11em] text-muted uppercase">
                        <span className="mr-2 inline-block h-0.5 w-4 align-middle bg-accent" />
                        {portfolio.punch}
                    </p>
                    <p className="mt-3 text-[1.08rem] leading-snug font-medium tracking-[-0.018em] text-ink sm:text-[1.18rem]">
                        {portfolio.valueProp}
                    </p>
                    <p className="mt-3 text-[0.96rem] leading-[1.56] tracking-[-0.009em] text-body">
                        {portfolio.lede}
                    </p>
                    <ActionLinks actions={portfolio.actions} className="mt-5" />
                    <p className="mt-4 flex items-start gap-2 font-mono text-[0.68rem] leading-relaxed text-muted">
                        <span
                            aria-hidden="true"
                            className="status-dot mt-1.5 inline-block h-1.5 w-1.5 flex-none rounded-full bg-accent"
                        />
                        {portfolio.availability}
                    </p>
                </div>

                <dl className="grid grid-cols-2 overflow-hidden rounded-[5px] border border-dashed border-frame">
                    {portfolio.highlights.map((item, index) => (
                        <div
                            key={item.label}
                            className={[
                                "flex flex-col bg-raised px-3.5 py-3",
                                index % 2 === 1
                                    ? "border-l border-dashed border-frame"
                                    : "",
                                index > 1
                                    ? "border-t border-dashed border-frame"
                                    : "",
                            ].join(" ")}
                        >
                            <dd className="order-1 mb-1 font-serif text-[1.9rem] leading-none tracking-[-0.03em] text-accent-ink">
                                {item.value}
                            </dd>
                            <dt className="order-2 font-mono text-[0.64rem] leading-snug text-muted">
                                {item.label}
                            </dt>
                        </div>
                    ))}
                </dl>
            </div>

            <TagList tags={portfolio.tags} className="mt-6" />
        </section>
    );
}

type ContactCell = {
    label: string;
    value: string;
    href: string;
    icon: ReactNode;
};

const contactCells: ContactCell[] = [
    {
        label: "email",
        value: portfolio.contact.email,
        href: `mailto:${portfolio.contact.email}`,
        icon: <Mail />,
    },
    {
        label: "github",
        value: "madvirus-ops",
        href: "https://github.com/madvirus-ops",
        icon: <Github />,
    },
    {
        label: "linkedin",
        value: "in/madvirus",
        href: "https://linkedin.com/in/madvirus",
        icon: <Linkedin />,
    },
    {
        label: "x",
        value: "@1madvirus",
        href: "https://x.com/1madvirus",
        icon: <XLogo />,
    },
    {
        label: "phone",
        value: portfolio.phone.label,
        href: portfolio.phone.href,
        icon: <Phone />,
    },
];

export function ContactSection() {
    return (
        <RevealSection id="contact">
            <SectionHeader id="contact">
                {portfolio.contact.heading}
            </SectionHeader>
            <p className="gutter max-w-[62ch] pb-5 text-[0.96rem] leading-[1.56] text-body">
                {portfolio.contact.body}
            </p>

            <div className="grid border-t border-dashed border-frame sm:grid-cols-2">
                {contactCells.map((cell) => {
                    const external = isExternalHref(cell.href);

                    return (
                        <a
                            key={cell.label}
                            href={cell.href}
                            {...(external
                                ? { target: "_blank", rel: "noreferrer" }
                                : {})}
                            className="group flex min-h-[57px] min-w-0 items-center gap-3 border-b border-dashed border-frame px-[clamp(1rem,2.4vw,1.65rem)] py-2 text-[0.89rem] font-medium transition-colors last:border-b-0 hover:bg-wash sm:nth-[even]:border-l sm:last:nth-[odd]:col-span-2"
                        >
                            <span className="grid size-[31px] flex-none place-items-center rounded-md border border-rule text-[17px]">
                                {cell.icon}
                            </span>
                            <span className="min-w-0 flex-1">
                                <span className="block truncate">
                                    {cell.value}
                                </span>
                                <small className="mt-0.5 block font-mono text-[0.59rem] leading-none text-muted">
                                    {cell.label}
                                </small>
                            </span>
                            <ArrowUpRight className="text-muted transition-colors group-hover:text-accent-ink" />
                        </a>
                    );
                })}
            </div>
        </RevealSection>
    );
}
