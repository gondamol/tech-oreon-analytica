import { Component } from "react";
import { Link } from "react-router-dom";

class RouteErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Route render failed", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="mx-auto max-w-4xl px-5 py-24 md:px-8">
          <div className="section-frame p-8 text-center">
            <p className="section-kicker">Page issue</p>
            <h1 className="mt-4 font-display text-5xl text-white">This page hit a loading problem.</h1>
            <p className="mt-6 text-base leading-8 text-slate-300">
              The app is still running, but this page failed to render cleanly. Try returning home or refreshing
              after the latest update.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/"
                className="inline-flex items-center justify-center rounded-full border border-brand-orange/60 bg-brand-orange px-6 py-4 text-base font-extrabold text-brand-ink transition hover:-translate-y-1"
              >
                Return home
              </Link>
            </div>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}

export default RouteErrorBoundary;
