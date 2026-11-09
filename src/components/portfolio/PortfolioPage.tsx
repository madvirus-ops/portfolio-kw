import { useCallback, useEffect, useState } from "react";

import { portfolio, sectionIds } from "#/data/portfolio";
import { AboutSection, ContactSection, Hero } from "#/components/portfolio/ContentSections";
import { CommandPalette } from "#/components/portfolio/CommandPalette";
import { ConsoleEasterEgg } from "#/components/portfolio/ConsoleEasterEgg";
import { ExperienceSection } from "#/components/portfolio/ExperienceSection";
import { Footer } from "#/components/portfolio/Footer";
import { Masthead } from "#/components/portfolio/Masthead";
import { SkillsSection } from "#/components/portfolio/SkillsSection";
import { WorkSection } from "#/components/portfolio/WorkSection";
import { useActiveSection } from "#/hooks/useActiveSection";

const projectIds = new Set<string>(portfolio.projects.map((p) => p.id));

function projectIdFromHash() {
    const id = window.location.hash.slice(1);
    return projectIds.has(id) ? id : null;
}

export function PortfolioPage() {
    const activeId = useActiveSection(sectionIds);
    const [openId, setOpenId] = useState<string | null>(null);
    const [query, setQuery] = useState("");
    const [status, setStatus] = useState("all");

    // Project case studies open in a panel and are deep-linkable via #id, so
    // links from the experience list, the command palette and search results
    // keep working.
    useEffect(() => {
        const sync = () => setOpenId(projectIdFromHash());
        sync();
        window.addEventListener("hashchange", sync);
        return () => window.removeEventListener("hashchange", sync);
    }, []);

    const openProject = useCallback((id: string) => {
        window.history.replaceState(null, "", `#${id}`);
        setOpenId(id);
    }, []);

    const closeProject = useCallback(() => {
        setOpenId(null);
        if (projectIdFromHash()) {
            window.history.replaceState(null, "", "#work");
        }
    }, []);

    const pickTool = useCallback((tool: string) => {
        setStatus("all");
        setQuery(tool);
        document
            .getElementById("work")
            ?.scrollIntoView({ block: "start" });
        window.history.replaceState(null, "", "#work");
    }, []);

    return (
        <>
            <a
                href="#summary"
                className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded focus:bg-ink focus:px-4 focus:py-2.5 focus:text-sm focus:text-paper"
            >
                Skip to content
            </a>

            <Masthead activeId={activeId} />

            <main className="shell">
                <Hero />
                <AboutSection />
                <ExperienceSection />
                <WorkSection
                    query={query}
                    onQueryChange={setQuery}
                    status={status}
                    onStatusChange={setStatus}
                    openId={openId}
                    onOpen={openProject}
                    onClose={closeProject}
                />
                <SkillsSection onPickTool={pickTool} />
                <ContactSection />
            </main>

            <Footer />
            <CommandPalette />
            <ConsoleEasterEgg />
        </>
    );
}
