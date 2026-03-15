import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  credibilityMetrics,
  engineStages,
  founderCards,
  homeResourceCards,
  institutionRibbon,
  labels,
  localityChips,
  methodologyModes,
  navSolutions
} from "../siteContent";
import { CountUp, EngineDiagram, SectionIntro, useReducedMotion } from "../components/shared";

function HomePage() {
  const [activeEngine, setActiveEngine] = useState(1);
  const [activeLabel, setActiveLabel] = useState("Sentiment");
  const [activeMethod, setActiveMethod] = useState(0);
  const [briefForm, setBriefForm] = useState({
    name: "",
    organization: "",
    need: ""
  });
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveEngine((current) => (current + 1) % engineStages.length);
    }, 3600);

    return () => window.clearInterval(timer);
  }, []);

  const selectedLabel = useMemo(
    () => labels.find((item) => item.name === activeLabel) ?? labels[0],
    [activeLabel]
  );
  const selectedMethod = methodologyModes[activeMethod];

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(
      briefForm.organization
        ? `Research inquiry from ${briefForm.organization}`
        : "Research inquiry for Tech Oreon Analytica"
    );
    const body = encodeURIComponent(
      `Name: ${briefForm.name || "-"}\nOrganization: ${briefForm.organization || "-"}\n\nWhat we need:\n${
        briefForm.need || "-"
      }\n`
    );

    return `mailto:info@techoreonanalytica.com?subject=${subject}&body=${body}`;
  }, [briefForm]);

  return (
    <main id="top">
      <section className="relative overflow-hidden">
        <div className="mx-auto grid min-h-[calc(100vh-4.5rem)] max-w-7xl items-center gap-10 px-5 py-16 md:px-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(340px,0.9fr)] lg:py-20">
          <div className="hero-copy order-2 lg:order-1">
            <p className="mb-6 inline-flex rounded-full border border-white/12 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-slate-300">
              Kenya-ready polling, market intelligence and digital insight
            </p>
            <h1 className="max-w-5xl font-display text-5xl leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-[5.7rem]">
              Turn county voices, market signals and public sentiment into
              <span className="mt-2 block italic text-brand-orange">real-time knowledge your team can act on</span>
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
              Tech Oreon Analytica combines researchers, data systems and live intelligence workflows to
              transform raw opinions into structured evidence for campaigns, institutions, brands and
              development partners working across Kenya.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#engine"
                className="inline-flex items-center justify-center rounded-full border border-brand-orange/60 bg-brand-orange px-8 py-4 text-base font-extrabold text-brand-ink transition hover:-translate-y-1 hover:shadow-[0_0_34px_rgba(233,148,20,0.4)]"
              >
                Learn how the engine works
              </a>
              <Link
                to="/resources/news/make-your-data-more-meaningful-with-context-specific-labelling"
                className="inline-flex items-center justify-center rounded-full border border-sky-300/60 px-8 py-4 text-base font-bold text-white transition hover:border-brand-orange/60 hover:text-brand-orange"
              >
                Explore context-specific labels
              </Link>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              <div className="glass-card">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-brand-orange/85">Always on</p>
                <p className="mt-3 text-base leading-7 text-slate-300">
                  Open to new assignments in public opinion, social listening, market studies, dashboards and
                  field deployment support.
                </p>
              </div>
              <div className="glass-card">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-brand-orange/85">Based in Nairobi</p>
                <p className="mt-3 text-base leading-7 text-slate-300">
                  Riverside Drive, with founder experience spanning East Africa and deep field familiarity in
                  Nyanza and beyond.
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="section-frame relative overflow-hidden p-6 md:p-8">
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-brand-orange/85">Live decision board</p>
                  <h2 className="mt-2 font-display text-3xl text-white">Research command center</h2>
                </div>
                <div className="rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-200">
                  Signals refreshing
                </div>
              </div>

              <div className="mt-6 grid gap-4">
                <div className="rounded-[1.8rem] border border-white/8 bg-white/[0.03] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Active tracks</p>
                  <div className="mt-4 grid gap-3">
                    {[
                      ["Public opinion shifts", "Wave-based county trackers and issue movement"],
                      ["Brand reputation watch", "Realtime social sentiment and narrative alerts"],
                      ["Field data visibility", "Supervisor dashboards, callbacks and QC heatmaps"]
                    ].map(([title, text]) => (
                      <div key={title} className="rounded-2xl border border-white/8 bg-brand-panel px-4 py-4">
                        <p className="text-sm font-bold text-white">{title}</p>
                        <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[1.8rem] border border-white/8 bg-white/[0.03] p-5">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">County pulse lanes</p>
                    <span className="text-xs text-slate-500">Kenya focus</span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {localityChips.map((place) => (
                      <span key={place} className="rounded-full border border-brand-blue/35 bg-brand-blue/10 px-3 py-2 text-sm font-medium text-slate-200">
                        {place}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-6 md:px-8" id="signals">
        <div className="grid gap-5 lg:grid-cols-4">
          {credibilityMetrics.map((item) => (
            <CountUp key={item.label} {...item} />
          ))}
        </div>

        <div className="mt-8 overflow-hidden rounded-[2rem] border border-white/8 bg-white/[0.03] py-4">
          <div className="marquee-track">
            {[...institutionRibbon, ...institutionRibbon].map((entry, index) => (
              <span
                key={`${entry}-${index}`}
                className="mx-4 inline-flex items-center gap-4 text-sm font-semibold uppercase tracking-[0.24em] text-slate-300"
              >
                <span className="h-2 w-2 rounded-full bg-brand-orange" />
                {entry}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="engine" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
          <div className="section-frame px-5 py-8 md:px-8">
            <p className="section-kicker">How the Tech Oreon engine works</p>
            <EngineDiagram activeIndex={activeEngine} reduceMotion={reducedMotion} />
          </div>

          <div className="space-y-5">
            <div>
              <p className="section-kicker">Structured intelligence, not raw noise</p>
              <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-white md:text-6xl">
                From messy field inputs to knowledge leaders can trust.
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                This section shows, in plain terms, how Tech Oreon moves from raw Kenyan voices to validated,
                action-ready insight.
              </p>
            </div>

            <div className="grid gap-4">
              {engineStages.map((stage, index) => (
                <button
                  type="button"
                  key={stage.title}
                  onClick={() => setActiveEngine(index)}
                  className={`group rounded-[1.8rem] border p-5 text-left transition ${
                    activeEngine === index
                      ? "border-brand-orange/60 bg-brand-orange/10 shadow-[0_0_32px_rgba(233,148,20,0.18)]"
                      : "border-white/8 bg-white/[0.03] hover:border-brand-blue/30 hover:bg-white/[0.05]"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`flex h-11 w-11 items-center justify-center rounded-full border text-sm font-bold ${
                        activeEngine === index
                          ? "border-brand-orange bg-brand-orange text-brand-ink"
                          : "border-white/12 bg-white/5 text-slate-200"
                      }`}
                    >
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-white">{stage.title}</h3>
                      <p className="mt-2 text-base leading-7 text-slate-300">{stage.summary}</p>
                      <p className="mt-3 text-sm uppercase tracking-[0.22em] text-slate-500">{stage.note}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="rounded-[2.4rem] bg-[#f3eee5] p-6 text-brand-ink shadow-[0_30px_70px_rgba(2,6,23,0.22)] md:p-10">
          <SectionIntro
            kicker="Labels"
            title="Make data meaningful with context-specific labels"
            body="Our labels give unstructured feedback the meaning it needs to become more than information. Instead of just collecting comments, we classify nuance in ways that fit Kenyan public affairs, markets and service-delivery realities."
            tone="ink"
          />

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
              <h3 className="mt-3 font-display text-4xl">{selectedLabel.name}</h3>
              <p className="mt-5 text-lg leading-8 text-slate-200">{selectedLabel.short}</p>
              <p className="mt-5 text-base leading-7 text-slate-300">{selectedLabel.detail}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {selectedLabel.outputs.map((output) => (
                  <span key={output} className="rounded-full border border-white/12 bg-white/[0.04] px-3 py-2 text-sm text-slate-200">
                    {output}
                  </span>
                ))}
              </div>
              <Link
                to="/resources/news/make-your-data-more-meaningful-with-context-specific-labelling"
                className="mt-8 inline-flex items-center gap-3 text-sm font-bold text-brand-orange transition hover:text-brand-sky"
              >
                Learn more about our labels
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-orange text-brand-ink">
                  -&gt;
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionIntro
            kicker="Solutions"
            title="Choose the area closest to the problem in front of you"
            body="Most clients come to us with one urgent question, not a finished brief. These pages make it easier to start in the right place."
          />
          <Link
            to="/consulting"
            className="inline-flex items-center justify-center rounded-full border border-white/12 px-6 py-3 text-sm font-bold text-white transition hover:border-brand-orange/60 hover:text-brand-orange"
          >
            Explore consulting support
          </Link>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {navSolutions.map((solution) => (
            <Link key={solution.to} to={solution.to} className="section-frame block p-6 transition hover:-translate-y-1">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-orange/80">Solution area</p>
              <h3 className="mt-4 font-display text-4xl text-white">{solution.label}</h3>
              <p className="mt-5 text-base leading-8 text-slate-300">{solution.blurb}</p>
              <span className="mt-8 inline-flex text-sm font-bold text-brand-orange">Open page -&gt;</span>
            </Link>
          ))}
        </div>
      </section>

      <section id="methodology" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)]">
          <div className="space-y-5">
          <SectionIntro
            kicker="Polling methodology"
            title="Mixed-mode polling adapted to Kenyan realities"
            body="Our approach combines international mixed-mode practice with Kenyan realities like language switching, WhatsApp behaviour, low-bandwidth environments and on-the-ground field verification."
          />
            <div className="rounded-[2rem] border border-brand-orange/15 bg-brand-orange/8 p-5">
              <p className="text-sm leading-7 text-slate-200">
                We were specifically inspired by published mixed-mode methodology pages that describe combining
                live callers, automated outreach, digital touchpoints and callback logic. We adapt that logic to
                Kenyan polling, field realities and multilingual audiences.
              </p>
              <a
                href="https://www.thetrafalgargroup.org/polling-methodology/"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex text-sm font-bold text-brand-orange transition hover:text-brand-sky"
              >
                View the Trafalgar methodology reference
              </a>
            </div>
          </div>

          <div className="section-frame p-5 md:p-7">
            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {methodologyModes.map((mode, index) => (
                <button
                  type="button"
                  key={mode.name}
                  onClick={() => setActiveMethod(index)}
                  className={`rounded-[1.4rem] border p-4 text-left transition ${
                    activeMethod === index
                      ? "border-brand-orange/60 bg-brand-orange/10"
                      : "border-white/8 bg-white/[0.03] hover:border-brand-blue/35"
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Mode 0{index + 1}</p>
                  <h3 className="mt-3 text-lg font-bold text-white">{mode.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{mode.strap}</p>
                </button>
              ))}
            </div>

            <div className="mt-6 rounded-[1.8rem] border border-white/8 bg-brand-panel p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-orange/85">Selected workflow</p>
              <h3 className="mt-4 font-display text-3xl text-white">{selectedMethod.name}</h3>
              <p className="mt-3 text-base leading-8 text-slate-300">{selectedMethod.detail}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <SectionIntro
          kicker="Resources"
          title="Pages for clients who want to understand the method"
          body="These links go beyond the headline and explain how we think about labels, methodology and delivery."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {homeResourceCards.map((card) => (
            <Link key={card.to} to={card.to} className="section-frame block p-6 transition hover:-translate-y-1">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-orange/80">{card.eyebrow}</p>
              <h3 className="mt-4 font-display text-4xl text-white">{card.title}</h3>
              <p className="mt-5 text-base leading-8 text-slate-300">{card.body}</p>
              <span className="mt-8 inline-flex text-sm font-bold text-brand-orange">Open page -&gt;</span>
            </Link>
          ))}
        </div>
      </section>

      <section id="leadership" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)]">
          <div>
            <SectionIntro
              kicker="Leadership"
              title="Founder-led strategy with research depth and technical execution"
              body="This is not a decorative website front. The people behind Tech Oreon have actually built field systems, managed research portfolios, run data pipelines and delivered dashboards in live institutional environments."
            />
          </div>

          <div className="grid gap-5 xl:grid-cols-2">
            {founderCards.map((founder) => (
              <article key={founder.name} className="section-frame h-full p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-orange/85">{founder.role}</p>
                <h3 className="mt-4 font-display text-4xl text-white">{founder.name}</h3>
                <p className="mt-5 text-base leading-8 text-slate-300">{founder.summary}</p>
                <p className="mt-4 text-base leading-8 text-slate-400">{founder.extras}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {founder.skills.map((skill) => (
                    <span key={skill} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-slate-200">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-4">
                  <a href={founder.cv} className="inline-flex rounded-full border border-brand-orange/50 px-4 py-2 text-sm font-bold text-brand-orange transition hover:border-brand-orange hover:bg-brand-orange hover:text-brand-ink">
                    View CV
                  </a>
                  <a href={founder.email} className="inline-flex rounded-full border border-white/12 px-4 py-2 text-sm font-bold text-white transition hover:border-brand-sky/60 hover:text-brand-sky">
                    Contact directly
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-20 md:px-8 lg:grid-cols-2">
        <Link to="/consulting" className="section-frame block p-7 transition hover:-translate-y-1">
          <p className="section-kicker">Consulting</p>
          <h3 className="mt-4 font-display text-5xl text-white">Bring us in when the brief is still messy.</h3>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
            We help teams shape methodology, build taxonomies, deploy field systems and translate evidence into
            decisions.
          </p>
            <span className="mt-7 inline-flex text-sm font-bold text-brand-orange">Open consulting page -&gt;</span>
          </Link>
        <Link to="/careers" className="section-frame block p-7 transition hover:-translate-y-1">
          <p className="section-kicker">Careers</p>
          <h3 className="mt-4 font-display text-5xl text-white">Build evidence that matters in Kenya.</h3>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
            We are building a team and project roster around research, field operations, analysis and data
            storytelling.
          </p>
            <span className="mt-7 inline-flex text-sm font-bold text-brand-orange">Open careers page -&gt;</span>
          </Link>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]">
          <div className="space-y-5">
            <SectionIntro
              kicker="Commission a study"
              title="Start with a short brief. We will help shape the right design."
              body="Tell us whether you need polling, market intelligence, message testing, social listening, field data collection or a dashboard system. We can turn the brief into a practical methodology fast."
            />

            <div className="grid gap-4 md:grid-cols-2">
              {[
                ["Phone", "+254 703 228 724"],
                ["Email", "info@techoreonanalytica.com"],
                ["Location", "Riverside Drive, Nairobi"],
                ["Website", "techoreonanalytica.com"]
              ].map(([title, value]) => (
                <div key={title} className="glass-card">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-orange/85">{title}</p>
                  <p className="mt-3 text-base leading-7 text-white">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="section-frame p-6 md:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-orange/85">Quick project brief</p>
            <form
              className="mt-6 space-y-4"
              onSubmit={(event) => {
                event.preventDefault();
                window.location.href = mailtoHref;
              }}
            >
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-300">Your name</span>
                <input
                  type="text"
                  value={briefForm.name}
                  onChange={(event) => setBriefForm((current) => ({ ...current, name: event.target.value }))}
                  className="form-input"
                  placeholder="Name"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-300">Organization</span>
                <input
                  type="text"
                  value={briefForm.organization}
                  onChange={(event) =>
                    setBriefForm((current) => ({ ...current, organization: event.target.value }))
                  }
                  className="form-input"
                  placeholder="Organization or team"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-300">What do you need?</span>
                <textarea
                  rows="6"
                  value={briefForm.need}
                  onChange={(event) => setBriefForm((current) => ({ ...current, need: event.target.value }))}
                  className="form-input min-h-36 resize-y"
                  placeholder="Example: county-level public opinion tracker, brand study, issue salience survey, digital sentiment monitor, field data dashboard..."
                />
              </label>
              <div className="flex flex-col gap-4 sm:flex-row">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full border border-brand-orange/60 bg-brand-orange px-6 py-4 text-base font-extrabold text-brand-ink transition hover:-translate-y-1 hover:shadow-[0_0_34px_rgba(233,148,20,0.4)]"
                >
                  Open email brief
                </button>
                <a
                  href="mailto:info@techoreonanalytica.com"
                  className="inline-flex items-center justify-center rounded-full border border-white/12 px-6 py-4 text-base font-bold text-white transition hover:border-brand-sky/60 hover:text-brand-sky"
                >
                  Contact directly
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
