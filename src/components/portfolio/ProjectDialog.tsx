import { useEffect, useRef } from "react";

import type { Project } from "#/data/portfolio";
import { DiffBlock } from "#/components/portfolio/DiffBlock";
import { ArrowUpRight, Close } from "#/components/portfolio/Icons";

type ProjectDialogProps = {
    project: Project;
    open: boolean;
    onClose: () => void;
};

function stripProtocol(href: string) {
    return href.replace(/^https?:\/\/(www\.)?/, "");
}

export function statusPillClass(status: Project["status"]) {
    switch (status) {
        case "production":
        case "maintained":
            return "bg-accent-wash text-accent-ink";
        case "go_live":
            return "bg-info-wash text-info-ink";
        case "wip":
            return "bg-warn-wash text-warn-ink";
        default:
            return "bg-wash text-muted";
    }
}

export function statusText(project: Project) {
    return project.statusLabel.replace(/^●\s*/, "");
}

function LinkRow({ href, label }: { href: string; label: string }) {
    return (
        <li>
            <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-11 items-center justify-between gap-3 border-b border-quiet py-2 font-medium text-ink transition-colors hover:text-accent-ink"
            >
                <span className="min-w-0 truncate">
                    <span className="mr-2 font-mono text-[0.7rem] font-normal text-muted">
                        {label}
                    </span>
                    {stripProtocol(href)}
                </span>
                <ArrowUpRight className="size-4 flex-none text-muted" />
            </a>
        </li>
    );
}

export function ProjectDialog({ project, open, onClose }: ProjectDialogProps) {
    const ref = useRef<HTMLDialogElement>(null);
    const headingId = `${project.id}-panel-heading`;

    useEffect(() => {
        const dialog = ref.current;
        if (!dialog) {
            return;
        }

        if (open && !dialog.open) {
            dialog.showModal();
        } else if (!open && dialog.open) {
            dialog.close();
        }
    }, [open]);

    const stackItems = project.stack
        .split(/\s*[,·]\s*/)
        .filter((item) => item.length > 0);

    const links = [
        project.site ? { label: "site", href: project.site } : null,
        project.companySite
            ? { label: "company", href: project.companySite }
            : null,
        project.repo ? { label: "repo", href: project.repo } : null,
    ].filter((link): link is { label: string; href: string } => link !== null);

    return (
        <dialog
            ref={ref}
            className="panel"
            aria-labelledby={headingId}
            onClose={onClose}
            onClick={(event) => {
                // The dialog has no padding, so a click on the dialog element
                // itself can only be a click on the backdrop.
                if (event.target === event.currentTarget) {
                    onClose();
                }
            }}
        >
            <div className="flex min-h-[52px] flex-none items-center justify-between gap-4 border-b border-rule py-0 pr-2.5 pl-[clamp(1rem,3vw,2.1rem)]">
                <span className="truncate font-mono text-[0.7rem] text-muted">
                    ~/projects/{project.fileName}
                </span>
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close panel"
                    className="grid size-10 place-items-center rounded text-[1.15rem] text-body transition-colors hover:bg-wash"
                >
                    <Close />
                </button>
            </div>

            <div className="min-h-0 overflow-auto overscroll-contain">
                <article className="p-[clamp(1.25rem,3.3vw,2.2rem)]">
                    <p className="mb-3 flex flex-wrap items-center gap-2 font-mono text-[0.66rem] tracking-[0.065em] text-muted uppercase">
                        <span
                            className={`pill normal-case tracking-normal ${statusPillClass(project.status)}`}
                        >
                            {statusText(project)}
                        </span>
                        {project.flagship ? <span>flagship</span> : null}
                    </p>
                    <h2
                        id={headingId}
                        tabIndex={-1}
                        className="font-serif text-[clamp(2.5rem,5vw,3.6rem)] leading-none font-normal tracking-[-0.04em] outline-none"
                    >
                        {project.name}
                    </h2>
                    <p className="mt-2 font-mono text-[0.69rem] text-muted">
                        {project.role}
                    </p>

                    <p className="mt-5 max-w-[60ch] text-[1.02rem] leading-[1.55] tracking-[-0.012em] text-body">
                        {project.description}
                    </p>

                    {project.diagram ? (
                        <figure className="mt-6">
                            <div className="overflow-hidden rounded-[5px] border border-rule">
                                <img
                                    src={project.diagram.src}
                                    alt={project.diagram.alt}
                                    loading="lazy"
                                    className="block w-full"
                                />
                            </div>
                            {project.diagram.caption ? (
                                <figcaption className="mt-2 font-mono text-[0.66rem] leading-snug text-muted">
                                    {project.diagram.caption}
                                </figcaption>
                            ) : null}
                        </figure>
                    ) : null}

                    {project.systems?.length ? (
                        <section className="mt-6">
                            <h3 className="mb-2 text-[1.18rem] font-semibold tracking-[-0.035em]">
                                Systems
                            </h3>
                            <ul className="border-y border-dashed border-rule">
                                {project.systems.map((system) => (
                                    <li
                                        key={system.name}
                                        className="grid gap-1 border-t border-dashed border-rule py-3.5 first:border-t-0 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-4"
                                    >
                                        <div className="font-mono text-[0.75rem] font-medium text-ink">
                                            {system.name}
                                        </div>
                                        <div>
                                            <p className="text-[0.93rem] leading-[1.55] text-body">
                                                {system.summary}
                                            </p>
                                            {system.repo ? (
                                                <a
                                                    href={system.repo}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="mt-1 inline-block font-mono text-[0.68rem] text-muted transition-colors hover:text-accent-ink"
                                                >
                                                    repo ·{" "}
                                                    {stripProtocol(system.repo)}
                                                </a>
                                            ) : null}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    ) : null}

                    {project.diff?.length ? (
                        <DiffBlock lines={project.diff} />
                    ) : null}

                    {stackItems.length ? (
                        <div className="mt-6 flex flex-wrap items-center gap-1.5 border-t border-rule pt-4">
                            <span className="mr-1 font-mono text-[0.66rem] tracking-[0.065em] text-muted uppercase">
                                stack
                            </span>
                            {stackItems.map((item) => (
                                <span key={item} className="chip bg-wash">
                                    {item}
                                </span>
                            ))}
                        </div>
                    ) : null}

                    {links.length ? (
                        <ul className="mt-5 border-t border-quiet">
                            {links.map((link) => (
                                <LinkRow key={link.href} {...link} />
                            ))}
                        </ul>
                    ) : null}
                </article>
            </div>
        </dialog>
    );
}
