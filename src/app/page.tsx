'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Instrument_Serif } from 'next/font/google';

const serif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const palette = {
  bg: '#F5F1EA',
  bgAlt: '#FAF7F2',
  surface: '#FFFFFF',
  ink: '#1F1E1D',
  inkMuted: '#6B655D',
  border: '#E8E2D5',
  accent: '#C15F3C',
  accentDark: '#A04D2E',
};

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(245, 241, 234, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? `1px solid ${palette.border}` : '1px solid transparent',
      }}
    >
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="CData Insights home">
          <span
            className={`${serif.className} text-2xl tracking-tight`}
            style={{ color: palette.ink }}
          >
            CData<span style={{ color: palette.accent }}>.</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link href="/services" style={{ color: palette.ink }} className="hover:opacity-70 transition-opacity">Services</Link>
          <Link href="/industries" style={{ color: palette.ink }} className="hover:opacity-70 transition-opacity">Industries</Link>
          <Link href="/blogs" style={{ color: palette.ink }} className="hover:opacity-70 transition-opacity">Writing</Link>
          <Link href="/about" style={{ color: palette.ink }} className="hover:opacity-70 transition-opacity">About</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:scale-[1.02]"
            style={{ backgroundColor: palette.ink, color: palette.bg }}
          >
            Book intro call
            <span aria-hidden>→</span>
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2"
            aria-label={open ? 'Close menu' : 'Open menu'}
            style={{ color: palette.ink }}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {open && (
        <div
          className="md:hidden border-t px-6 py-6 space-y-4"
          style={{ backgroundColor: palette.bg, borderColor: palette.border }}
        >
          <Link href="/services" className="block text-base" style={{ color: palette.ink }}>Services</Link>
          <Link href="/industries" className="block text-base" style={{ color: palette.ink }}>Industries</Link>
          <Link href="/blogs" className="block text-base" style={{ color: palette.ink }}>Writing</Link>
          <Link href="/about" className="block text-base" style={{ color: palette.ink }}>About</Link>
          <Link
            href="/contact"
            className="block text-center px-5 py-3 rounded-full text-sm font-medium"
            style={{ backgroundColor: palette.ink, color: palette.bg }}
          >
            Book intro call →
          </Link>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden"
      style={{ backgroundColor: palette.bg }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-4xl">
          <p
            className="text-sm tracking-wide uppercase mb-6"
            style={{ color: palette.inkMuted, letterSpacing: '0.12em' }}
          >
            Data engineering & AI consulting · Toronto
          </p>

          <h1
            className={`${serif.className} text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight mb-8`}
            style={{ color: palette.ink }}
          >
            Modern data platforms,{' '}
            <span className="italic" style={{ color: palette.accent }}>
              shipped by senior engineers.
            </span>
          </h1>

          <p
            className="text-lg md:text-xl leading-relaxed mb-10 max-w-2xl"
            style={{ color: palette.inkMuted }}
          >
            Snowflake migrations, AI agents, and analytics platforms for teams
            that need it built right the first time. No junior staffing, no
            offshore middle-layer — just the people doing the work.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-base font-medium transition-all hover:scale-[1.02]"
              style={{ backgroundColor: palette.accent, color: palette.surface }}
            >
              Book a free assessment
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="#work"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-base font-medium border transition-all hover:bg-white"
              style={{ borderColor: palette.ink, color: palette.ink }}
            >
              See recent work
            </Link>
          </div>
        </div>
      </div>

      <div
        className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ backgroundColor: palette.accent }}
        aria-hidden
      />
    </section>
  );
}

function TrustStrip() {
  const clients = [
    { src: '/logos/meta.avif', alt: 'Meta' },
    { src: '/logos/bn.avif', alt: 'Barnes & Noble' },
    { src: '/logos/nax.avif', alt: 'NielsenIQ' },
    { src: '/logos/lazy.avif', alt: 'Lazada' },
  ];

  return (
    <section
      className="py-16 border-y"
      style={{ backgroundColor: palette.bgAlt, borderColor: palette.border }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <p
          className="text-center text-xs tracking-wider uppercase mb-10"
          style={{ color: palette.inkMuted, letterSpacing: '0.15em' }}
        >
          Senior team has delivered work for
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:gap-x-20">
          {clients.map((c) => (
            <img
              key={c.src}
              src={c.src}
              alt={c.alt}
              className="h-8 md:h-10 w-auto opacity-60 hover:opacity-100 transition-opacity"
              style={{ filter: 'grayscale(100%)' }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      title: 'Snowflake & data platforms',
      body: 'End-to-end Snowflake implementation: schema design, dbt models, security, cost optimization. Migrations from Redshift, BigQuery, IIAS, and on-prem warehouses.',
      href: '/services/data-platform',
    },
    {
      title: 'Data engineering',
      body: 'Production pipelines built with dbt, Airflow, and Fivetran. Real-time streaming with Kafka and Snowpipe. Data quality testing baked in.',
      href: '/services/data-engineering',
    },
    {
      title: 'AI agents & GenAI',
      body: 'Custom AI agents for sales, support, and ops. Anthropic Claude and OpenAI integrations. RAG pipelines, eval harnesses, and production-ready guardrails.',
      href: '/services/ai-ml',
    },
    {
      title: 'Analytics & BI',
      body: 'Dashboards in Looker, Hex, Tableau, Power BI. Semantic layers in dbt. Self-serve analytics setups that survive after we leave.',
      href: '/services/data-visualization',
    },
    {
      title: 'Cloud migration',
      body: 'On-prem to AWS, Azure, GCP. Database migrations with zero downtime. Refactoring legacy stored procedures into modern SQL and Python.',
      href: '/services/data-migration',
    },
    {
      title: 'Data & AI strategy',
      body: 'Roadmaps, vendor selection, and team-building advice. Fixed-fee assessments — you get a deck, an architecture diagram, and a 90-day plan.',
      href: '/services/data-and-ai-strategy',
    },
  ];

  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: palette.bg }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-16">
          <p
            className="text-sm tracking-wide uppercase mb-4"
            style={{ color: palette.accent, letterSpacing: '0.12em' }}
          >
            What we do
          </p>
          <h2
            className={`${serif.className} text-4xl md:text-5xl leading-tight tracking-tight`}
            style={{ color: palette.ink }}
          >
            Six services. One senior team.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: palette.border }}>
          {services.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="group p-8 transition-colors hover:bg-white"
              style={{ backgroundColor: palette.bg }}
            >
              <h3
                className={`${serif.className} text-2xl mb-3`}
                style={{ color: palette.ink }}
              >
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: palette.inkMuted }}>
                {s.body}
              </p>
              <span
                className="inline-flex items-center gap-1 text-sm font-medium transition-transform group-hover:translate-x-1"
                style={{ color: palette.accent }}
              >
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Approach() {
  const pillars = [
    {
      n: '01',
      title: 'Senior engineers only',
      body: 'Every line of code, every architecture decision, every client call — done by someone with 8+ years in the field. We do not staff juniors and bill you for them.',
    },
    {
      n: '02',
      title: 'Fixed-fee discovery',
      body: 'Before any large engagement, we run a paid 2-week assessment with a hard ceiling. You get a deck, a working prototype, and a 90-day plan. Walk away if you do not like it.',
    },
    {
      n: '03',
      title: 'Built to outlast us',
      body: 'Tests, docs, runbooks, CI/CD. We are explicitly trying to make ourselves replaceable on day one — your team should own the work, not depend on us forever.',
    },
  ];

  return (
    <section
      className="py-24 md:py-32 border-y"
      style={{ backgroundColor: palette.bgAlt, borderColor: palette.border }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-16">
          <p
            className="text-sm tracking-wide uppercase mb-4"
            style={{ color: palette.accent, letterSpacing: '0.12em' }}
          >
            How we work
          </p>
          <h2
            className={`${serif.className} text-4xl md:text-5xl leading-tight tracking-tight`}
            style={{ color: palette.ink }}
          >
            The boring stuff that{' '}
            <span className="italic" style={{ color: palette.accent }}>
              actually matters.
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {pillars.map((p) => (
            <div key={p.n}>
              <div
                className={`${serif.className} text-5xl mb-6`}
                style={{ color: palette.accent }}
              >
                {p.n}
              </div>
              <h3
                className={`${serif.className} text-2xl mb-4`}
                style={{ color: palette.ink }}
              >
                {p.title}
              </h3>
              <p className="text-base leading-relaxed" style={{ color: palette.inkMuted }}>
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Work() {
  const projects = [
    {
      tag: 'Open source product',
      title: 'Costly — data platform cost intelligence',
      body: 'A Snowflake + AWS + dbt cost monitoring agent with 25+ connectors and a conversational AI interface. MIT-licensed, in production at cdatainsights.com.',
      stack: 'FastAPI · Next.js · Anthropic · MongoDB',
    },
    {
      tag: 'Data platform migration',
      title: 'Snowflake + dbt + Hex for a national membership org',
      body: 'Migrated a six-figure-member nonprofit off legacy reporting onto a modern Snowflake stack. Phase 1: schema design, dbt models, Hex notebooks for the analytics team.',
      stack: 'Snowflake · dbt · Hex · Fivetran',
    },
    {
      tag: 'Healthcare IT',
      title: 'HIPAA-compliant managed IT for a psychiatry clinic',
      body: 'Endpoint management, device hardening, and Google Workspace security for a multi-practitioner mental health clinic. Atera-managed, 15 devices, 24/7 monitoring.',
      stack: 'Atera · Google Workspace · Windows · macOS',
    },
    {
      tag: 'Public sector',
      title: '13+ government RFP submissions in 2026',
      body: 'Active and submitted bids across federal (NRCan, FNHA), provincial (BCER, WCB Manitoba, Ontario), and municipal (City of Ottawa, Toronto) procurement.',
      stack: 'Data engineering · Web · Analytics · Strategy',
    },
  ];

  return (
    <section id="work" className="py-24 md:py-32" style={{ backgroundColor: palette.bg }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-16">
          <p
            className="text-sm tracking-wide uppercase mb-4"
            style={{ color: palette.accent, letterSpacing: '0.12em' }}
          >
            Recent work
          </p>
          <h2
            className={`${serif.className} text-4xl md:text-5xl leading-tight tracking-tight`}
            style={{ color: palette.ink }}
          >
            What we have shipped lately.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="p-8 md:p-10 rounded-2xl border transition-all hover:shadow-md"
              style={{ backgroundColor: palette.surface, borderColor: palette.border }}
            >
              <p
                className="text-xs tracking-wider uppercase mb-4"
                style={{ color: palette.accent, letterSpacing: '0.15em' }}
              >
                {p.tag}
              </p>
              <h3
                className={`${serif.className} text-2xl md:text-3xl leading-tight mb-4`}
                style={{ color: palette.ink }}
              >
                {p.title}
              </h3>
              <p className="text-base leading-relaxed mb-6" style={{ color: palette.inkMuted }}>
                {p.body}
              </p>
              <p className="text-xs font-mono" style={{ color: palette.inkMuted }}>
                {p.stack}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    {
      q: 'How quickly can you start?',
      a: 'Discovery engagements typically start within one week. Larger build engagements depend on scope — most kick off within 2-3 weeks of signed SOW.',
    },
    {
      q: 'Do you work fixed-fee or T&M?',
      a: 'Discovery and assessments are always fixed-fee. Build engagements are usually fixed-fee per phase with a defined scope, but we offer T&M for open-ended work like ongoing analytics support.',
    },
    {
      q: 'Where are you based and who does the work?',
      a: 'Toronto, Canada. The senior team — Nitin Jain (data engineering) and partners — does the work. We do not subcontract, offshore, or staff juniors against your project.',
    },
    {
      q: 'Can you sign an NDA before the first call?',
      a: 'Yes. Send us yours or we will send ours within 24 hours of request.',
    },
    {
      q: 'Do you support healthcare / HIPAA workloads?',
      a: 'Yes. We run an active HIPAA-compliant managed IT and analytics practice for healthcare clients, with appropriate BAAs and security controls.',
    },
  ];

  return (
    <section
      className="py-24 md:py-32 border-y"
      style={{ backgroundColor: palette.bgAlt, borderColor: palette.border }}
    >
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-16">
          <p
            className="text-sm tracking-wide uppercase mb-4"
            style={{ color: palette.accent, letterSpacing: '0.12em' }}
          >
            Common questions
          </p>
          <h2
            className={`${serif.className} text-4xl md:text-5xl leading-tight tracking-tight`}
            style={{ color: palette.ink }}
          >
            Quick answers.
          </h2>
        </div>

        <div className="space-y-px" style={{ backgroundColor: palette.border }}>
          {items.map((it) => (
            <details
              key={it.q}
              className="group p-6 md:p-8"
              style={{ backgroundColor: palette.bgAlt }}
            >
              <summary
                className={`${serif.className} text-xl md:text-2xl cursor-pointer list-none flex items-center justify-between gap-4`}
                style={{ color: palette.ink }}
              >
                {it.q}
                <span
                  className="text-2xl transition-transform group-open:rotate-45"
                  style={{ color: palette.accent }}
                  aria-hidden
                >
                  +
                </span>
              </summary>
              <p
                className="mt-4 text-base leading-relaxed"
                style={{ color: palette.inkMuted }}
              >
                {it.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: palette.bg }}>
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2
          className={`${serif.className} text-4xl md:text-6xl leading-tight tracking-tight mb-6`}
          style={{ color: palette.ink }}
        >
          Have a data problem worth{' '}
          <span className="italic" style={{ color: palette.accent }}>
            fixing properly?
          </span>
        </h2>
        <p
          className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
          style={{ color: palette.inkMuted }}
        >
          Book a 30-minute intro call. No deck, no pitch — just a senior engineer
          asking the right questions about your stack.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-medium transition-all hover:scale-[1.02]"
          style={{ backgroundColor: palette.accent, color: palette.surface }}
        >
          Book intro call
          <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      className="border-t pt-16 pb-8"
      style={{ backgroundColor: palette.bgAlt, borderColor: palette.border }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2">
            <span
              className={`${serif.className} text-2xl tracking-tight`}
              style={{ color: palette.ink }}
            >
              CData<span style={{ color: palette.accent }}>.</span>
            </span>
            <p
              className="mt-4 text-sm leading-relaxed max-w-xs"
              style={{ color: palette.inkMuted }}
            >
              Data engineering and AI consulting. Toronto-based, senior team
              only. Founded 2024.
            </p>
          </div>

          <div>
            <p className="text-xs tracking-wider uppercase mb-4 font-medium" style={{ color: palette.ink, letterSpacing: '0.1em' }}>Services</p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/data-engineering" className="hover:opacity-70" style={{ color: palette.inkMuted }}>Data Engineering</Link></li>
              <li><Link href="/services/data-platform" className="hover:opacity-70" style={{ color: palette.inkMuted }}>Data Platforms</Link></li>
              <li><Link href="/services/ai-ml" className="hover:opacity-70" style={{ color: palette.inkMuted }}>AI / ML</Link></li>
              <li><Link href="/services/data-migration" className="hover:opacity-70" style={{ color: palette.inkMuted }}>Migration</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-xs tracking-wider uppercase mb-4 font-medium" style={{ color: palette.ink, letterSpacing: '0.1em' }}>Company</p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:opacity-70" style={{ color: palette.inkMuted }}>About</Link></li>
              <li><Link href="/blogs" className="hover:opacity-70" style={{ color: palette.inkMuted }}>Writing</Link></li>
              <li><Link href="/career" className="hover:opacity-70" style={{ color: palette.inkMuted }}>Careers</Link></li>
              <li><Link href="/contact" className="hover:opacity-70" style={{ color: palette.inkMuted }}>Contact</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-xs tracking-wider uppercase mb-4 font-medium" style={{ color: palette.ink, letterSpacing: '0.1em' }}>Legal</p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy-policies" className="hover:opacity-70" style={{ color: palette.inkMuted }}>Privacy</Link></li>
              <li><Link href="/terms-and-conditions" className="hover:opacity-70" style={{ color: palette.inkMuted }}>Terms</Link></li>
              <li><Link href="/security-compliance-certifications" className="hover:opacity-70" style={{ color: palette.inkMuted }}>Security</Link></li>
              <li>
                <a
                  href="https://www.linkedin.com/company/cdatainsights/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70"
                  style={{ color: palette.inkMuted }}
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="pt-8 border-t flex flex-col md:flex-row justify-between gap-4 text-xs"
          style={{ borderColor: palette.border, color: palette.inkMuted }}
        >
          <p>© {new Date().getFullYear()} CData Consulting Inc. All rights reserved.</p>
          <p>Toronto, Canada</p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className={serif.variable} style={{ backgroundColor: palette.bg, minHeight: '100vh' }}>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <Approach />
        <Work />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
