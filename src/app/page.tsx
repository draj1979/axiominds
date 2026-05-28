import Image from "next/image";
import { Logo } from "@/components/Logo";
import { Globe } from "@/components/Globe";
import {
  ArrowRight,
  Award,
  Briefcase,
  Cpu,
  Globe as GlobeIcon,
  Linkedin,
  Mail,
  MapPin,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "@/components/Icons";

const NAV = [
  { id: "services", label: "What we do" },
  { id: "why", label: "Why Axiominds" },
  { id: "process", label: "How we work" },
  { id: "about", label: "About" },
];

const SERVICES = [
  {
    Icon: Briefcase,
    title: "GCC hiring support",
    body: "End-to-end recruitment tuned for the realities of building in India. We understand the nuance of GCC culture and global alignment.",
  },
  {
    Icon: Cpu,
    title: "Engineering & AI talent",
    body: "Sourcing developers, data scientists, and AI engineers who drive innovation — not just clear tickets.",
  },
  {
    Icon: ShieldCheck,
    title: "Leadership & niche roles",
    body: "CXOs, VPs, and architects who can lead India operations with global rigor from day one.",
  },
  {
    Icon: TrendingUp,
    title: "Team scaling",
    body: "Strategies for rapid yet sustainable scaling — for both early-stage GCCs and mature centers.",
  },
  {
    Icon: Users,
    title: "Capability building",
    body: "Moving beyond headcount to building genuine technical and operational capabilities in India.",
  },
];

const WHY_FEATURES = [
  {
    Icon: GlobeIcon,
    title: "India as a strategic destination",
    body: "Access to a deep talent pool of engineers, AI experts, and product leaders who can build viable global IP.",
  },
  {
    Icon: Target,
    title: "Deep understanding",
    body: "We align candidates not just with skills, but with your product roadmap and company culture.",
  },
  {
    Icon: Award,
    title: "Quality over volume",
    body: "Precision hiring. Every candidate is rigorously vetted for domain expertise and problem-solving.",
  },
  {
    Icon: Zap,
    title: "Ownership & execution",
    body: "We help you build teams that take ownership of products — reducing the overhead on your onshore team.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Understand vision",
    body: "We dive into your product roadmap, tech stack, and long-term goals to define the right team structure.",
  },
  {
    n: "02",
    title: "Define capabilities",
    body: "We identify specific engineering and leadership capabilities — not just generic job descriptions.",
  },
  {
    n: "03",
    title: "Rigorous sourcing",
    body: "Our domain experts interview and filter candidates so you only meet the top 1% of talent.",
  },
  {
    n: "04",
    title: "Enable & scale",
    body: "We help onboard the team and set up operational frameworks for fast, sustainable growth.",
  },
];

const CLIENTS = [
  "Northwind",
  "Helio",
  "Patagonix",
  "Lumen",
  "Quanta",
  "Verdant",
  "Mira",
  "Strata",
];

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-paper text-ink">
      {/* ═══ NAV ═══════════════════════════════════════════════ */}
      <nav className="ax-nav">
        <div className="mx-auto flex h-20 max-w-[1240px] items-center justify-between px-6 md:px-10">
          <Logo size={36} />
          <div className="hidden gap-7 md:flex">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="text-[14px] font-medium text-fg-1 transition-colors hover:text-spruce-800"
              >
                {n.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="ax-focusable inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[14px] font-semibold text-paper transition-colors hover:bg-spruce-700"
            style={{ background: "var(--ax-spruce-800)" }}
          >
            Partner with us
            <ArrowRight size={16} />
          </a>
        </div>
      </nav>

      {/* ═══ HERO ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute"
          style={{
            top: "-25%",
            right: "-10%",
            width: "60%",
            height: "120%",
            background:
              "radial-gradient(circle, rgba(217,146,104,0.20), transparent 60%)",
          }}
        />
        <div className="relative mx-auto grid max-w-[1240px] items-center gap-10 px-6 py-20 md:grid-cols-[1.1fr_1fr] md:gap-16 md:px-10 md:py-28">
          <div>
            <span className="ax-eyebrow">For modern GCCs</span>
            <h1
              className="ax-display mt-4 text-[42px] md:text-[56px] lg:text-[68px]"
              style={{ textWrap: "balance" }}
            >
              Build your <span className="ax-mark">global capability center</span> with India&apos;s best talent.
            </h1>
            <p className="mt-6 max-w-[540px] text-[17px] leading-[1.65] text-fg-1 md:text-[18px]">
              Axiominds is your strategic partner for hiring, scaling, and
              operating high-quality engineering, AI, and product teams. We move
              beyond transactional staffing to build long-term capabilities.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="ax-focusable inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[14px] font-semibold text-paper transition-colors hover:bg-spruce-700"
                style={{ background: "var(--ax-spruce-800)" }}
              >
                Partner with us
                <ArrowRight size={16} />
              </a>
              <a
                href="#why"
                className="ax-focusable inline-flex items-center gap-2 rounded-full border bg-transparent px-6 py-3.5 text-[14px] font-semibold text-spruce-800 transition-colors hover:bg-saffron-50"
                style={{ borderColor: "var(--ax-spruce-800)" }}
              >
                Why Axiominds
              </a>
            </div>
            <div className="mt-9 flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-fg-2">
              <span>
                <strong className="text-ink">20+</strong> years leadership
              </span>
              <span className="h-1 w-1 rounded-full bg-paper-line" />
              <span>
                <strong className="text-ink">Bangalore</strong>, India
              </span>
              <span className="h-1 w-1 rounded-full bg-paper-line" />
              <span>Not a staffing agency.</span>
            </div>
          </div>

          <div className="relative">
            <Globe />
          </div>
        </div>
      </section>

      {/* ═══ CLIENT TICKER ═════════════════════════════════════ */}
      <section
        className="relative overflow-hidden border-y py-10"
        style={{
          background: "var(--ax-paper-2)",
          borderColor: "var(--ax-paper-line)",
        }}
      >
        <div className="mb-6 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-fg-2">
          Trusted by teams building in India
        </div>
        <div className="flex overflow-hidden">
          <div className="ax-marquee-track flex shrink-0 items-center gap-14 pr-14">
            {[...CLIENTS, ...CLIENTS].map((c, i) => (
              <span
                key={i}
                className="whitespace-nowrap text-[22px] tracking-[-0.01em] text-fg-1 opacity-70"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ══════════════════════════════════════════ */}
      <section id="services" className="mx-auto max-w-[1240px] px-6 py-24 md:px-10 md:py-32">
        <header className="mb-14 max-w-[720px]">
          <span className="ax-eyebrow">What we do</span>
          <h2 className="ax-display mt-4 text-[34px] md:text-[44px]">
            Comprehensive talent for the <span className="ax-mark">modern GCC.</span>
          </h2>
          <p className="mt-5 text-[17px] leading-[1.6] text-fg-1">
            Five tightly-scoped offerings. Pick one, pick all — we work with how
            you&apos;re set up today.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article
              key={s.title}
              className="ax-lift flex flex-col rounded-[20px] border bg-white p-7"
              style={{ borderColor: "var(--ax-paper-line)" }}
            >
              <div
                className="mb-5 grid h-14 w-14 place-items-center rounded-[14px]"
                style={{
                  background: "var(--ax-saffron-100)",
                  color: "var(--ax-spruce-700)",
                }}
              >
                <s.Icon size={24} />
              </div>
              <h3 className="mb-2.5 text-[19px] font-bold tracking-[-0.01em] text-ink">
                {s.title}
              </h3>
              <p className="flex-1 text-[14px] leading-[1.65] text-fg-1">{s.body}</p>
              <a
                href="#contact"
                className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-spruce-800 transition-colors hover:text-saffron-700"
              >
                Talk to us
                <ArrowRight size={14} />
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* ═══ WHY US — DARK SPRUCE ══════════════════════════════ */}
      <section
        id="why"
        className="relative"
        style={{ background: "var(--ax-spruce-800)", color: "var(--ax-paper)" }}
      >
        <div className="mx-auto grid max-w-[1240px] items-start gap-12 px-6 py-24 md:grid-cols-2 md:gap-20 md:px-10 md:py-32">
          <div>
            <span
              className="text-[13px] font-semibold uppercase tracking-[0.14em]"
              style={{ color: "var(--ax-saffron-500)" }}
            >
              Why Axiominds
            </span>
            <h2
              className="mt-4 text-[34px] md:text-[44px]"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                letterSpacing: "-0.025em",
                lineHeight: 1.05,
                color: "var(--ax-paper)",
              }}
            >
              Why India.{" "}
              <span
                style={{
                  color: "var(--ax-saffron-500)",
                  fontStyle: "italic",
                }}
              >
                Why us.
              </span>
            </h2>
            <p
              className="mt-5 max-w-[480px] text-[17px] leading-[1.65]"
              style={{ color: "var(--ax-spruce-100)" }}
            >
              Building a GCC is not about cost arbitrage anymore. It&apos;s about
              access to world-class talent and innovation. We bridge global
              expectations and on-ground execution.
            </p>

            {/* Stats */}
            <div
              className="mt-9 flex flex-wrap gap-10 border-t pt-7"
              style={{ borderColor: "rgba(245,239,226,0.18)" }}
            >
              {[
                { num: "20", suf: "+", lbl: "Years leadership" },
                { num: "100", suf: "%", lbl: "Product focus" },
                { num: "1", suf: "%", lbl: "Top engineers" },
              ].map((s) => (
                <div key={s.lbl}>
                  <div
                    className="leading-none"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 56,
                      color: "var(--ax-saffron-500)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {s.num}
                    <span
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontWeight: 300,
                        fontSize: 32,
                      }}
                    >
                      {s.suf}
                    </span>
                  </div>
                  <div
                    className="mt-2 text-[12px] uppercase tracking-[0.1em]"
                    style={{ color: "var(--ax-spruce-100)" }}
                  >
                    {s.lbl}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {WHY_FEATURES.map((f) => (
              <div
                key={f.title}
                className="flex gap-4 rounded-[20px] border p-6 transition-colors hover:border-[rgba(217,146,104,0.4)]"
                style={{
                  background: "rgba(245,239,226,0.05)",
                  borderColor: "rgba(245,239,226,0.10)",
                }}
              >
                <div
                  className="shrink-0 pt-0.5"
                  style={{ color: "var(--ax-saffron-500)" }}
                >
                  <f.Icon size={22} />
                </div>
                <div>
                  <h4
                    className="mb-1.5 text-[16px] font-bold"
                    style={{ color: "var(--ax-paper)" }}
                  >
                    {f.title}
                  </h4>
                  <p
                    className="text-[14px] leading-[1.6]"
                    style={{ color: "var(--ax-spruce-100)" }}
                  >
                    {f.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS ═══════════════════════════════════════════ */}
      <section id="process" className="mx-auto max-w-[1240px] px-6 py-24 md:px-10 md:py-32">
        <header className="mb-14 max-w-[720px]">
          <span className="ax-eyebrow">How we work</span>
          <h2 className="ax-display mt-4 text-[34px] md:text-[44px]">
            A structured, <span className="ax-mark">strategic</span> approach.
          </h2>
          <p className="mt-5 text-[17px] leading-[1.6] text-fg-1">
            Four phases. No fluffy &ldquo;discovery decks.&rdquo; Each one ends in a
            concrete artifact you can act on.
          </p>
        </header>

        <ol className="grid gap-7 md:grid-cols-4 md:gap-5">
          {STEPS.map((s, i) => (
            <li key={s.n} className="flex flex-row gap-5 md:flex-col">
              <div className="flex shrink-0 flex-col items-center md:w-full md:flex-row">
                <span
                  className="rounded-[14px] px-3.5 py-3 leading-none"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 36,
                    color: "var(--ax-saffron-700)",
                    background: "var(--ax-saffron-100)",
                  }}
                >
                  {s.n}
                </span>
                {i < STEPS.length - 1 && (
                  <span
                    className="hidden md:ml-3 md:block md:h-0.5 md:flex-1"
                    style={{ background: "var(--ax-paper-line)" }}
                  />
                )}
                {i < STEPS.length - 1 && (
                  <span
                    className="my-2 block w-0.5 flex-1 md:hidden"
                    style={{ background: "var(--ax-paper-line)" }}
                  />
                )}
              </div>
              <div className="pt-1 pb-7 md:pb-0">
                <h4 className="mb-1.5 text-[18px] font-bold tracking-[-0.01em] text-ink">
                  {s.title}
                </h4>
                <p className="max-w-[280px] text-[14px] leading-[1.6] text-fg-1">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* ═══ ABOUT (Founder) ═══════════════════════════════════ */}
      <section
        id="about"
        className="relative"
        style={{ background: "var(--ax-paper-2)" }}
      >
        <div className="mx-auto max-w-[1240px] px-6 py-24 md:px-10 md:py-32">
          <div className="mx-auto mb-14 max-w-[760px] text-center">
            <span className="ax-eyebrow">About Axiominds</span>
            <h2 className="ax-display mt-4 text-[34px] md:text-[44px]">
              Born from <span className="ax-mark">a critical gap</span> in the GCC ecosystem.
            </h2>
            <p
              className="mt-5 text-[20px] leading-[1.55] text-fg-1 md:text-[22px]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Modern GCCs don&apos;t just need bodies in seats. They need product owners,
              architects, and AI innovators who can drive global impact from India.
            </p>
            <p
              className="mt-4 text-[20px] leading-[1.55] text-fg-1 md:text-[22px]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Our philosophy is rooted in ownership and execution — helping you build teams
              that are true extensions of your global engineering culture.
            </p>
          </div>

          <div
            className="grid items-center gap-10 rounded-[28px] border bg-white p-8 md:grid-cols-[280px_1fr] md:gap-14 md:p-12"
            style={{ borderColor: "var(--ax-paper-line)" }}
          >
            <div className="relative mx-auto w-full max-w-[280px]">
              <div
                className="overflow-hidden rounded-[20px]"
                style={{
                  border: "4px solid var(--ax-paper)",
                  boxShadow: "0 18px 40px rgba(29,22,18,0.12), 0 6px 14px rgba(29,22,18,0.06)",
                }}
              >
                <Image
                  src="/founder.jpg"
                  alt="Dharam Tiwari"
                  width={280}
                  height={280}
                  className="aspect-square w-full object-cover"
                />
              </div>
              <div
                className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[12px] font-semibold"
                style={{
                  background: "var(--ax-paper)",
                  color: "var(--ax-spruce-800)",
                  boxShadow: "0 2px 6px rgba(29,22,18,0.06), 0 1px 2px rgba(29,22,18,0.04)",
                }}
              >
                <MapPin size={14} />
                Bangalore
              </div>
            </div>
            <div>
              <span className="ax-eyebrow">CEO &amp; founder</span>
              <h3
                className="mt-2 mb-3.5 text-[32px] md:text-[36px]"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 400,
                  letterSpacing: "-0.02em",
                  color: "var(--ax-ink)",
                  lineHeight: 1.1,
                }}
              >
                Dharam Tiwari
              </h3>
              <p className="mb-3.5 text-[15px] leading-[1.65] text-fg-1">
                25+ years across global software and technology. Mumbai-engineering
                graduate; led architecture and engineering programs for Fortune 500
                companies; deep startup experience layered on enterprise rigor.
              </p>
              <p className="mb-5 text-[15px] leading-[1.65] text-fg-1">
                Now focused on Axiominds&apos; mission: enabling GCCs to build
                AI-driven, value-creating teams that set new global standards.
              </p>
              <div className="flex flex-wrap gap-2">
                <a
                  href="#"
                  className="ax-focusable inline-flex items-center gap-2 rounded-full border bg-transparent px-4 py-2.5 text-[13px] font-semibold text-spruce-800 transition-colors hover:bg-saffron-50"
                  style={{ borderColor: "var(--ax-spruce-800)" }}
                >
                  <Linkedin size={14} />
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 text-[13px] font-semibold text-spruce-800 transition-colors hover:text-saffron-700"
                >
                  Read full bio
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CLOSING CTA ═══════════════════════════════════════ */}
      <section id="contact" className="relative mx-auto max-w-[1240px] px-6 py-24 md:px-10 md:py-32">
        <div
          className="relative overflow-hidden rounded-[36px] px-8 py-16 text-center md:px-16 md:py-24"
          style={{
            background:
              "radial-gradient(circle at 30% 20%, rgba(217,146,104,0.24) 0%, transparent 60%), var(--ax-spruce-800)",
            color: "var(--ax-paper)",
          }}
        >
          <span
            className="text-[13px] font-semibold uppercase tracking-[0.14em]"
            style={{ color: "var(--ax-saffron-500)" }}
          >
            Let&apos;s talk
          </span>
          <h2
            className="mx-auto mt-4 max-w-[760px] text-[38px] md:text-[56px]"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              letterSpacing: "-0.025em",
              lineHeight: 1.05,
              color: "var(--ax-paper)",
              textWrap: "balance",
            }}
          >
            Tell us about the team you&apos;re trying to build —{" "}
            <span style={{ color: "var(--ax-saffron-500)", fontStyle: "italic" }}>
              we&apos;ll show you how.
            </span>
          </h2>
          <p
            className="mx-auto mt-5 max-w-[520px] text-[17px] leading-[1.6]"
            style={{ color: "var(--ax-spruce-100)" }}
          >
            A 30-minute intro call. No deck, no pitch — just a working conversation about
            what your GCC could look like and where Axiominds fits.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:hello@axiominds.com"
              className="ax-focusable inline-flex items-center gap-2 rounded-full px-7 py-4 text-[15px] font-semibold transition-colors hover:bg-saffron-400"
              style={{
                background: "var(--ax-saffron-500)",
                color: "var(--ax-spruce-900)",
              }}
            >
              Book a 30-min intro
              <ArrowRight size={16} />
            </a>
            <a
              href="mailto:hello@axiominds.com"
              className="inline-flex items-center gap-2 rounded-full border px-7 py-4 text-[15px] font-semibold transition-colors"
              style={{
                borderColor: "rgba(245,239,226,0.4)",
                color: "var(--ax-paper)",
              }}
            >
              <Mail size={16} />
              hello@axiominds.com
            </a>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ════════════════════════════════════════════ */}
      <footer
        className="border-t"
        style={{
          background: "var(--ax-paper-2)",
          borderColor: "var(--ax-paper-line)",
        }}
      >
        <div className="mx-auto grid max-w-[1240px] gap-10 px-6 py-14 md:grid-cols-[1.5fr_1fr_1fr_1fr] md:px-10">
          <div>
            <Logo size={32} />
            <p className="mt-4 max-w-[320px] text-[13px] leading-[1.6] text-fg-2">
              A strategic advisory and hiring partner for modern GCCs. Not a staffing
              agency.
            </p>
          </div>
          {[
            { h: "Company", items: ["About", "Founder", "Careers", "Press"] },
            { h: "Services", items: ["GCC hiring", "AI talent", "Leadership", "Scaling"] },
            { h: "Reach us", items: ["hello@axiominds.com", "Bangalore, India", "LinkedIn", "Twitter"] },
          ].map((col) => (
            <div key={col.h}>
              <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-fg-2">
                {col.h}
              </div>
              <ul className="space-y-2 text-[13px] text-fg-1">
                {col.items.map((i) => (
                  <li key={i}>
                    <a href="#" className="transition-colors hover:text-spruce-800">
                      {i}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div
          className="border-t"
          style={{ borderColor: "var(--ax-paper-line)" }}
        >
          <div className="mx-auto flex max-w-[1240px] flex-col items-start justify-between gap-3 px-6 py-5 text-[12px] text-fg-2 md:flex-row md:items-center md:px-10">
            <span>© {new Date().getFullYear()} Axiominds. Built with care in Bangalore.</span>
            <div className="flex gap-6">
              <a href="#" className="hover:text-spruce-800">
                Privacy
              </a>
              <a href="#" className="hover:text-spruce-800">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
