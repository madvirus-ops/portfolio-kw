import { portfolio } from "#/data/portfolio";
import {
    RevealSection,
    SectionHeader,
} from "#/components/portfolio/ContentSections";

const projectNames = new Map(
    portfolio.projects.map((project) => [project.id, project.name] as const),
);

export function ExperienceSection() {
    return (
        <RevealSection id="experience">
            <SectionHeader id="experience">Experience</SectionHeader>

            <div className="gutter pt-2 pb-7">
                <ol className="timeline">
                    {portfolio.experience.map((entry) => (
                        <li key={entry.id} className="timeline-item">
                            <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                                <h3 className="text-[1.05rem] leading-snug font-semibold tracking-[-0.03em]">
                                    {entry.role}
                                    <span className="font-normal text-muted">
                                        {" "}
                                        at{" "}
                                    </span>
                                    {entry.orgHref ? (
                                        <a
                                            href={entry.orgHref}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-accent-ink underline decoration-accent/40 underline-offset-[3px] transition-colors hover:decoration-accent"
                                        >
                                            {entry.org}
                                        </a>
                                    ) : (
                                        <span>{entry.org}</span>
                                    )}
                                </h3>
                                <span className="shrink-0 font-mono text-[0.68rem] text-muted tabular-nums">
                                    {entry.employmentType
                                        ? `${entry.employmentType} · `
                                        : ""}
                                    {entry.period}
                                </span>
                            </div>
                            <p className="mt-1.5 max-w-[62ch] text-[0.9rem] leading-[1.5] text-body">
                                {entry.summary}
                            </p>
                            {entry.projectIds?.length ? (
                                <div className="mt-2 flex flex-wrap gap-1.5">
                                    {entry.projectIds.map((projectId) => (
                                        <a
                                            key={projectId}
                                            href={`#${projectId}`}
                                            className="chip"
                                        >
                                            {projectNames.get(projectId) ??
                                                projectId}
                                        </a>
                                    ))}
                                </div>
                            ) : null}
                        </li>
                    ))}
                </ol>
            </div>
        </RevealSection>
    );
}
