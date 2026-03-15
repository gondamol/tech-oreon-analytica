import { useMemo, useState } from "react";
import { caseStudies } from "../siteContent";
import { PageHero } from "../components/shared";

const filters = ["All", ...new Set(caseStudies.map((item) => item.category))];

function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const visibleStudies = useMemo(
    () =>
      activeFilter === "All"
        ? caseStudies
        : caseStudies.filter((item) => item.category === activeFilter),
    [activeFilter]
  );

  return (
    <main>
      <PageHero
        eyebrow="Resources"
        title="Selected case studies and"
        accent="delivery patterns"
        lead="These are not full client disclosures. They are structured examples of the research, dashboarding and intelligence patterns our founders have helped deliver and now bring into Tech Oreon work."
      >
        <div className="section-frame p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-orange/80">How to use this page</p>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            Filter by category to see the types of problems, methods and outputs we can translate into new work
            for your organisation.
          </p>
        </div>
      </PageHero>

      <section className="mx-auto max-w-7xl px-5 py-10 md:px-8">
        <div className="flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-5 py-3 text-sm font-semibold transition ${
                activeFilter === filter
                  ? "border-brand-orange bg-brand-orange text-brand-ink"
                  : "border-white/12 bg-white/[0.03] text-white hover:border-brand-orange/40"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {visibleStudies.map((study) => (
            <article key={study.title} className="section-frame h-full p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-orange/80">{study.category}</p>
              <h2 className="mt-4 font-display text-4xl text-white">{study.title}</h2>
              <p className="mt-5 text-base leading-8 text-slate-300">{study.summary}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {study.methods.map((method) => (
                  <span key={method} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-slate-200">
                    {method}
                  </span>
                ))}
              </div>
              <div className="mt-6 rounded-[1.5rem] border border-white/8 bg-brand-panel p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Outcome pattern</p>
                <p className="mt-3 text-base leading-7 text-slate-300">{study.outcome}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default CaseStudiesPage;
