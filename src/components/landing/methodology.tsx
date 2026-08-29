import { Reveal } from "@/components/Reveal";

const PILLARS = [
  {
    id: "01",
    title: "Aquisição",
    lead: "Campanhas estruturadas de acordo com o objetivo comercial da fábrica. Não existe uma única estratégia para todas as empresas.",
    modes: [
      {
        name: "Volume",
        text: "Para empresas que precisam de velocidade, quantidade e giro comercial.",
      },
      {
        name: "Bola de neve",
        text: "Para construção de pipeline e projetos de ticket elevado que amadurecem ao longo dos meses.",
      },
      {
        name: "Híbrida",
        text: "Combinação das duas estratégias para gerar caixa no curto prazo e oportunidades maiores no médio e longo prazo.",
      },
    ],
  },
  {
    id: "02",
    title: "Qualificação",
    lead: "Não tentamos compensar uma mensagem fraca com uma segmentação complicada.",
    paragraphs: [
      "Criativo, oferta e posicionamento trabalham juntos para fazer o próprio anúncio funcionar como primeiro filtro.",
      "Quando necessário, utilizamos formulários e processos de qualificação para ensinar a plataforma a buscar perfis comerciais melhores.",
    ],
  },
  {
    id: "03",
    title: "Comercial",
    lead: "O trabalho não termina quando o lead entra. Acompanhamos indicadores como:",
    metrics: [
      "Taxa de contato",
      "Taxa de resposta",
      "Oportunidades",
      "Orçamentos",
      "Conversão",
      "Ticket médio",
      "Faturamento por origem",
      "Faturamento por vendedor",
    ],
    footer: "Porque lead sem acompanhamento é apenas um número dentro do CRM.",
  },
  {
    id: "04",
    title: "Escala",
    lead: "Escala não significa simplesmente aumentar orçamento. O investimento precisa acompanhar:",
    formula: [
      "Meta de faturamento",
      "Capacidade comercial",
      "Capacidade produtiva",
      "Histórico de conversão",
    ],
    footer: "A mídia cresce conforme a operação demonstra capacidade de absorver a demanda.",
  },
];

const SNOWBALL = [
  { month: "Mês 1", text: "Novos leads" },
  { month: "Mês 2", text: "Novos leads + negociações do mês anterior" },
  { month: "Mês 3", text: "Novos leads + oportunidades acumuladas + propostas + follow-ups" },
  { month: "Mês 4", text: "Pipeline maior + vendas originadas meses atrás" },
];

export function Methodology() {
  return (
    <>
      <section id="metodologia" className="border-t border-border bg-ink py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <p className="eyebrow">Nossa metodologia</p>
            <h2 className="mt-5 max-w-2xl font-display text-3xl leading-[1.1] sm:text-4xl lg:text-5xl">
              Uma operação construída para vender.
            </h2>
          </Reveal>

          <div className="mt-14 space-y-5">
            {PILLARS.map((p, i) => (
              <Reveal key={p.id} delay={i * 70} as="article">
                <div className="surface-card grid gap-8 p-6 sm:p-9 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
                  <div>
                    <span className="font-mono text-sm text-accent">{p.id}</span>
                    <h3 className="mt-3 font-display text-2xl tracking-tight uppercase sm:text-3xl">
                      {p.title}
                    </h3>
                  </div>

                  <div>
                    <p className="text-base leading-relaxed text-muted-foreground">{p.lead}</p>

                    {p.modes && (
                      <div className="mt-7 grid gap-4 sm:grid-cols-3">
                        {p.modes.map((m) => (
                          <div
                            key={m.name}
                            className="rounded-lg border border-border bg-background/60 p-5"
                          >
                            <p className="font-display text-sm font-semibold text-primary-soft uppercase">
                              {m.name}
                            </p>
                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                              {m.text}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {p.paragraphs && (
                      <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
                        {p.paragraphs.map((t) => (
                          <p key={t}>{t}</p>
                        ))}
                      </div>
                    )}

                    {p.metrics && (
                      <ul className="mt-6 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
                        {p.metrics.map((m) => (
                          <li
                            key={m}
                            className="flex items-center gap-3 bg-background/60 px-4 py-3 text-sm"
                          >
                            <span className="size-1.5 shrink-0 rounded-full bg-accent" />
                            {m}
                          </li>
                        ))}
                      </ul>
                    )}

                    {p.formula && (
                      <div className="mt-6 flex flex-wrap items-center gap-3">
                        {p.formula.map((f, idx) => (
                          <span key={f} className="flex items-center gap-3">
                            <span className="rounded-md border border-border-strong bg-background/60 px-3.5 py-2 font-mono text-xs tracking-wide uppercase">
                              {f}
                            </span>
                            {idx < p.formula.length - 1 && (
                              <span className="font-mono text-accent">+</span>
                            )}
                          </span>
                        ))}
                      </div>
                    )}

                    {p.footer && (
                      <p className="mt-6 font-display text-base text-foreground sm:text-lg">
                        {p.footer}
                      </p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-border py-24 sm:py-32">
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
          aria-hidden="true"
        />
        <div className="grid-tech absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <p className="eyebrow">Conceito bola de neve</p>
            <h2 className="mt-5 max-w-3xl font-display text-3xl leading-[1.1] sm:text-4xl lg:text-5xl">
              No B2B de alto ticket, o tráfego funciona como uma bola de neve.
            </h2>
          </Reveal>

          <ol className="mt-14 grid gap-4 lg:grid-cols-4">
            {SNOWBALL.map((s, i) => (
              <Reveal key={s.month} delay={i * 90} as="li">
                <div className="relative h-full rounded-xl border border-border bg-surface/70 p-6 backdrop-blur-sm">
                  <div className="flex items-baseline justify-between">
                    <p className="font-display text-lg font-semibold tracking-tight uppercase">
                      {s.month}
                    </p>
                    <span className="font-mono text-xs text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="mt-4 h-1 w-full rounded-full bg-border">
                    <div
                      className="h-1 rounded-full"
                      style={{
                        width: `${25 + i * 25}%`,
                        background: "var(--gradient-primary)",
                      }}
                    />
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={120} className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-center">
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Uma operação saudável não depende apenas dos leads que entraram hoje. Ela constrói um
              estoque crescente de oportunidades comerciais.
            </p>
            <p className="border-l-2 border-accent pl-6 font-display text-xl leading-snug sm:text-2xl">
              É por isso que desligar o tráfego hoje pode aparecer no faturamento apenas daqui a 30,
              60 ou 90 dias.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
