import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export const useInView = (options) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const target = ref.current;

    if (!target) {
      return undefined;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, options);

    observer.observe(target);

    return () => observer.disconnect();
  }, [options]);

  return [ref, inView];
};

export const useReducedMotion = () => {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setReducedMotion(mediaQuery.matches);

    updateMotionPreference();

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", updateMotionPreference);
      return () => mediaQuery.removeEventListener("change", updateMotionPreference);
    }

    mediaQuery.addListener(updateMotionPreference);
    return () => mediaQuery.removeListener(updateMotionPreference);
  }, []);

  return reducedMotion;
};

export function CountUp({ value, label, detail, prefix = "", suffix = "" }) {
  const [ref, inView] = useInView({ threshold: 0.35 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!inView) {
      return undefined;
    }

    const duration = 1200;
    const start = performance.now();

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(value * eased));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
    return undefined;
  }, [inView, value]);

  return (
    <article ref={ref} className="count-card">
      <p className="text-sm font-semibold uppercase tracking-[0.26em] text-brand-orange/80">{label}</p>
      <h3 className="mt-4 font-display text-5xl leading-none text-white md:text-6xl">
        {prefix}
        {displayValue}
        {suffix}
      </h3>
      <p className="mt-4 text-sm leading-6 text-slate-300">{detail}</p>
    </article>
  );
}

export function EngineDiagram({ activeIndex, reduceMotion }) {
  const rawPaths = [
    "M 70 134 C 70 180, 210 160, 210 252",
    "M 150 134 C 150 190, 210 182, 210 252",
    "M 270 134 C 270 190, 210 182, 210 252",
    "M 350 134 C 350 180, 210 160, 210 252"
  ];
  const spinePath = "M 210 368 L 210 498";
  const leftBranchPath = "M 210 461 L 160 528";
  const rightBranchPath = "M 210 461 L 260 528";
  const capsuleGlow = activeIndex === 1 ? "rgba(54, 121, 255, 0.85)" : "rgba(233, 148, 20, 0.45)";

  return (
    <svg viewBox="0 0 420 630" className="mx-auto h-full max-h-[42rem] w-full max-w-[26rem]">
      <defs>
        <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor={capsuleGlow} floodOpacity="0.55" />
        </filter>
        <filter id="packetGlow" x="-200%" y="-200%" width="400%" height="400%">
          <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="#f59e0b" floodOpacity="0.8" />
        </filter>
      </defs>

      <text x="210" y="42" textAnchor="middle" className="fill-slate-200 text-[22px] font-semibold">
        Raw data
      </text>
      <text x="210" y="66" textAnchor="middle" className="fill-slate-500 text-[12px] uppercase tracking-[0.28em]">
        Calls, surveys, WhatsApp, social and field feeds
      </text>

      {[70, 150, 270, 350].map((cx, index) => (
        <g key={cx}>
          <circle
            cx={cx}
            cy="96"
            r="38"
            fill="transparent"
            stroke={activeIndex === 0 ? "#f59e0b" : "#f8fafc"}
            strokeWidth="4"
            opacity={activeIndex === 0 ? 1 : 0.85}
            className={reduceMotion ? "" : "engine-node-breathe"}
            style={reduceMotion ? undefined : { animationDelay: `${index * 220}ms` }}
          />
          <path
            d={rawPaths[index]}
            fill="none"
            stroke={activeIndex === 0 ? "#f59e0b" : "#e2e8f0"}
            strokeWidth="4"
            opacity={index === 1 || index === 2 ? 0.95 : 0.82}
          />
          {!reduceMotion ? (
            <>
              <path
                d={rawPaths[index]}
                fill="none"
                stroke={activeIndex === 0 ? "#f59e0b" : "#9cd9ff"}
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="18 24"
                opacity="0.35"
                className="engine-flow-trace"
                style={{ animationDelay: `${index * 180}ms` }}
              />
              <circle r="5.5" fill={activeIndex === 0 ? "#f59e0b" : "#9cd9ff"} filter="url(#packetGlow)">
                <animateMotion dur="3.2s" repeatCount="indefinite" begin={`${index * 0.35}s`} path={rawPaths[index]} />
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  dur="3.2s"
                  repeatCount="indefinite"
                  begin={`${index * 0.35}s`}
                />
              </circle>
            </>
          ) : null}
        </g>
      ))}

      <g filter="url(#nodeGlow)" className={reduceMotion ? "" : "engine-core-float"}>
        <rect
          x="170"
          y="192"
          rx="48"
          ry="48"
          width="80"
          height="176"
          fill="rgba(15,28,52,0.95)"
          stroke={activeIndex === 1 ? "#f59e0b" : "#b6f2ff"}
          strokeWidth="4"
          className={reduceMotion ? "" : "engine-shell-pulse"}
        />
        <circle
          cx="210"
          cy="248"
          r="45"
          fill="rgba(255,255,255,0.42)"
          stroke="#f8fafc"
          strokeWidth="4"
          className={reduceMotion ? "" : "engine-core-upper"}
        />
        <circle
          cx="210"
          cy="306"
          r="45"
          fill={activeIndex >= 1 ? "rgba(54, 121, 255, 0.35)" : "rgba(13, 148, 136, 0.28)"}
          stroke="#f8fafc"
          strokeWidth="4"
          className={reduceMotion ? "" : "engine-core-lower"}
        />
        <ellipse
          cx="210"
          cy="278"
          rx="46"
          ry="24"
          fill={activeIndex >= 1 ? "rgba(254, 240, 138, 0.6)" : "rgba(255,255,255,0.14)"}
          stroke="rgba(255,255,255,0.25)"
          strokeWidth="2"
          className={reduceMotion ? "" : "engine-core-wave"}
        />
      </g>

      <g opacity={activeIndex === 1 ? 1 : 0.9}>
        <text x="284" y="274" className="fill-white text-[19px] font-semibold">
          Tech Oreon Engine
        </text>
        <text x="284" y="300" className="fill-slate-400 text-[13px]">
          Human researchers + AI-assisted coding
        </text>
      </g>

      {!reduceMotion ? (
        <>
          <ellipse
            cx="210"
            cy="278"
            rx="62"
            ry="26"
            fill="none"
            stroke="rgba(156, 217, 255, 0.24)"
            strokeWidth="2"
            className="engine-ripple"
          />
          <ellipse
            cx="210"
            cy="278"
            rx="72"
            ry="30"
            fill="none"
            stroke="rgba(233, 148, 20, 0.18)"
            strokeWidth="2"
            className="engine-ripple"
            style={{ animationDelay: "0.7s" }}
          />
        </>
      ) : null}

      <path d={spinePath} fill="none" stroke={activeIndex >= 2 ? "#f59e0b" : "#e2e8f0"} strokeWidth="5" strokeLinecap="round" />
      {!reduceMotion ? (
        <>
          <path
            d={spinePath}
            fill="none"
            stroke={activeIndex >= 2 ? "#f59e0b" : "#9cd9ff"}
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray="18 22"
            opacity="0.36"
            className="engine-flow-trace"
          />
          {[0, 1].map((pulse) => (
            <circle key={`spine-${pulse}`} r="5.5" fill={activeIndex >= 2 ? "#f59e0b" : "#9cd9ff"} filter="url(#packetGlow)">
              <animateMotion dur="2.3s" repeatCount="indefinite" begin={`${pulse * 1.05}s`} path={spinePath} />
              <animate attributeName="opacity" values="0;1;1;0" dur="2.3s" repeatCount="indefinite" begin={`${pulse * 1.05}s`} />
            </circle>
          ))}
        </>
      ) : null}

      <circle
        cx="210"
        cy="430"
        r="31"
        fill="transparent"
        stroke={activeIndex === 2 ? "#f59e0b" : "#f8fafc"}
        strokeWidth="4"
        filter={activeIndex === 2 ? "url(#nodeGlow)" : undefined}
        className={reduceMotion ? "" : "engine-node-breathe"}
      />
      <circle
        cx="160"
        cy="528"
        r="31"
        fill="transparent"
        stroke={activeIndex === 3 ? "#f59e0b" : "#f8fafc"}
        strokeWidth="4"
        className={reduceMotion ? "" : "engine-output-node"}
        style={reduceMotion ? undefined : { animationDelay: "0.3s" }}
      />
      <circle
        cx="260"
        cy="528"
        r="31"
        fill="transparent"
        stroke={activeIndex === 3 ? "#f59e0b" : "#f8fafc"}
        strokeWidth="4"
        className={reduceMotion ? "" : "engine-output-node"}
        style={reduceMotion ? undefined : { animationDelay: "0.6s" }}
      />
      <path d={leftBranchPath} fill="none" stroke={activeIndex === 3 ? "#f59e0b" : "#e2e8f0"} strokeWidth="4" strokeLinecap="round" />
      <path d={rightBranchPath} fill="none" stroke={activeIndex === 3 ? "#f59e0b" : "#e2e8f0"} strokeWidth="4" strokeLinecap="round" />
      {!reduceMotion ? (
        <>
          {[leftBranchPath, rightBranchPath].map((path, index) => (
            <g key={path}>
              <path
                d={path}
                fill="none"
                stroke={activeIndex === 3 ? "#f59e0b" : "#9cd9ff"}
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="16 22"
                opacity="0.34"
                className="engine-flow-trace"
                style={{ animationDelay: `${index * 200}ms` }}
              />
              <circle r="5.5" fill={activeIndex === 3 ? "#f59e0b" : "#9cd9ff"} filter="url(#packetGlow)">
                <animateMotion dur="2.1s" repeatCount="indefinite" begin={`${0.4 + index * 0.5}s`} path={path} />
                <animate attributeName="opacity" values="0;1;1;0" dur="2.1s" repeatCount="indefinite" begin={`${0.4 + index * 0.5}s`} />
              </circle>
            </g>
          ))}
        </>
      ) : null}

      <g opacity={activeIndex >= 2 ? 1 : 0.9}>
        <text x="210" y="594" textAnchor="middle" className="fill-white text-[19px] font-semibold">
          Actionable knowledge
        </text>
        <text x="210" y="618" textAnchor="middle" className="fill-slate-400 text-[13px]">
          Structured dashboards, briefs, maps and message guidance
        </text>
      </g>
    </svg>
  );
}

export function SectionIntro({ kicker, title, body, align = "left", tone = "light" }) {
  const titleColor = tone === "ink" ? "text-brand-ink" : "text-white";
  const bodyColor = tone === "ink" ? "text-slate-700" : "text-slate-300";

  return (
    <div className={align === "center" ? "mx-auto max-w-4xl text-center" : "max-w-3xl"}>
      <p className="section-kicker">{kicker}</p>
      <h2 className={`mt-4 font-display text-4xl leading-tight md:text-6xl ${titleColor}`}>{title}</h2>
      {body ? <p className={`mt-6 text-lg leading-8 ${bodyColor}`}>{body}</p> : null}
    </div>
  );
}

export function PageHero({ eyebrow, title, lead, accent, cta, secondaryCta, children }) {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid min-h-[34rem] max-w-7xl gap-10 px-5 py-16 md:px-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(300px,0.95fr)] lg:items-center lg:py-20">
        <div>
          <p className="mb-6 inline-flex rounded-full border border-white/12 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-slate-300">
            {eyebrow}
          </p>
          <h1 className="font-display text-5xl leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
            {title}
            {accent ? <span className="mt-2 block italic text-brand-orange">{accent}</span> : null}
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">{lead}</p>
          {(cta || secondaryCta) && (
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              {cta ? (
                <Link
                  to={cta.to}
                  className="inline-flex items-center justify-center rounded-full border border-brand-orange/60 bg-brand-orange px-8 py-4 text-base font-extrabold text-brand-ink transition hover:-translate-y-1 hover:shadow-[0_0_34px_rgba(233,148,20,0.4)]"
                >
                  {cta.label}
                </Link>
              ) : null}
              {secondaryCta ? (
                <Link
                  to={secondaryCta.to}
                  className="inline-flex items-center justify-center rounded-full border border-sky-300/60 px-8 py-4 text-base font-bold text-white transition hover:border-brand-orange/60 hover:text-brand-orange"
                >
                  {secondaryCta.label}
                </Link>
              ) : null}
            </div>
          )}
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}

export function OrbitTaxonomyGraphic() {
  return (
    <div className="relative mx-auto flex h-[26rem] w-full max-w-[30rem] items-center justify-center overflow-hidden rounded-[2.2rem] border border-white/8 bg-brand-panel">
      <div className="taxonomy-ring" />
      <div className="taxonomy-center" />
      <div className="taxonomy-orb taxonomy-orb-a" />
      <div className="taxonomy-orb taxonomy-orb-b" />
      <div className="taxonomy-orb taxonomy-orb-c" />
      <div className="taxonomy-orb taxonomy-orb-d" />
      <div className="taxonomy-dot taxonomy-dot-1" />
      <div className="taxonomy-dot taxonomy-dot-2" />
      <div className="taxonomy-dot taxonomy-dot-3" />
      <div className="taxonomy-callout taxonomy-callout-tl">AI measurement with human labelling</div>
      <div className="taxonomy-callout taxonomy-callout-tr">Context-aware taxonomies</div>
      <div className="taxonomy-callout taxonomy-callout-bl">Local language and nuance support</div>
      <div className="taxonomy-callout taxonomy-callout-br">Consistent structure across large datasets</div>
    </div>
  );
}

export function LabelExampleGraphic() {
  return (
    <div className="relative overflow-hidden rounded-[2.1rem] border border-white/8 bg-brand-panel p-6 text-white shadow-[0_24px_60px_rgba(2,6,23,0.35)]">
      <div className="relative mx-auto max-w-xl rounded-[2rem] border-[12px] border-white bg-[#f5f3ef] p-6 text-brand-ink">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-brand-orange/40" />
          <div>
            <p className="text-lg font-semibold">Achieng</p>
            <p className="text-sm text-slate-500">@citizen.voice</p>
          </div>
          <div className="ml-auto text-right text-sm text-slate-400">
            <p>14 July 2026</p>
            <p>8:05am</p>
          </div>
        </div>
        <p className="mt-6 rounded-xl bg-cyan-100/80 p-3 text-[1.15rem] leading-9">
          "The road is still broken, prices are rising, but the new clinic is helping more families than
          before."
        </p>
      </div>
      <div className="label-callout label-callout-top">Label: Mixed sentiment</div>
      <div className="label-callout label-callout-right">Topic: Cost of living and health access</div>
      <div className="label-callout label-callout-bottom">Priority: Service delivery and infrastructure</div>
      <div className="label-callout label-callout-left">Context: Citizens can hold two truths at once</div>
    </div>
  );
}
