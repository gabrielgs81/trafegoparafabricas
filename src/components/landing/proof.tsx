import { Reveal } from "@/components/Reveal";

const STATS = [
  { value: "R$ [X] milhões", label: "em faturamento acompanhado" },
  { value: "[X.XXX]+", label: "leads gerados" },
  { value: "R$ [X]", label: "em mídia gerenciada" },
  { value: "[X]+", label: "operações atendidas" },
];

const CLIENTS = [
  "GikoFit",
  "Granzotto Fit",
  "Imperious Fitness",
  "Vértice Fitness",
  "Square Tech",
  "Apollo Fitness",
  "Iron Bulls",
];

const CASES = [
  { strategy: "Estratégia: [volume / bola de neve / híbrida]" },
  { strategy: "Estratégia: [volume / bola de neve / híbrida]" },
  { strategy: "Estratégia: [volume / bola de neve / híbrida]" },
];

const CASE_FIELDS = [
  ["Investimento", "R$ [—]"],
  ["Leads", "[—]"],
  ["CPL", "R$ [—]"],
  ["Oportunidades", "[—]"],
  ["Vendas", "[—]"],
];

export function Proof() {
  return (
    <>
      <section className="border-t border-border py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <p className="eyebrow">Autoridade</p>
            <h2 className="mt-5 max-w-2xl font-display text-3xl leading-[1.1] sm:text-4xl lg:text-5xl">
              Experiência construída dentro de operações reais.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 70}>
                <div className="surface-card h-full bg-surface/70 p-7">
                  <p className="font-display text-3xl leading-tight font-semibold text-primary-soft sm:text-[2rem]">
                    {s.value}
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={80} className="mt-14">
            <p className="font-mono text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
              Operações e marcas do ecossistema
            </p>
            <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4 lg:grid-cols-7">
              {CLIENTS.map((c) => (
                <div
                  key={c}
                  className="flex min-h-20 items-center justify-center bg-surface px-4 py-6 text-center font-display text-sm font-semibold tracking-tight text-muted-foreground transition-colors hover:text-foreground"
                >
                  {c}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="cases" className="border-t border-border bg-ink py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <p className="eyebrow">Cases</p>
            <h2 className="mt-5 max-w-2xl font-display text-3xl leading-[1.1] sm:text-4xl lg:text-5xl">
              O número que importa está no faturamento.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {CASES.map((c, i) => (
              <Reveal key={i} delay={i * 90} as="article">
                <div className="surface-card flex h-full flex-col p-7">
                  <div className="flex items-center justify-between">
                    <p className="font-display text-lg font-semibold">[Empresa]</p>
                    <span className="font-mono text-xs text-accent">
                      case {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Cenário inicial: [descreva o ponto de partida da operação]
                  </p>

                  <div className="mt-7 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border">
                    <div className="bg-background/70 p-5">
                      <p className="font-mono text-[0.6rem] tracking-[0.16em] text-muted-foreground uppercase">
                        Faturamento
                      </p>
                      <p className="mt-2 font-display text-2xl leading-tight font-semibold text-accent">
                        R$ [—]
                      </p>
                    </div>
                    <div className="bg-background/70 p-5">
                      <p className="font-mono text-[0.6rem] tracking-[0.16em] text-muted-foreground uppercase">
                        Ticket médio
                      </p>
                      <p className="mt-2 font-display text-2xl leading-tight font-semibold text-primary-soft">
                        R$ [—]
                      </p>
                    </div>
                  </div>

                  <dl className="mt-6 space-y-2.5">
                    {CASE_FIELDS.map(([k, v]) => (
                      <div
                        key={k}
                        className="flex items-baseline justify-between gap-3 border-b border-border pb-2.5 text-sm last:border-0"
                      >
                        <dt className="text-muted-foreground">{k}</dt>
                        <dd className="font-mono text-xs">{v}</dd>
                      </div>
                    ))}
                  </dl>

                  <p className="mt-6 rounded-md border border-border-strong px-4 py-3 font-mono text-[0.65rem] tracking-[0.12em] text-muted-foreground uppercase">
                    {c.strategy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={100}>
            <p className="mt-8 text-sm text-muted-foreground">
              Os campos acima são estruturais e serão preenchidos com dados reais de cada operação.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
