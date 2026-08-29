import { createFileRoute } from "@tanstack/react-router";

import { LeadFormProvider } from "@/components/landing/lead-dialog";
import { SiteHeader } from "@/components/landing/site-header";
import { Hero } from "@/components/landing/hero";
import { Thesis } from "@/components/landing/thesis";
import { Methodology } from "@/components/landing/methodology";
import { Proof } from "@/components/landing/proof";
import { Audience, Diagnostic, About, FinalCta, SiteFooter } from "@/components/landing/closing";

const TITLE = "Tráfego Pago para Fábricas | Arrobáh";
const DESCRIPTION =
  "Estratégias de tráfego pago, aquisição e escala comercial para fábricas. Transforme mídia em oportunidades, vendas e previsibilidade de faturamento.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <LeadFormProvider>
      <SiteHeader />
      <main>
        <Hero />
        <Thesis />
        <Methodology />
        <Proof />
        <Audience />
        <Diagnostic />
        <About />
        <FinalCta />
      </main>
      <SiteFooter />
    </LeadFormProvider>
  );
}
