import type { DiffLine } from "#/data/portfolio";

type DiffBlockProps = {
    lines: DiffLine[];
};

export function DiffBlock({ lines }: DiffBlockProps) {
    return (
        <div className="diff-scroll mt-4 rounded-[5px] border border-rule bg-wash px-4 py-3.5 font-mono text-[0.75rem] leading-relaxed">
            {lines.map((line) => (
                <div
                    key={line.text}
                    className={
                        line.type === "add" ? "text-accent-ink" : "text-rem"
                    }
                >
                    {line.text}
                </div>
            ))}
        </div>
    );
}
