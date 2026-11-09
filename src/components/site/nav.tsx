import { useEffect, useState } from "react";
import { ChevronDown, Mail, Menu, Phone, X } from "lucide-react";
import logoUrl from "@/assets/tesseract-logo.png";
import { cn } from "@/lib/utils";

type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; desc?: string }[];
};

const links: NavItem[] = [
  { label: "Home", href: "#top" },
  {
    label: "Services",
    href: "#services",
    children: [
      { label: "Software Development", href: "#services" },
      { label: "SaaS Development", href: "#services" },
      { label: "Portal Development", href: "#services" },
      { label: "UI/UX Design", href: "#services" },
      { label: "CMS Development", href: "#services" },
      { label: "AI/ML Development", href: "#services" },
      { label: "Cloud Services", href: "#services" },
      { label: "Mobile Applications", href: "#services" },
    ],
  },
  {
    label: "Projects",
    href: "#work",
    children: [
      { label: "Matrimony", href: "#work" },
      { label: "Auto Car Care", href: "#work" },
      { label: "Concept School", href: "#work" },
      { label: "ERP", href: "#work" },
      { label: "AnuArc", href: "#work" },
      { label: "Amruta Cloth Center", href: "#work" },
      { label: "Atithi", href: "#work" },
      { label: "Arogyam", href: "#work" },
      { label: "Rent It", href: "#work" },
      { label: "QVouch", href: "#work" },
    ],
  },
  { label: "Industries", href: "#industries" },
  { label: "TechStack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="hidden border-b border-border bg-secondary/60 py-1.5 backdrop-blur md:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 text-xs text-muted-foreground">
          <p>Kakade Plaza, Warje Malwadi Rd, Karvenagar, Pune 411052</p>
          <div className="flex items-center gap-5">
            <a href="tel:+919588686668" className="inline-flex items-center gap-1.5 hover:text-primary">
              <Phone className="h-3.5 w-3.5" /> +91 95886 86668
            </a>
            <a
              href="mailto:info@tesseractinfosystems.com"
              className="inline-flex items-center gap-1.5 hover:text-primary"
            >
              <Mail className="h-3.5 w-3.5" /> info@tesseractinfosystems.com
            </a>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "transition-all duration-300",
          scrolled ? "bg-background/90 shadow-[var(--glow-md)] backdrop-blur" : "bg-background/70 backdrop-blur",
        )}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-3">
          <a href="#top" aria-label="Tesseract Infosystems home" className="shrink-0">
            <img
              src={logoUrl}
              alt="Tesseract Infosystems logo"
              className="h-12 w-48 object-contain object-left sm:w-56"
            />
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <div key={l.label} className="group relative">
                <a
                  href={l.href}
                  className="inline-flex items-center gap-1 rounded-md px-3 py-2 font-display text-sm font-medium text-foreground/75 transition-colors hover:text-primary"
                >
                  {l.label}
                  {l.children ? (
                    <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                  ) : null}
                </a>
                {l.children ? (
                  <div className="pointer-events-none absolute left-0 top-full w-64 translate-y-1 pt-2 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="rounded-xl border border-border bg-popover p-2 shadow-[var(--glow-lg)]">
                      {l.children.map((c) => (
                        <a
                          key={c.label}
                          href={c.href}
                          className="block rounded-lg px-3 py-2 text-sm text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
                        >
                          {c.label}
                          {c.desc ? (
                            <span className="mt-0.5 block text-xs text-muted-foreground">{c.desc}</span>
                          ) : null}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            ))}
            <a
              href="#contact"
              className="ml-3 rounded-full bg-primary px-5 py-2.5 font-display text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent"
            >
              Get Started
            </a>
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-border lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </nav>
      </div>

      {open ? (
        <div className="border-b border-border bg-background/98 backdrop-blur lg:hidden">
          <div className="mx-auto grid max-w-6xl gap-1 px-4 py-3">
            {links.map((l) => (
              <div key={l.label}>
                <div className="flex items-center">
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex-1 rounded-lg px-4 py-3 font-display text-sm font-medium hover:text-primary"
                  >
                    {l.label}
                  </a>
                  {l.children ? (
                    <button
                      aria-label={`Toggle ${l.label}`}
                      onClick={() =>
                        setOpenMobileGroup((g) => (g === l.label ? null : l.label))
                      }
                      className="grid h-9 w-9 place-items-center rounded-lg text-muted-foreground"
                    >
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform",
                          openMobileGroup === l.label && "rotate-180",
                        )}
                      />
                    </button>
                  ) : null}
                </div>
                {l.children && openMobileGroup === l.label ? (
                  <div className="ml-3 grid border-l border-border pl-3">
                    {l.children.map((c) => (
                      <a
                        key={c.label}
                        href={c.href}
                        onClick={() => setOpen(false)}
                        className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:text-primary"
                      >
                        {c.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-primary px-5 py-3 text-center font-display text-sm font-semibold text-primary-foreground"
            >
              Get Started
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
