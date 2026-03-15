import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { LabelExampleGraphic, OrbitTaxonomyGraphic, PageHero, SectionIntro } from "../components/shared";
import { labels } from "../siteContent";

function ContextLabelsPage() {
  const [activeLabel, setActiveLabel] = useState("Sentiment");
  const selectedLabel = useMemo(
    () => labels.find((item) => item.name === activeLabel) ?? labels[0],
    [activeLabel]
  );

  return (
    <main>
      <PageHero
        eyebrow="Resource article"
        title="Make data meaningful with"
        accent="context-specific labelling"
        lead="Labels are the backbone of turning unstructured comments, calls, social posts and open-text survey responses into something leaders can compare, summarise and act on."
        cta={{ label: "See net sentiment next", to: "/labels/net-sentiment" }}
        secondaryCta={{ label: "Explore case studies", to: "/resources/case-studies" }}
      >
        <div className="rounded-[2.2rem] bg-[#f4f1eb] p-6 text-brand-ink shadow-[0_30px_70px_rgba(2,6,23,0.25)] md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Why this matters</p>
          <h2 className="mt-4 font-display text-5xl leading-[0.98]">Structure gives messy feedback real decision value.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            Without a strong taxonomy, the same citizen concern can look like noise in one report and a warning
            signal in another. Context-aware labelling keeps meaning consistent.
          </p>
        </div>
      </PageHero>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="rounded-[2.4rem] bg-[#f4f1eb] p-6 text-brand-ink shadow-[0_30px_70px_rgba(2,6,23,0.22)] md:p-10">
          <div className="mx-auto max-w-4xl text-center">
            <SectionIntro
              kicker="Label library"
              title="Choose the meaning your data needs"
              body="Different projects need different labels. A public opinion tracker will not classify language the same way as a customer experience audit or a service-delivery listening program."
              align="center"
              tone="ink"
            />
          </div>

          <div className="mt-10 grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
            <div className="grid gap-4 md:grid-cols-2">
              {labels.map((label) => (
                <button
                  key={label.name}
                  type="button"
                  onClick={() => setActiveLabel(label.name)}
                  className={`rounded-full border px-5 py-4 text-center text-lg font-medium transition ${
                    activeLabel === label.name
                      ? "border-brand-ink bg-brand-ink text-white"
                      : "border-brand-ink text-brand-ink hover:bg-brand-ink/5"
                  }`}
                >
                  {label.name}
                </button>
              ))}
            </div>

            <div className="rounded-[2rem] bg-brand-ink p-6 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-orange/80">Selected label</p>
              <h3 className="mt-3 font-display text-5xl">{selectedLabel.name}</h3>
              <p className="mt-5 text-lg leading-8 text-slate-200">{selectedLabel.short}</p>
              <p className="mt-5 text-base leading-7 text-slate-300">{selectedLabel.detail}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {selectedLabel.outputs.map((output) => (
                  <span key={output} className="rounded-full border border-white/12 bg-white/[0.04] px-3 py-2 text-sm text-slate-200">
                    {output}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center">
          <OrbitTaxonomyGraphic />
          <div>
            <p className="section-kicker">Why it works</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-white md:text-6xl">
              Domain-aware taxonomies make analysis more useful and more honest.
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                "Combines AI measurement with advanced human judgement",
                "Applies labels that fit local contexts and real sectors",
                "Supports multilingual interpretation and subtle nuance",
                "Maintains consistency across thousands of data points"
              ].map((point) => (
                <div key={point} className="glass-card">
                  <p className="text-base leading-7 text-slate-200">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-center">
          <div>
            <p className="section-kicker">Example</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-white md:text-5xl">
              A single statement can contain more than one signal.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              That is exactly why context-specific labelling matters. People often express support and
              frustration at the same time. Good labelling preserves nuance instead of flattening it.
            </p>
          </div>
          <LabelExampleGraphic />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
        <div className="section-frame flex flex-col gap-6 p-7 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="section-kicker">Next step</p>
            <h3 className="mt-4 font-display text-4xl text-white">Put a score on the mood without losing context.</h3>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
              Net sentiment is one of the clearest ways to turn labelled emotion into a trend you can compare over
              time.
            </p>
          </div>
          <Link
            to="/labels/net-sentiment"
            className="inline-flex items-center justify-center rounded-full border border-brand-orange/60 bg-brand-orange px-7 py-4 text-base font-extrabold text-brand-ink transition hover:-translate-y-1"
          >
            Open net sentiment
          </Link>
        </div>
      </section>
    </main>
  );
}

export default ContextLabelsPage;
