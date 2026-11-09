import { useEffect, useRef, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import logoUrl from "@/assets/tesseract-logo.png";

const stats = [
  { value: "6+", label: "Flagship Products" },
  { value: "10", label: "Industries Served" },
  { value: "50+", label: "Technologies" },
  { value: "100%", label: "Lifecycle Managed" },
];

function Tesseract() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 grid place-items-center opacity-60">
      <div
        className="h-64 w-64 [perspective:900px] sm:h-80 sm:w-80"
      >
        <div
          className="animate-tesseract-spin relative h-full w-full"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {[
            "rotateY(0deg) translateZ(120px)",
            "rotateY(90deg) translateZ(120px)",
            "rotateY(180deg) translateZ(120px)",
            "rotateY(270deg) translateZ(120px)",
            "rotateX(90deg) translateZ(120px)",
            "rotateX(-90deg) translateZ(120px)",
          ].map((t) => (
            <span
              key={t}
              className="absolute inset-0 neon-border"
              style={{ transform: t, background: "color-mix(in oklab, var(--neon) 5%, transparent)" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [pointer, setPointer] = useState({ x: 0.5, y: 0.5 });
  const [typed, setTyped] = useState("");
  const full = "Where Precision Meets Perfection";

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setTyped(full.slice(0, i));
      if (i >= full.length) clearInterval(id);
    }, 55);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      setPointer({ x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height });
    };
    el.addEventListener("pointermove", onMove);
    return () => el.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <section id="top" ref={wrapRef} className="relative overflow-hidden pt-40 pb-24 sm:pt-48">
      <div className="absolute inset-0 grid-bg" />
      <div
        className="pointer-events-none absolute h-[520px] w-[520px] rounded-full blur-3xl transition-transform duration-500"
        style={{
          background: "radial-gradient(circle, color-mix(in oklab, var(--neon) 30%, transparent), transparent 65%)",
          left: `calc(${pointer.x * 100}% - 260px)`,
          top: `calc(${pointer.y * 100}% - 260px)`,
        }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full neon-border px-4 py-1.5 font-display text-[10px] tracking-wide text-primary">
            <Sparkles className="h-3 w-3" /> Leading IT Services Provider
          </span>

          <h1 className="mt-6 font-display text-4xl leading-[1.05] font-bold tracking-tight sm:text-6xl">
            We build <span className="text-gradient glow-text">custom software</span> that helps
            businesses thrive in the digital era
          </h1>

          <p className="mt-5 h-7 font-display text-base font-semibold tracking-wide text-foreground">
            {typed}
            <span className="ml-0.5 inline-block h-4 w-[2px] translate-y-0.5 bg-foreground animate-pulse-glow" />
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            At Tesseract Infosystems we blend innovation with execution — bespoke software, web &
            mobile apps, e-commerce and enterprise systems, delivered across the complete product
            lifecycle with efficiency and agility.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-neon)] px-7 py-3 font-display text-xs font-bold tracking-normal text-primary-foreground shadow-[var(--glow-md)] transition-transform hover:scale-105"
            >
              Start a Project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full neon-border px-7 py-3 font-display text-xs font-bold tracking-normal text-primary transition-colors hover:bg-secondary"
            >
              View Our Work
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl neon-border sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-card/60 px-4 py-5 text-center">
                <dt className="font-display text-2xl font-bold text-gradient">{s.value}</dt>
                <dd className="mt-1 text-xs text-muted-foreground">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative grid min-h-[360px] place-items-center sm:min-h-[440px]">
          <div className="absolute h-72 w-72 rounded-full bg-primary/25 blur-3xl animate-pulse-glow" />
          <Tesseract />
          <img
            src={logoUrl}
            alt="Tesseract Infosystems"
            className="relative z-10 w-full max-w-sm object-contain drop-shadow-[0_18px_40px_color-mix(in_oklab,var(--neon)_28%,transparent)] sm:max-w-md"
          />
        </div>
      </div>
    </section>
  );
}
