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

const title = "L2 Academy | Turnaround e CFO as a Service";
const description =
  "Reestruturação financeira, renegociação de passivos e CFO as a Service para empresas que faturam bem mas não enxergam a cor do dinheiro.";

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
