import { useEffect, useRef, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { navResources, navSolutions } from "../siteContent";
import RouteErrorBoundary from "./RouteErrorBoundary";

const menuGroups = [
  { label: "Solutions", items: navSolutions },
  { label: "Resources", items: navResources }
];

function DesktopMenu({ activeMenu, onToggle }) {
  return (
    <div className="hidden items-center gap-8 lg:flex">
      <NavLink to="/" className="text-sm font-medium text-slate-300 transition hover:text-brand-orange">
        Home
      </NavLink>
      {menuGroups.map((group) => (
        <div key={group.label} className="relative">
          <button
            type="button"
            onClick={() => onToggle((current) => (current === group.label ? null : group.label))}
            className={`flex items-center gap-2 text-sm font-medium transition ${
              activeMenu === group.label ? "text-brand-orange" : "text-slate-300 hover:text-brand-orange"
            }`}
          >
            {group.label}
            <span className={`text-xs transition ${activeMenu === group.label ? "rotate-180" : ""}`}>v</span>
          </button>
        </div>
      ))}
      <NavLink to="/consulting" className="text-sm font-medium text-slate-300 transition hover:text-brand-orange">
        Consulting
      </NavLink>
      <NavLink to="/careers" className="text-sm font-medium text-slate-300 transition hover:text-brand-orange">
        Careers
      </NavLink>
    </div>
  );
}

function MobileMenu({ open, onClose }) {
  const [expanded, setExpanded] = useState("Solutions");

  useEffect(() => {
    if (!open) {
      setExpanded("Solutions");
    }
  }, [open]);

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-40 bg-brand-ink/96 px-5 py-24 lg:hidden">
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-[0_30px_70px_rgba(2,6,23,0.35)]">
        <Link to="/" onClick={onClose} className="mobile-menu-link">
          Home
        </Link>
        {menuGroups.map((group) => (
          <div key={group.label} className="border-t border-white/8">
            <button
              type="button"
              onClick={() => setExpanded((current) => (current === group.label ? "" : group.label))}
              className="mobile-menu-link flex w-full items-center justify-between"
            >
              <span>{group.label}</span>
              <span className={`text-lg transition ${expanded === group.label ? "rotate-180" : ""}`}>^</span>
            </button>
            {expanded === group.label ? (
              <div className="border-t border-white/8 bg-white/[0.02] px-5 py-3">
                {group.items.map((item) => (
                  <Link key={item.to} to={item.to} onClick={onClose} className="mobile-submenu-link">
                    <p className="font-semibold text-white">{item.label}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-400">{item.blurb}</p>
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        ))}
        <Link to="/consulting" onClick={onClose} className="mobile-menu-link border-t border-white/8">
          Consulting
        </Link>
        <Link to="/careers" onClick={onClose} className="mobile-menu-link border-t border-white/8">
          Careers
        </Link>
      </div>
    </div>
  );
}

function SiteLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const location = useLocation();
  const desktopNavRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    setActiveMenu(null);
    setMobileOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (!desktopNavRef.current?.contains(event.target)) {
        setActiveMenu(null);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, []);

  return (
    <div className="site-shell text-slate-100">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="glow-orb left-[5%] top-24" />
        <div className="glow-orb glow-orb-alt right-[6%] top-[28rem]" />
        <div className="glow-orb glow-orb-small bottom-24 right-[24%]" />
      </div>

      <header ref={desktopNavRef} className="sticky top-0 z-50 border-b border-white/8 bg-brand-ink/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/logo-techoroen.jpg"
              alt="Tech Oreon Analytica logo"
              className="h-11 w-11 rounded-2xl border border-white/10 object-cover shadow-[0_0_35px_rgba(15,28,52,0.45)]"
            />
            <div>
              <p className="text-lg font-semibold tracking-tight text-white">Tech Oreon Analytica</p>
              <p className="text-xs uppercase tracking-[0.32em] text-slate-400">Shaping greatness with data</p>
            </div>
          </Link>

          <DesktopMenu activeMenu={activeMenu} onToggle={setActiveMenu} />

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              to="/#contact"
              className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white/90 transition hover:border-brand-orange/60 hover:text-brand-orange"
            >
              Commission research
            </Link>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((current) => !current)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 lg:hidden"
          >
            <div className="flex flex-col gap-1.5">
              <span className={`h-0.5 w-5 rounded-full bg-white transition ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`h-0.5 w-5 rounded-full bg-white transition ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-5 rounded-full bg-white transition ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
        {activeMenu ? (
          <div className="hidden border-t border-white/8 bg-brand-ink/95 shadow-[0_24px_50px_rgba(2,6,23,0.42)] lg:block">
            <div className="mx-auto max-w-7xl px-5 py-5 md:px-8">
              <div className="grid gap-4 lg:grid-cols-[0.5fr_1.5fr]">
                <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-orange/80">{activeMenu}</p>
                  <h2 className="mt-4 font-display text-4xl text-white">
                    {activeMenu === "Solutions" ? "Find the right solution" : "Read how we work"}
                  </h2>
                  <p className="mt-4 text-base leading-7 text-slate-300">
                    {activeMenu === "Solutions"
                      ? "Start with the problem you need solved. Each page shows the kind of work we typically do in that area."
                      : "These pages explain our methods, labels and delivery choices in plain language."}
                  </p>
                </div>
                <div className={`grid gap-3 ${activeMenu === "Solutions" ? "" : "md:grid-cols-2"}`}>
                  {menuGroups
                    .find((group) => group.label === activeMenu)
                    ?.items.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="nav-popover-item"
                        onClick={() => setActiveMenu(null)}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-sm font-bold text-white">{item.label}</p>
                            <p className="mt-2 text-sm leading-6 text-slate-400">{item.blurb}</p>
                          </div>
                          <span className="pt-0.5 text-sm font-bold text-brand-orange">-&gt;</span>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />

      <RouteErrorBoundary>
        <Outlet />
      </RouteErrorBoundary>

      <footer className="border-t border-white/8">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 text-sm text-slate-400 md:px-8 lg:grid-cols-[1.1fr_0.9fr_0.9fr]">
          <div>
            <p className="font-semibold text-white">Tech Oreon Analytica</p>
            <p className="mt-3 max-w-md leading-7">
              Research, polling, market intelligence and data systems designed for Kenyan realities and
              decision-makers who need more than raw data.
            </p>
          </div>
          <div>
            <p className="font-semibold uppercase tracking-[0.2em] text-slate-300">Solutions</p>
            <div className="mt-4 grid gap-3">
              {navSolutions.map((item) => (
                <Link key={item.to} to={item.to} className="transition hover:text-brand-orange">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="font-semibold uppercase tracking-[0.2em] text-slate-300">Resources</p>
            <div className="mt-4 grid gap-3">
              {navResources.map((item) => (
                <Link key={item.to} to={item.to} className="transition hover:text-brand-orange">
                  {item.label}
                </Link>
              ))}
              <Link to="/consulting" className="transition hover:text-brand-orange">
                Consulting
              </Link>
              <Link to="/careers" className="transition hover:text-brand-orange">
                Careers
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default SiteLayout;
