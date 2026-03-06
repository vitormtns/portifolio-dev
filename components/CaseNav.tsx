import Link from "next/link";
import type { SiteContent } from "@/lib/i18n";

type CaseNavProps = {
  t: SiteContent;
};

const sectionIds = ["problem", "solution", "challenges", "architecture", "results", "learnings"] as const;

export default function CaseNav({ t }: CaseNavProps) {
  const labels = {
    problem: t.caseStudy.problemLabel,
    solution: t.caseStudy.solutionLabel,
    challenges: t.caseStudy.challengesLabel,
    architecture: t.caseStudy.architectureLabel,
    results: t.caseStudy.resultsLabel,
    learnings: t.caseStudy.learningsLabel
  };

  return (
    <aside className="sticky top-24 hidden h-fit lg:block">
      <div className="premium-card rounded-xl p-4">
        <span aria-hidden="true" className="specular" />
        <h2 className="text-[11px] uppercase tracking-[0.24em] text-white/72">{t.caseStudy.navLabel}</h2>
        <nav className="mt-4 space-y-2">
          {sectionIds.map((id) => (
            <Link
              key={id}
              href={`#${id}`}
              className="focus-ring block rounded-md px-2 py-1 text-xs uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-white"
              aria-label={labels[id]}
            >
              {labels[id]}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}
