import { Link } from "react-router-dom";
import { PageHero, SectionIntro } from "../components/shared";

function NetSentimentPage() {
  return (
    <main>
      <PageHero
        eyebrow="Label framework"
        title="Net sentiment gives decision-makers"
        accent="a cleaner read on public mood"
        lead="Instead of drowning in separate positive and negative percentages, net sentiment turns the balance of mood into a single trend that can be tracked, compared and explained."
        cta={{ label: "Commission a tracker", to: "/consulting" }}
        secondaryCta={{
          label: "Read the labelling article",
          to: "/resources/news/make-your-data-more-meaningful-with-context-specific-labelling"
        }}
      >
        <div className="section-frame p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-orange/80">Simple formula</p>
          <div className="mt-5 rounded-[2rem] border border-white/8 bg-white/[0.03] p-6">
            <p className="font-display text-5xl leading-tight text-white">
              (Positive - Negative) / Total relevant responses x 100
            </p>
            <p className="mt-5 text-base leading-8 text-slate-300">
              The result can be tracked over time, compared by county, or sliced by segment so teams see whether
              mood is improving, holding, or sliding.
            </p>
          </div>
        </div>
      </PageHero>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <SectionIntro
          kicker="Why teams use it"
          title="One score, but still grounded in structured labelling."
          body="Net sentiment is only useful when the underlying labels are dependable. We use it as a summary layer, not a replacement for context."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {[
            ["Polling", "See whether issue handling or message rollout is pushing opinion upward or downward over multiple waves."],
            ["Brands", "Track whether customer mood is recovering after action or worsening despite communications."],
            ["Digital listening", "Compare the emotional direction of online narratives during fast-moving news cycles."]
          ].map(([title, body]) => (
            <article key={title} className="section-frame p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-orange/80">{title}</p>
              <p className="mt-4 text-lg leading-8 text-slate-300">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
          <div className="rounded-[2.4rem] bg-[#f4f1eb] p-7 text-brand-ink shadow-[0_30px_70px_rgba(2,6,23,0.22)]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Illustrative read</p>
            <div className="mt-6 space-y-4">
              {[
                ["Positive responses", "48%"],
                ["Negative responses", "21%"],
                ["Neutral or mixed", "31%"]
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between rounded-full border border-brand-ink px-5 py-4">
                  <span className="text-lg">{label}</span>
                  <span className="text-xl font-bold">{value}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-[1.6rem] bg-brand-ink px-6 py-6 text-white">
              <p className="text-sm uppercase tracking-[0.24em] text-brand-orange/80">Net sentiment</p>
              <p className="mt-3 font-display text-6xl">+27</p>
              <p className="mt-3 text-base leading-7 text-slate-300">
                A positive score, but still worth reading alongside the negative themes to understand where risk
                sits beneath the topline.
              </p>
            </div>
          </div>

          <div>
            <p className="section-kicker">Interpretation</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-white md:text-5xl">
              We use the score to guide action, not to oversimplify reality.
            </h2>
            <div className="mt-8 grid gap-4">
              {[
                ["Above zero", "Mood is net positive, but the detail still matters for vulnerability, risk and issue intensity."],
                ["Near zero", "Opinion is split or unstable. These are the moments when message design and subgroup analysis matter most."],
                ["Below zero", "Negative sentiment outweighs positive feeling and fast response becomes more important."]
              ].map(([title, body]) => (
                <div key={title} className="glass-card">
                  <p className="text-lg font-bold text-white">{title}</p>
                  <p className="mt-3 text-base leading-7 text-slate-300">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
        <div className="section-frame flex flex-col gap-6 p-7 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="section-kicker">Next step</p>
            <h3 className="mt-4 font-display text-4xl text-white">See how we translate measurement into delivery.</h3>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
              Consulting support helps turn these frameworks into field-ready trackers, dashboard systems and
              rapid-response research workflows.
            </p>
          </div>
          <Link
            to="/consulting"
            className="inline-flex items-center justify-center rounded-full border border-brand-orange/60 bg-brand-orange px-7 py-4 text-base font-extrabold text-brand-ink transition hover:-translate-y-1"
          >
            Open consulting
          </Link>
        </div>
      </section>
    </main>
  );
}

export default NetSentimentPage;
