import { Link } from "react-router-dom";
import { consultingServices } from "../siteContent";
import { PageHero } from "../components/shared";

function ConsultingPage() {
  return (
    <main>
      <PageHero
        eyebrow="Consulting"
        title="Your raw data,"
        accent="our expertise, real results"
        lead="We help organisations operationalise their research, intelligence and reporting needs. That includes study design, field systems, custom labelling, digital monitoring, dashboards and insight translation."
        cta={{ label: "Start a consulting brief", to: "/#contact" }}
        secondaryCta={{ label: "See solution pages", to: "/solutions/marketing" }}
      >
        <div className="consulting-illustration section-frame min-h-[24rem] p-8" />
      </PageHero>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-5 lg:grid-cols-3">
          {consultingServices.map((service) => (
            <article key={service.title} className="rounded-[2rem] bg-[#f4f1eb] p-6 text-brand-ink shadow-[0_24px_60px_rgba(2,6,23,0.22)]">
              <div className="consulting-card-illustration" />
              <h2 className="mt-6 font-display text-4xl">{service.title}</h2>
              <p className="mt-4 text-base leading-8 text-slate-700">{service.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]">
          <div>
            <p className="section-kicker">How we engage</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-white md:text-5xl">
              Flexible support for teams that need clarity fast.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["Shape the brief", "We help define the actual decision question, not just the initial request."],
              ["Build the workflow", "We design the methods, labels, dashboards or field controls needed to answer it."],
              ["Deliver for action", "We translate outputs into memos, dashboards and choices leaders can actually use."]
            ].map(([title, body]) => (
              <div key={title} className="glass-card">
                <p className="text-lg font-bold text-white">{title}</p>
                <p className="mt-3 text-base leading-7 text-slate-300">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
        <div className="section-frame flex flex-col gap-6 p-7 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="section-kicker">Commission consulting</p>
            <h3 className="mt-4 font-display text-4xl text-white">If the data problem is still messy, that is where we are most useful.</h3>
          </div>
          <a
            href="mailto:info@techoreonanalytica.com?subject=Consulting%20Inquiry"
            className="inline-flex items-center justify-center rounded-full border border-brand-orange/60 bg-brand-orange px-7 py-4 text-base font-extrabold text-brand-ink transition hover:-translate-y-1"
          >
            Email consulting inquiry
          </a>
        </div>
      </section>
    </main>
  );
}

export default ConsultingPage;
