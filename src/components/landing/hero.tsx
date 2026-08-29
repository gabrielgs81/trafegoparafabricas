import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { useLeadForm } from "./lead-dialog";
import heroFactory from "@/assets/hero-factory.jpg";

const PANEL = [
  { label: "Investimento", value: "R$ ——", hint: "mídia/mês" },
  { label: "Oportunidades", value: "——", hint: "qualificadas" },
  { label: "Ticket médio", value: "R$ ——", hint: "por pedido" },
  { label: "Faturamento", value: "R$ ——", hint: "originado" },
];

export function Hero() {
  const { open } = useLeadForm();

  return (
    <section id="top" className="relative overflow-hidden bg-ink pt-28 pb-20 sm:pt-36 sm:pb-28">
      <img
        src={heroFactory}
        alt="Interior de uma linha de produção industrial iluminada"
        width={1920}
        height={1280}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-45"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, var(--ink) 8%, color-mix(in oklab, var(--ink) 72%, transparent) 55%, color-mix(in oklab, var(--ink) 40%, transparent) 100%)",
        }}
      />
      <div className="grid-tech absolute inset-0 opacity-70" />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-20 lg:px-8">
        <div>
          <Reveal>
            <p className="eyebrow">Tráfego pago para fábricas</p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-4xl leading-[1.05] sm:text-5xl lg:text-[4.1rem]">
              Sua fábrica não precisa de mais leads.
              <span className="mt-3 block text-primary-soft">
                Precisa das oportunidades certas para crescer.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Construímos operações de aquisição para fábricas que precisam transformar investimento
              em mídia em oportunidades comerciais, vendas e previsibilidade de faturamento.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button variant="cta" size="xl" onClick={open} className="w-full sm:w-auto">
                Quero um diagnóstico da minha operação
                <ArrowRight />
              </Button>
              <Button variant="outlineLight" size="xl" asChild className="w-full sm:w-auto">
                <a href="#metodologia">Conhecer a metodologia</a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <p className="mt-7 font-mono text-[0.7rem] tracking-[0.2em] text-muted-foreground uppercase">
              Estratégia <span className="text-accent">•</span> Tráfego{" "}
              <span className="text-accent">•</span> Comercial <span className="text-accent">•</span>{" "}
              Escala
            </p>
          </Reveal>
        </div>

        <Reveal delay={200} className="lg:justify-self-end lg:w-full">
          <div className="surface-card w-full max-w-md bg-surface/80 p-6 backdrop-blur-md sm:p-7">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <p className="font-mono text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
                Painel da operação
              </p>
              <span className="flex items-center gap-2 font-mono text-[0.65rem] text-accent uppercase">
                <span className="size-1.5 rounded-full bg-accent" />
                ao vivo
              </span>
            </div>

            <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-6">
              {PANEL.map((item) => (
                <div key={item.label}>
                  <dt className="font-mono text-[0.65rem] tracking-[0.14em] text-muted-foreground uppercase">
                    {item.label}
                  </dt>
                  <dd className="mt-1.5 font-display text-2xl font-semibold">{item.value}</dd>
                  <p className="text-xs text-muted-foreground">{item.hint}</p>
                </div>
              ))}
            </dl>

            <div className="mt-7 border-t border-border pt-5">
              <p className="font-mono text-[0.65rem] tracking-[0.14em] text-muted-foreground uppercase">
                Pipeline acumulado
              </p>
              <div className="mt-3 flex h-24 items-end gap-1.5" aria-hidden="true">
                {[18, 26, 31, 40, 44, 55, 61, 72, 78, 88, 94, 100].map((h, i) => (
                  <span
                    key={i}
                    className="flex-1 rounded-sm"
                    style={{
                      height: `${h}%`,
                      background:
                        i > 8 ? "var(--accent)" : "color-mix(in oklab, var(--primary) 80%, white)",
                      opacity: i > 8 ? 1 : 0.35 + i * 0.06,
                    }}
                  />
                ))}
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                Mês a mês, o estoque de oportunidades cresce.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
