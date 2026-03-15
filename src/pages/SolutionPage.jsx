import { Link, Navigate, useParams } from "react-router-dom";
import { PageHero } from "../components/shared";
import { solutionAliases, solutionPages } from "../siteContent";

function SolutionPage() {
  const { slug } = useParams();
  const solution = solutionPages[slug];
  const aliasedSlug = solutionAliases[slug];

  if (!solution && aliasedSlug) {
    return <Navigate to={`/solutions/${aliasedSlug}`} replace />;
  }

  if (!solution) {
    return (
      <main className="mx-auto max-w-4xl px-5 py-28 text-center md:px-8">
        <h1 className="font-display text-5xl text-white">Page not found</h1>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-full border border-brand-orange/60 bg-brand-orange px-6 py-4 text-base font-extrabold text-brand-ink"
        >
          Return home
        </Link>
      </main>
    );
  }

  return (
    <main>
      <PageHero
        eyebrow={solution.eyebrow}
        title={solution.title}
        lead={solution.lead}
        cta={{ label: "Commission this solution", to: "/#contact" }}
      >
        <div className="section-frame p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-orange/80">Overview</p>
          <p className="mt-5 text-lg leading-8 text-slate-300">{solution.intro}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {solution.outputs.map((output) => (
              <span key={output} className="rounded-full border border-white/12 bg-white/[0.03] px-3 py-2 text-sm text-slate-200">
                {output}
              </span>
            ))}
          </div>
        </div>
      </PageHero>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-5 lg:grid-cols-3">
          {solution.features.map((feature) => (
            <article key={feature.title} className="rounded-[2rem] bg-[#f4f1eb] p-6 text-brand-ink shadow-[0_24px_60px_rgba(2,6,23,0.22)]">
              <div className="consulting-card-illustration" />
              <h2 className="mt-6 font-display text-4xl">{feature.title}</h2>
              <p className="mt-4 text-base leading-8 text-slate-700">{feature.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
        <div className="section-frame flex flex-col gap-6 p-7 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="section-kicker">Related pages</p>
            <h3 className="mt-4 font-display text-4xl text-white">Useful next reads for this solution area.</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {solution.related.map((path) => (
              <Link
                key={path}
                to={path}
                className="inline-flex rounded-full border border-white/12 px-5 py-3 text-sm font-bold text-white transition hover:border-brand-orange/60 hover:text-brand-orange"
              >
                {path.includes("net-sentiment")
                  ? "Net sentiment"
                  : path.includes("case-studies")
                    ? "Case studies"
                    : path.includes("labelling")
                      ? "Context-specific labels"
                      : "Open page"}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default SolutionPage;
