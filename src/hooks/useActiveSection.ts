import { useEffect, useState } from "react";

const ACTIVATION_OFFSET = 120;

export function useActiveSection(sectionIds: readonly string[]) {
    const [activeId, setActiveId] = useState(sectionIds[0] ?? "about");

    useEffect(() => {
        // Keep each id paired with its element, so an id with no element on
        // the page can't shift the lookup onto the wrong section.
        const sections = sectionIds
            .map((id) => ({ id, element: document.getElementById(id) }))
            .filter(
                (entry): entry is { id: string; element: HTMLElement } =>
                    entry.element !== null,
            );

        if (sections.length === 0) {
            return;
        }

        const updateActiveSection = () => {
            let nextActiveIndex = 0;

            sections.forEach(({ element }, index) => {
                if (element.getBoundingClientRect().top < ACTIVATION_OFFSET) {
                    nextActiveIndex = index;
                }
            });

            // The last section is often too short to ever reach the top of the
            // viewport, so at the very bottom of the page it counts as active.
            const atBottom =
                window.innerHeight + window.scrollY >=
                document.documentElement.scrollHeight - 2;
            if (atBottom) {
                nextActiveIndex = sections.length - 1;
            }

            const nextActiveId = sections[nextActiveIndex]?.id;
            if (nextActiveId) {
                setActiveId(nextActiveId);
            }
        };

        updateActiveSection();

        window.addEventListener("scroll", updateActiveSection, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", updateActiveSection);
        };
    }, [sectionIds]);

    return activeId;
}
