import { useEffect, useMemo, useRef } from "react";

import { portfolio, type Project } from "#/data/portfolio";
import { RevealSection } from "#/components/portfolio/ContentSections";
import {
    ProjectDialog,
    statusPillClass,
    statusText,
} from "#/components/portfolio/ProjectDialog";
import { ArrowRight, Close, Search } from "#/components/portfolio/Icons";

type WorkSectionProps = {
    query: string;
    onQueryChange: (query: string) => void;
    status: string;
    onStatusChange: (status: string) => void;
    openId: string | null;
    onOpen: (id: string) => void;
    onClose: () => void;
};

const statusOptions: { value: string; label: string }[] = [
    { value: "all", label: "All statuses" },
    { value: "live", label: "In production" },
    { value: "go_live", label: "Going live" },
    { value: "wip", label: "In progress" },
    { value: "sunset", label: "Sunset" },
];

function matchesStatus(project: Project, status: string) {
    if (status === "all") {
        return true;
    }
    if (status === "live") {
        return project.status === "production" || project.status === "maintained";
    }
    return project.status === status;
}

export function matchesQuery(project: Project, query: string) {
    const q = query.trim().toLowerCase();
    if (!q) {
        return true;
    }
    return [
        project.name,
        project.summary,
        project.role,
        project.stack,
        project.description,
    ]
        .join(" ")
        .toLowerCase()
        .includes(q);
}

export function WorkSection({
    query,
    onQueryChange,
    status,
    onStatusChange,
    openId,
    onOpen,
    onClose,
}: WorkSectionProps) {
    const searchRef = useRef<HTMLInputElement>(null);

    // "/" jumps to search, unless the user is already typing somewhere.
    useEffect(() => {
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key !== "/" || event.metaKey || event.ctrlKey) {
                return;
            }
            const target = event.target as HTMLElement | null;
            if (
                target &&
                (target.tagName === "INPUT" ||
                    target.tagName === "TEXTAREA" ||
                    target.tagName === "SELECT" ||
                    target.isContentEditable)
            ) {
                return;
            }
            event.preventDefault();
            searchRef.current?.focus();
            searchRef.current?.scrollIntoView({ block: "center" });
        };

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, []);

    const projects = portfolio.projects as readonly Project[];
    const visible = useMemo(
        () =>
            projects.filter(
                (project) =>
                    matchesStatus(project, status) &&
                    matchesQuery(project, query),
            ),
        [projects, status, query],
    );
    const filtered = query.trim() !== "" || status !== "all";

    return (
        <RevealSection id="work">
            <div className="gutter flex flex-wrap items-center justify-between gap-x-4 gap-y-3 pt-3.5 pb-3">
                <div className="flex items-center gap-3">
                    <h2
                        id="work-heading"
                        className="font-serif text-[1.83rem] leading-none font-normal tracking-[-0.033em] sm:text-[2.02rem]"
                    >
                        Work
                    </h2>
                    <span className="rounded border border-rule bg-wash px-1.5 py-1 font-mono text-[0.7rem] leading-none text-muted tabular-nums">
                        {filtered
                            ? `${visible.length}/${projects.length}`
                            : projects.length}
                    </span>
                </div>

                <div className="flex flex-wrap items-center gap-2.5">
                    <label className="relative inline-flex min-h-11 w-[170px] items-center gap-1.5 rounded-md border border-rule bg-raised px-2.5 font-mono text-[0.72rem] text-body focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[var(--focus)] sm:min-h-9">
                        <Search className="size-[0.95rem] flex-none" />
                        <span className="sr-only">Search projects</span>
                        <input
                            ref={searchRef}
                            type="search"
                            value={query}
                            onChange={(event) => onQueryChange(event.target.value)}
                            placeholder="Search work"
                            autoComplete="off"
                            spellCheck={false}
                            className="w-full min-w-0 appearance-none bg-transparent outline-none placeholder:text-muted [&::-webkit-search-cancel-button]:cursor-pointer [&::-webkit-search-decoration]:hidden"
                        />
                        <kbd
                            aria-hidden="true"
                            className="rounded-[3px] border border-rule px-1 font-mono text-[0.66rem] leading-[1.15] text-muted max-sm:hidden"
                        >
                            /
                        </kbd>
                    </label>
                    <label className="relative inline-flex min-h-11 items-center rounded-md border border-rule bg-raised font-mono text-[0.72rem] text-body focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[var(--focus)] sm:min-h-9">
                        <span className="sr-only">Filter by status</span>
                        <select
                            value={status}
                            onChange={(event) =>
                                onStatusChange(event.target.value)
                            }
                            className="appearance-none bg-transparent py-2 pr-3 pl-2.5 outline-none"
                        >
                            {statusOptions.map((option) => (
                                <option
                                    key={option.value}
                                    value={option.value}
                                    className="bg-raised text-ink"
                                >
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </label>
                </div>
            </div>

            {query.trim() !== "" ? (
                <div className="gutter pb-3">
                    <button
                        type="button"
                        onClick={() => onQueryChange("")}
                        className="chip border-accent text-accent-ink"
                    >
                        {query.trim()}
                        <Close className="size-3" />
                        <span className="sr-only">Clear search</span>
                    </button>
                </div>
            ) : null}

            <div className="gutter grid grid-cols-[minmax(0,1fr)_auto] border-y border-dashed border-frame py-2 font-mono text-[0.615rem] font-medium tracking-[0.085em] text-muted uppercase">
                <span>Project</span>
                <span className="max-sm:hidden">Status</span>
            </div>

            <ol aria-label="Projects" className="list-none p-0">
                {visible.map((project) => (
                    <li
                        key={project.id}
                        id={project.id}
                        className="project-row relative scroll-mt-20"
                    >
                        <div className="gutter grid grid-cols-[minmax(0,1fr)_auto] items-start gap-x-4 gap-y-1 py-4 sm:py-[1.15rem]">
                            <div className="min-w-0">
                                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 font-mono text-[0.64rem] text-muted">
                                    <span>{project.role}</span>
                                    {project.flagship ? (
                                        <>
                                            <span
                                                aria-hidden="true"
                                                className="size-[3px] rounded-full bg-current"
                                            />
                                            <span className="text-accent-ink">
                                                flagship
                                            </span>
                                        </>
                                    ) : null}
                                </div>
                                <h3 className="mt-1 text-[1.33rem] leading-[1.15] font-semibold tracking-[-0.045em] sm:text-[1.45rem]">
                                    <a
                                        href={`#${project.id}`}
                                        onClick={(event) => {
                                            event.preventDefault();
                                            onOpen(project.id);
                                        }}
                                        className="after:absolute after:inset-0 after:content-['']"
                                    >
                                        {project.name}
                                    </a>
                                </h3>
                                <p className="mt-1 max-w-[62ch] text-[0.88rem] leading-[1.45] tracking-[-0.012em] text-body">
                                    {project.summary}
                                </p>
                                {project.stack ? (
                                    <p className="mt-2 font-mono text-[0.64rem] leading-snug text-muted">
                                        {project.stack}
                                    </p>
                                ) : null}
                            </div>
                            <div className="flex flex-col items-end gap-3">
                                <span
                                    className={`pill ${statusPillClass(project.status)}`}
                                >
                                    {statusText(project)}
                                </span>
                                <ArrowRight className="size-4 text-muted max-sm:hidden" />
                            </div>
                        </div>
                    </li>
                ))}
            </ol>

            {visible.length === 0 ? (
                <div className="border-b border-dashed border-frame px-5 py-10 text-center">
                    <h3 className="text-[1.35rem] font-semibold tracking-[-0.035em]">
                        No matching projects.
                    </h3>
                    <p className="mt-1 mb-4 text-[0.92rem] text-muted">
                        Try a project name, a technology, or a different status.
                    </p>
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => {
                            onQueryChange("");
                            onStatusChange("all");
                        }}
                    >
                        Clear filters
                    </button>
                </div>
            ) : null}

            <p role="status" className="sr-only">
                {filtered
                    ? `${visible.length} of ${projects.length} projects shown`
                    : ""}
            </p>

            {projects.map((project) => (
                <ProjectDialog
                    key={project.id}
                    project={project}
                    open={openId === project.id}
                    onClose={onClose}
                />
            ))}
        </RevealSection>
    );
}
