import { careerValues, openRoles } from "../siteContent";
import { PageHero } from "../components/shared";

function CareersPage() {
  return (
    <main>
      <PageHero
        eyebrow="Careers"
        title="Build evidence that matters"
        accent="in Kenya"
        lead="We are building a team and project roster around research, field operations, analysis, dashboards and data storytelling. If you care about useful evidence, there may be a place for you here."
      >
        <div className="section-frame p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-orange/80">Ways to work with us</p>
          <div className="mt-5 grid gap-4">
            {["Core team roles", "Project-based contracts", "County field roster", "Data and insight fellows"].map((item) => (
              <div key={item} className="rounded-[1.4rem] border border-white/8 bg-white/[0.03] px-4 py-4 text-base text-slate-200">
                {item}
              </div>
            ))}
          </div>
        </div>
      </PageHero>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-5 lg:grid-cols-4">
          {careerValues.map((value) => (
            <article key={value.title} className="section-frame p-6">
              <h2 className="font-display text-3xl text-white">{value.title}</h2>
              <p className="mt-4 text-base leading-8 text-slate-300">{value.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 md:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="section-kicker">Open roles and rosters</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-white md:text-5xl">
              The current doors into the team.
            </h2>
          </div>
          <a
            href="mailto:info@techoreonanalytica.com?subject=Career%20Interest"
            className="inline-flex items-center justify-center rounded-full border border-brand-orange/60 bg-brand-orange px-6 py-3 text-sm font-extrabold text-brand-ink transition hover:-translate-y-1"
          >
            Send your interest
          </a>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {openRoles.map((role) => (
            <article key={role.title} className="section-frame p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-orange/80">{role.type}</p>
              <h3 className="mt-4 font-display text-4xl text-white">{role.title}</h3>
              <p className="mt-5 text-base leading-8 text-slate-300">{role.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 pt-20 md:px-8">
        <div className="section-frame p-7">
          <p className="section-kicker">No exact fit yet?</p>
          <h3 className="mt-4 font-display text-4xl text-white">Join the future roster anyway.</h3>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">
            If you are strong in field leadership, data analysis, visual storytelling, multilingual interviewing
            or research operations, send your profile and let us know where you fit best.
          </p>
        </div>
      </section>
    </main>
  );
}

export default CareersPage;
