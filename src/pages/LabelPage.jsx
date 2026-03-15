import { Link, useParams } from "react-router-dom";
import { PageHero, SectionIntro } from "../components/shared";
import { labelPages, labels } from "../siteContent";

function LabelPage() {
  const { slug } = useParams();
  const label = labels.find((item) => item.slug === slug);
  const page = labelPages[slug];

  if (!label || !page) {
    return (
      <main className="mx-auto max-w-4xl px-5 py-28 text-center md:px-8">
        <h1 className="font-display text-5xl text-white">Page not found</h1>
        <Link
          to="/resources/news/make-your-data-more-meaningful-with-context-specific-labelling"
          className="mt-8 inline-flex rounded-full border border-brand-orange/60 bg-brand-orange px-6 py-4 text-base font-extrabold text-brand-ink"
        >
          Return to labels
        </Link>
      </main>
    );
  }

  return (
    <main>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        accent={page.accent}
        lead={page.lead}
        cta={{ label: "Commission this framework", to: "/#contact" }}
        secondaryCta={page.next}
      >
        <div className="section-frame p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-orange/80">Selected label</p>
          <h2 className="mt-4 font-display text-5xl text-white">{label.name}</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">{label.short}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {label.outputs.map((output) => (
              <span key={output} className="rounded-full border border-white/12 bg-white/[0.03] px-3 py-2 text-sm text-slate-200">
                {output}
              </span>
            ))}
          </div>
        </div>
      </PageHero>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <SectionIntro
          kicker="Overview"
          title={`${label.name} labels give structure to this kind of signal`}
          body={page.overview}
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {page.useCases.map(([title, body]) => (
            <article key={title} className="section-frame p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-orange/80">{title}</p>
              <p className="mt-4 text-lg leading-8 text-slate-300">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
          <div className="rounded-[2.4rem] bg-[#f4f1eb] p-7 text-brand-ink shadow-[0_30px_70px_rgba(2,6,23,0.22)]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">What this label helps surface</p>
            <div className="mt-6 grid gap-3">
              {page.signals.map((signal, index) => (
                <div key={signal} className="flex items-center gap-4 rounded-full border border-brand-ink px-5 py-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-ink text-sm font-bold text-white">
                    0{index + 1}
                  </span>
                  <span className="text-lg">{signal}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="section-kicker">Why it matters</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-white md:text-5xl">
              Better labels make analysis easier to trust and easier to use.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">{label.detail}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/resources/news/make-your-data-more-meaningful-with-context-specific-labelling"
                className="inline-flex rounded-full border border-white/12 px-5 py-3 text-sm font-bold text-white transition hover:border-brand-orange/60 hover:text-brand-orange"
              >
                Read the full labels article
              </Link>
              <Link
                to="/resources/case-studies"
                className="inline-flex rounded-full border border-white/12 px-5 py-3 text-sm font-bold text-white transition hover:border-brand-orange/60 hover:text-brand-orange"
              >
                See related case studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
        <div className="section-frame flex flex-col gap-6 p-7 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="section-kicker">Next step</p>
            <h3 className="mt-4 font-display text-4xl text-white">Take this label from framework to delivery.</h3>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
              We can translate this framework into a live tracker, dashboard, field workflow or reporting system for your team.
            </p>
          </div>
          <Link
            to={page.next.to}
            className="inline-flex items-center justify-center rounded-full border border-brand-orange/60 bg-brand-orange px-7 py-4 text-base font-extrabold text-brand-ink transition hover:-translate-y-1"
          >
            {page.next.label}
          </Link>
        </div>
      </section>
    </main>
  );
}

export default LabelPage;
