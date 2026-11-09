import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { About, Services, Work, Industries, Stack, Contact, ContactForm, Footer } from "@/components/site/sections";

const title = "Tesseract Infosystems | Custom Software & IT Services in Pune";
const description =
  "Tesseract Infosystems builds custom software, SaaS, web & mobile apps, AI/ML and cloud solutions. Where Precision Meets Perfection.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background">
      <SiteNav />
      <main>
        <Hero />
        <About />
        <Services />
        <Work />
        <Industries />
        <Stack />
        <Contact />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
