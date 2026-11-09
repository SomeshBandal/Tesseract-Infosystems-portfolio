import { useState, useTransition } from "react";
import * as Icons from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Reveal, SectionHeading } from "./reveal";
import { services, projects, industries, techStacks, contact } from "./data";
import { cn } from "@/lib/utils";
import { submitContact, contactSchema, type ContactFormData } from "@/lib/contact.functions";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


function Icon({ name, className }: { name: string; className?: string }) {
  const C = (Icons as unknown as Record<string, Icons.LucideIcon>)[name] ?? Icons.Circle;
  return <C className={className} />;
}

export function About() {
  const pillars = [
    { icon: "Rocket", title: "Innovation First", text: "Modern architectures, AI-assisted engineering and future-ready stacks." },
    { icon: "Timer", title: "Agile Delivery", text: "Iterative sprints, transparent progress, on-time releases." },
    { icon: "ShieldCheck", title: "Built to Last", text: "Secure, tested and scalable systems that grow with your business." },
    { icon: "Handshake", title: "Full Lifecycle", text: "Discovery, design, development, deployment and long-term support." },
  ];
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="About Us"
          title={<>Engineering <span className="text-gradient">precision</span> into every product</>}
          subtitle="We blend innovation with execution to deliver bespoke software, web & mobile apps, e-commerce solutions and enterprise systems."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <div className="group relative h-full overflow-hidden rounded-2xl glass card-tilt p-6">
                <div className="absolute inset-x-0 top-0 h-px bg-[image:var(--gradient-neon)] opacity-60" />
                <Icon name={p.icon} className="h-7 w-7 text-primary" />
                <h3 className="mt-4 font-display text-base font-bold tracking-wide">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Services"
          title={<>Our Comprehensive <span className="text-gradient">Services</span></>}
          subtitle="A full spectrum of IT services to help your business succeed in the digital landscape."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) * 80}>
              <article className="group relative h-full overflow-hidden rounded-2xl glass card-tilt p-6">
                <div
                  className="absolute -right-10 -top-10 h-28 w-28 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: "color-mix(in oklab, var(--neon) 45%, transparent)" }}
                />
                <div className="relative grid h-12 w-12 place-items-center rounded-xl neon-border">
                  <Icon name={s.icon} className="h-5 w-5 text-accent" />
                </div>
                <h3 className="relative mt-5 font-display text-base font-bold tracking-wide">
                  {s.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
                <span className="relative mt-4 inline-block font-display text-[10px] tracking-wide text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  0{i + 1} / Explore
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Work() {
  const [active, setActive] = useState(0);
  return (
    <section id="work" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Selected Work"
          title={<>Products we <span className="text-gradient">shipped</span></>}
          subtitle="Real platforms solving real operational problems across industries."
        />
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="project-list grid max-h-[500px] gap-2 overflow-y-auto pr-2">
            {projects.map((p, i) => (
              <button
                key={p.name}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className={cn(
                  "group flex items-center justify-between gap-4 rounded-xl border px-5 py-4 text-left transition-all duration-300",
                  active === i
                    ? "neon-border bg-card/70 translate-x-1"
                    : "border-border/60 bg-card/25 hover:bg-card/50",
                )}
              >
                <span className="min-w-0">
                  <span className="block font-display text-sm font-bold tracking-wide">
                    {p.name}
                  </span>
                  <span className="mt-0.5 block truncate text-xs text-muted-foreground">
                    {p.stack.join(" · ")}
                  </span>
                </span>
                <Icons.ArrowUpRight
                  className={cn(
                    "h-4 w-4 shrink-0 transition-transform",
                    active === i ? "text-primary translate-x-0.5" : "text-muted-foreground",
                  )}
                />
              </button>
            ))}
          </Reveal>

          <Reveal delay={120}>
            <div className="relative h-full overflow-hidden rounded-3xl glass">
              <div className="relative overflow-hidden">
                <img
                  key={projects[active]!.image}
                  src={projects[active]!.image}
                  alt={`${projects[active]!.name} project preview`}
                  loading="lazy"
                  width={1200}
                  height={750}
                  className="h-56 w-full animate-in fade-in zoom-in-95 object-cover duration-700 sm:h-64"
                />
                <div className="pointer-events-none absolute inset-0 bg-[image:linear-gradient(to_top,color-mix(in_oklab,var(--card)_85%,transparent),transparent_55%)]" />
              </div>
              <div className="p-8 pt-6">
              <span className="font-display text-xs font-medium tracking-wide text-accent">
                Case {String(active + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-gradient">
                {projects[active]!.name}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {projects[active]!.desc}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {projects[active]!.stack.map((t) => (
                  <span
                    key={t}
                    className="rounded-full neon-border px-3 py-1 font-display text-[10px] tracking-normal text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}

export function Industries() {
  const row = [...industries, ...industries];
  return (
    <section id="industries" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Industries"
          title={<>Industries we <span className="text-gradient">serve</span></>}
          subtitle="Delivering specialized solutions across diverse industries with domain expertise."
        />
      </div>
      <div className="relative overflow-hidden py-2 [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <div className="marquee-track gap-4">
          {row.map((ind, i) => (
            <div
              key={`${ind.name}-${i}`}
              className="flex items-center gap-3 rounded-full glass px-6 py-3 whitespace-nowrap"
            >
              <Icon name={ind.icon} className="h-4 w-4 text-accent" />
              <span className="font-display text-xs tracking-normal">{ind.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-10 grid max-w-6xl grid-cols-2 gap-4 px-6 sm:grid-cols-3 lg:grid-cols-5">
        {industries.map((ind, i) => (
          <Reveal key={ind.name} delay={(i % 5) * 70}>
            <div className="group grid h-full place-items-center gap-3 rounded-2xl glass card-tilt px-4 py-7 text-center">
              <Icon
                name={ind.icon}
                className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-125"
              />
              <span className="font-display text-xs font-medium">
                {ind.name}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Stack() {
  return (
    <section id="stack" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Technology"
          title={<>Our technological <span className="text-gradient">stacks</span></>}
          subtitle="We leverage the latest and most powerful technologies to build robust, scalable solutions."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {techStacks.map((g, i) => (
            <Reveal key={g.group} delay={(i % 3) * 80}>
              <div className="h-full rounded-2xl glass card-tilt p-6">
                <h3 className="font-display text-xs tracking-wide text-accent">
                  {g.group}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-border/70 bg-secondary/40 px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const items = [
    { icon: "Mail", label: "Email", value: contact.email, href: `mailto:${contact.email}` },
    { icon: "Phone", label: "Phone", value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}` },
    { icon: "Globe", label: "Website", value: contact.website, href: `https://${contact.website}` },
    { icon: "MapPin", label: "Office", value: contact.address, href: undefined },
  ];
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Contact"
          title={<>Let's build something <span className="text-gradient">precise</span></>}
          subtitle="Tell us about your product idea — we'll get back within one business day."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => {
            const inner = (
              <div className="h-full rounded-2xl glass card-tilt p-6">
                <Icon name={it.icon} className="h-5 w-5 text-primary" />
                <p className="mt-4 font-display text-[10px] tracking-wide text-muted-foreground">
                  {it.label}
                </p>
                <p className="mt-1 text-sm leading-relaxed break-words">{it.value}</p>
              </div>
            );
            return (
              <Reveal key={it.label} delay={i * 80}>
                {it.href ? (
                  <a href={it.href} className="block h-full">
                    {inner}
                  </a>
                ) : (
                  inner
                )}
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={150}>
          <div className="mt-10 grid gap-6 overflow-hidden rounded-3xl glass p-8 text-center">
            <h3 className="font-display text-2xl font-bold tracking-tight">
              Ready to start your <span className="text-gradient">next project?</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={`mailto:${contact.email}`}
                className="rounded-full bg-[image:var(--gradient-neon)] px-7 py-3 font-display text-xs font-bold tracking-normal text-primary-foreground shadow-[var(--glow-md)] transition-transform hover:scale-105"
              >
                Email Us
              </a>
              <a
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                className="rounded-full neon-border px-7 py-3 font-display text-xs font-bold tracking-normal text-primary transition-colors hover:bg-secondary"
              >
                Call {contact.phone}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  function onSubmit(values: ContactFormData) {
    setSubmitted(null);
    startTransition(async () => {
      try {
        const result = await submitContact({ data: values });
        setSubmitted(result.message ?? "Thanks for reaching out.");
        form.reset();
      } catch (err) {
        setSubmitted("Something went wrong. Please try again or email us directly.");
        console.error(err);
      }
    });
  }

  return (
    <section id="contact-form" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="overflow-hidden rounded-3xl glass">
            <div className="grid lg:grid-cols-[1fr_1.25fr]">
              <div className="relative bg-gradient-to-br from-primary/90 to-primary p-8 text-primary-foreground sm:p-12">
                <div className="relative z-10">
                  <h2 className="font-display text-3xl font-bold tracking-tight">
                    Start your project
                  </h2>
                  <p className="mt-4 max-w-sm text-sm leading-relaxed opacity-90">
                    Tell us what you're building. We'll review your requirements and reply with a
                    plan, timeline and estimate.
                  </p>
                  <ul className="mt-8 space-y-4 text-sm">
                    <li className="flex items-center gap-3">
                      <span className="grid h-8 w-8 place-items-center rounded-full bg-primary-foreground/15">
                        <Icons.Check className="h-4 w-4" />
                      </span>
                      Free discovery call
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="grid h-8 w-8 place-items-center rounded-full bg-primary-foreground/15">
                        <Icons.Check className="h-4 w-4" />
                      </span>
                      Detailed proposal
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="grid h-8 w-8 place-items-center rounded-full bg-primary-foreground/15">
                        <Icons.Check className="h-4 w-4" />
                      </span>
                      Agile delivery
                    </li>
                  </ul>
                </div>
                <div className="absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-primary-foreground/10 blur-3xl" />
              </div>

              <div className="p-8 sm:p-12">
                {submitted ? (
                  <div className="grid h-full place-items-center text-center">
                    <div>
                      <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary/10">
                        <Icons.Check className="h-6 w-6 text-primary" />
                      </div>
                      <p className="mt-4 font-display text-lg font-semibold">Message sent</p>
                      <p className="mt-2 text-sm text-muted-foreground">{submitted}</p>
                      <Button
                        type="button"
                        variant="outline"
                        className="mt-6 rounded-full"
                        onClick={() => setSubmitted(null)}
                      >
                        Send another message
                      </Button>
                    </div>
                  </div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full name</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input placeholder="john@company.com" type="email" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid gap-5 sm:grid-cols-2">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone</FormLabel>
                              <FormControl>
                                <Input placeholder="+91 98765 43210" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="service"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Service</FormLabel>
                              <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select a service" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {services.map((s) => (
                                    <SelectItem key={s.title} value={s.title}>
                                      {s.title}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Project details</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us about your goals, timeline and budget..."
                                className="min-h-[120px] resize-none"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        disabled={isPending}
                        className="w-full rounded-full bg-primary py-3 font-display text-sm font-semibold text-primary-foreground hover:bg-primary/90 sm:w-auto sm:px-10"
                      >
                        {isPending ? (
                          <>
                            <Icons.Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          "Send message"
                        )}
                      </Button>
                    </form>
                  </Form>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {

  return (
    <footer className="relative border-t border-border/60 py-10">
      <div className="mx-auto grid max-w-6xl gap-4 px-6 text-center">
        <p className="font-display text-sm tracking-wide text-gradient">
          Tesseract Infosystems
        </p>
        <p className="text-xs tracking-wide text-muted-foreground">
          Where Precision Meets Perfection
        </p>
        <div className="flex justify-center gap-4 text-xs text-muted-foreground">
          <a
            href="https://www.linkedin.com/company/tesseract-infosystems"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/tesseractinfosystems"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary"
          >
            Instagram
          </a>
        </div>
        <p className="text-[11px] text-muted-foreground">
          © {new Date().getFullYear()} Tesseract Infosystems. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
