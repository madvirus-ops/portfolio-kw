import { portfolio, type Project } from "#/data/portfolio";
import { matchesQuery } from "#/components/portfolio/WorkSection";
import {
    RevealSection,
    SectionHeader,
} from "#/components/portfolio/ContentSections";

const projects = portfolio.projects as readonly Project[];

// Only offer a filter for tools that actually appear in a project, so a click
// never lands on an empty list.
function hasProjects(tool: string) {
    return projects.some((project) => matchesQuery(project, tool));
}

type SkillsSectionProps = {
    onPickTool: (tool: string) => void;
};

export function SkillsSection({ onPickTool }: SkillsSectionProps) {
    return (
        <RevealSection id="skills">
            <SectionHeader
                id="skills"
                aside={
                    <p className="font-mono text-[0.65rem] text-muted">
                        Select a tool to see matching projects.
                    </p>
                }
            >
                Tech stack
            </SectionHeader>

            <dl className="gutter pb-4">
                {portfolio.skillGroups.map((group) => (
                    <div
                        key={group.label}
                        className="grid items-baseline gap-2 border-t border-dashed border-quiet py-2.5 first:border-t-0 sm:grid-cols-[7.4rem_minmax(0,1fr)]"
                    >
                        <dt className="font-mono text-[0.69rem] leading-snug text-muted max-sm:pt-0">
                            {group.label}
                        </dt>
                        <dd className="flex flex-wrap gap-1.5">
                            {group.items.map((item) =>
                                hasProjects(item) ? (
                                    <button
                                        key={item}
                                        type="button"
                                        onClick={() => onPickTool(item)}
                                        className="chip min-h-8 max-sm:min-h-11"
                                    >
                                        {item}
                                    </button>
                                ) : (
                                    <span
                                        key={item}
                                        className="chip border-dashed text-muted"
                                    >
                                        {item}
                                    </span>
                                ),
                            )}
                        </dd>
                    </div>
                ))}
            </dl>
        </RevealSection>
    );
}
