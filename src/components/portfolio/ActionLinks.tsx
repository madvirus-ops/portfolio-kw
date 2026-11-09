import { Link } from "@tanstack/react-router";

import { isExternalHref, type Action } from "#/data/portfolio";
import { ArrowRight, ArrowUpRight } from "#/components/portfolio/Icons";

type ActionLinksProps = {
    actions: readonly Action[];
    className?: string;
};

function classesFor(action: Action) {
    return `btn ${action.primary ? "btn-primary" : "btn-secondary"}`;
}

export function ActionLinks({ actions, className = "" }: ActionLinksProps) {
    return (
        <div className={`flex flex-wrap gap-2 ${className}`.trim()}>
            {actions.map((action) => {
                if (action.href.startsWith("/")) {
                    return (
                        <Link
                            key={action.href}
                            to={action.href}
                            className={classesFor(action)}
                        >
                            {action.label}
                            <ArrowRight className="size-4" />
                        </Link>
                    );
                }

                const external = isExternalHref(action.href);

                return (
                    <a
                        key={action.href}
                        href={action.href}
                        className={classesFor(action)}
                        {...(external
                            ? { target: "_blank", rel: "noreferrer" }
                            : {})}
                    >
                        {action.label}
                        {external ? (
                            <ArrowUpRight className="size-4" />
                        ) : (
                            <ArrowRight className="size-4" />
                        )}
                    </a>
                );
            })}
        </div>
    );
}
