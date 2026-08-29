import { ArrowRight, Check, Instagram, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { useLeadForm } from "./lead-dialog";
import founder from "@/assets/founder.jpg";

const FITS = [
  "Possuem estrutura comercial",
  "Possuem capacidade produtiva para crescer",
  "Entendem que vendas B2B possuem ciclo de maturação",
  "Conseguem atender novos leads",
  "Querem construir previsibilidade",
  "Estão dispostas a acompanhar números comerciais",
  "Procuram crescimento sustentável e não uma fórmula mágica",
];

const QUESTIONS = [
  "Quanto sua fábrica fatura hoje?",
  "Quanto vem do tráfego?",
  "Quanto é investido?",
  "Quantos leads são gerados?",
  "Quantos viram orçamento?",
  "Quantos viram venda?",
  "Qual o ticket médio?",
  "Quanto sua fábrica consegue produzir?",
];

export function Audience() {
  return (
    <section className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">Para quem é</p>
            <h2 className="mt-5 font-display text-3xl leading-[1.1] sm:text-4xl lg:text-5xl">
              Não trabalhamos com qualquer operação.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Essa metodologia faz sentido para fábricas que:
            </p>
          </Reveal>

          <Reveal delay={100}>
            <ul className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
              {FITS.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-3 bg-surface p-5 text-sm leading-relaxed"
                >
                  <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={120} className="mt-10">
          <div className="flex items-start gap-4 rounded-xl border border-destructive/40 bg-destructive/10 p-6 sm:items-center sm:p-8">
            <X className="mt-1 size-5 shrink-0 text-destructive sm:mt-0" />
            <p className="font-display text-lg leading-snug sm:text-xl">
              Provavelmente não somos a escolha certa se você procura apenas alguém para “subir
              anúncios”.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Diagnostic() {
  const { open } = useLeadForm();

  return (
    <section className="border-t border-border bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <p className="eyebrow">Diagnóstico</p>
          <h2 className="mt-5 max-w-3xl font-display text-3xl leading-[1.1] sm:text-4xl lg:text-5xl">
            Antes de aumentar o investimento, precisamos descobrir onde sua operação está perdendo
            dinheiro.
          </h2>
        </Reveal>

        <ol className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {QUESTIONS.map((q, i) => (
            <Reveal key={q} delay={i * 50} as="li">
              <div className="h-full bg-surface p-6">
                <span className="font-mono text-xs text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 font-display text-base leading-snug">{q}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal
          delay={120}
          className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-xl font-display text-lg leading-snug sm:text-xl">
            Quando esses números estão conectados, conseguimos construir uma projeção de escala.
          </p>
          <Button variant="primaryCta" size="xl" onClick={open} className="w-full sm:w-auto">
            Quero analisar minha operação
            <ArrowRight />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="sobre" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-xl border border-border">
            <img
              src={founder}
              alt="Retrato do especialista responsável pelas operações de aquisição"
              width={1024}
              height={1280}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={100} className="lg:pt-6">
          <p className="eyebrow">Sobre</p>
          <h2 className="mt-5 font-display text-3xl leading-[1.1] sm:text-4xl lg:text-5xl">
            Marketing olhando para dentro da fábrica.
          </h2>
          <div className="mt-7 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              Minha especialização nasceu acompanhando operações de fabricantes e percebendo que o
              mercado industrial não precisava de mais uma agência olhando apenas para o Gerenciador
              de Anúncios.
            </p>
            <p className="font-semibold text-foreground">
              Precisava de alguém capaz de entender o que acontece depois do lead.
            </p>
            <p>
              Hoje, meu trabalho conecta mídia, comercial e faturamento para construir operações de
              aquisição capazes de acompanhar o crescimento da fábrica.
            </p>
          </div>
          <a
            href="https://www.instagram.com/trafegoparafabricas/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 border-b border-border-strong pb-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Instagram className="size-4" />
            @trafegoparafabricas
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export function FinalCta() {
  const { open } = useLeadForm();

  return (
    <section className="relative overflow-hidden border-t border-border py-28 sm:py-36">
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden="true"
      />
      <div className="grid-tech absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
        <Reveal>
          <h2 className="font-display text-3xl leading-[1.08] sm:text-5xl lg:text-[3.5rem]">
            Sua fábrica tem capacidade para crescer.
            <span className="mt-2 block text-primary-soft">O tráfego precisa acompanhar.</span>
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Vamos analisar sua operação atual, entender onde estão os gargalos e identificar se
            existe espaço para escalar aquisição e faturamento.
          </p>
        </Reveal>
        <Reveal delay={180}>
          <Button variant="cta" size="xl" onClick={open} className="mt-10 w-full sm:w-auto">
            Solicitar diagnóstico
            <ArrowRight />
          </Button>
          <p className="mt-5 text-sm text-muted-foreground">
            Conversa estratégica para fábricas que já possuem operação comercial.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-ink py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary font-display text-base font-bold text-primary-foreground">
            R2
          </span>
          <div>
            <p className="font-display text-sm font-semibold">R2Flow</p>
            <p className="text-xs text-muted-foreground">
              Tráfego pago e escala comercial para fábricas
            </p>
            <p className="mt-1 max-w-xl text-xs leading-relaxed text-muted-foreground">
              R2Flow é uma marca de Gabriel Sabino da Silva Rodrigues — CNPJ 41.906.310/0001-57
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-sm text-muted-foreground sm:items-end">
          <a
            href="mailto:gabriel@r2flow.com.br"
            className="transition-colors hover:text-foreground"
          >
            gabriel@r2flow.com.br
          </a>
          <a href="tel:+5517991410762" className="transition-colors hover:text-foreground">
            (17) 99141-0762
          </a>
          <p className="max-w-sm text-xs sm:text-right">
            Rua Florindo Rosan, 70, Jardim do Bosque — São José do Rio Preto/SP — CEP 15053-035
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <a href="/privacidade" className="transition-colors hover:text-foreground">
              Privacidade
            </a>
            <a href="/termos" className="transition-colors hover:text-foreground">
              Termos de Uso
            </a>
            <a
              href="https://www.instagram.com/trafegoparafabricas/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
            >
              <Instagram className="size-4" />
              @trafegoparafabricas
            </a>
            <a
              href="https://www.facebook.com/trafegoparafabricas/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
