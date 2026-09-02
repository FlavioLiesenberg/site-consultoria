import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Pains } from "@/components/sections/Pains";
import { Solutions } from "@/components/sections/Solutions";
import { Methodology } from "@/components/sections/Methodology";
import { Cases } from "@/components/sections/Cases";
import { About } from "@/components/sections/About";
import { ContactForm } from "@/components/sections/ContactForm";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const title = "L2 Academy | CFO as a Service & Turnaround Financeiro";
const description =
  "Estancamos o sangramento de caixa, reestruturamos passivos e garantimos gestão financeira profissional (Interim CFO) para empresas que faturam bem, mas sofrem com falta de caixa.";
const siteUrl = "https://l2academy.com.br";

// Esquema JSON-LD do Google (Rich Snippets B2B)
const schemaJsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "name": "L2 Academy",
  "image": `${siteUrl}/images/logo.png`,
  "description": description,
  "url": siteUrl,
  "founder": {
    "@type": "Person",
    "name": "Flávio Liesenberg"
  },
  "serviceType": [
    "CFO as a Service",
    "Turnaround Financeiro",
    "Reestruturação de Passivos",
    "M&A e Valuation"
  ],
  "areaServed": "BR"
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "keywords", content: "CFO as a Service, Turnaround financeiro, Reestruturação de empresas, Gestão de crise, Flávio Liesenberg, Consultoria financeira B2B" },
      { name: "robots", content: "index, follow" },
      
      // Open Graph (LinkedIn / WhatsApp / Facebook)
      { property: "og:type", content: "website" },
      { property: "og:url", content: siteUrl },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: `${siteUrl}/images/og-share.jpg` },

      // Twitter Cards
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: `${siteUrl}/images/og-share.jpg` },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(schemaJsonLd),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Pains />
        <Solutions />
        <Methodology />
        <Cases />
        <About />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}