import {
  AlertTriangle,
  BadgeDollarSign,
  Gauge,
  MessageSquareX,
  Split,
  TrendingDown,
  Users,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";

const FLOW = [
  "Anúncio",
  "Lead",
  "Atendimento",
  "Follow-up",
  "Orçamento",
  "Negociação",
  "Venda",
  "Faturamento",
];

const PROBLEMS = [
  {
    icon: BadgeDollarSign,
    title: "Lead barato demais",
    text: "Muito volume, curiosos e pessoas sem capacidade real de compra.",
  },
  {
    icon: Users,
    title: "Comercial sobrecarregado",
    text: "Centenas de contatos e poucas oportunidades reais.",
  },
  {
    icon: TrendingDown,
    title: "Ticket médio caindo",
    text: "A empresa vende mais pedidos pequenos e perde projetos maiores.",
  },
  {
    icon: Split,
    title: "Tráfego desconectado do comercial",
    text: "Marketing comemora CPL enquanto o vendedor reclama da qualidade.",
  },
  {
    icon: MessageSquareX,
    title: "Follow-up inexistente",
    text: "Leads de alto ticket são abandonados porque não compraram imediatamente.",
  },
  {
    icon: Gauge,
    title: "Escala sem planejamento",
    text: "Aumenta-se o investimento sem considerar capacidade comercial e produtiva.",
  },
];

export function Thesis() {
  return (
    <section id="como-funciona" className="relative border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">A tese</p>
            <h2 className="mt-5 font-display text-3xl leading-[1.1] sm:text-4xl lg:text-5xl">
              Tráfego para fábrica não funciona como tráfego para e-commerce.
            </h2>
          </Reveal>

          <Reveal
            delay={100}
            className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            <p>Uma venda industrial pode levar dias, semanas ou meses.</p>
            <p>
              O lead de hoje pode ser o projeto de{" "}
              <span className="font-semibold text-foreground">R$ 300 mil</span> daqui a 90 dias.
            </p>
            <p>
              Por isso, analisar uma operação apenas por CPL, quantidade de mensagens ou vendas
              imediatas é enxergar apenas uma parte do processo.
            </p>
            <p className="font-semibold text-foreground">
              O tráfego precisa conversar com o ciclo comercial da empresa.
            </p>
          </Reveal>
        </div>

        <Reveal delay={120} className="mt-16">
          <ol className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4 lg:grid-cols-8">
            {FLOW.map((step, i) => (
              <li key={step} className="relative bg-surface px-4 py-6">
                <span className="font-mono text-[0.65rem] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 font-display text-sm font-semibold tracking-tight uppercase">
                  {step}
                </p>
                <span
                  className="absolute bottom-0 left-0 h-0.5 bg-primary"
                  style={{ width: `${((i + 1) / FLOW.length) * 100}%`, opacity: 0.5 }}
                />
              </li>
            ))}
          </ol>
          <p className="mt-6 font-display text-lg text-foreground sm:text-xl">
            Não otimizamos apenas o anúncio.{" "}
            <span className="text-accent">Otimizamos a engrenagem.</span>
          </p>
        </Reveal>

        <div className="mt-28">
          <Reveal>
            <p className="eyebrow">O problema</p>
            <h2 className="mt-5 max-w-2xl font-display text-3xl leading-[1.1] sm:text-4xl lg:text-5xl">
              Mais lead nem sempre significa mais faturamento.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PROBLEMS.map((p, i) => (
              <Reveal key={p.title} delay={i * 60} as="article">
                <div className="surface-card h-full p-6 transition-colors hover:border-border-strong">
                  <p.icon className="size-5 text-accent" />
                  <h3 className="mt-5 font-display text-lg">{p.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={100} className="mt-10">
            <div className="flex items-start gap-4 rounded-xl border-l-2 border-accent bg-surface/60 p-6 sm:p-8">
              <AlertTriangle className="mt-1 size-5 shrink-0 text-accent" />
              <p className="font-display text-xl leading-snug sm:text-2xl">
                O problema nem sempre está no anúncio. Às vezes, está na engrenagem inteira.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
