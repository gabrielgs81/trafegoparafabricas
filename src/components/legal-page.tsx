import type { ReactNode } from "react";

export function LegalPage({
  title,
  updatedAt,
  children,
}: {
  title: string;
  updatedAt: string;
  children: ReactNode;
}) {
  return (
    <main className="min-h-screen bg-ink px-5 py-16 text-foreground sm:py-24">
      <article className="mx-auto max-w-3xl">
        <a href="/" className="text-sm text-primary-soft transition-colors hover:text-foreground">
          ← Voltar para a R2Flow
        </a>
        <p className="eyebrow mt-10">R2Flow</p>
        <h1 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">{title}</h1>
        <p className="mt-4 text-sm text-muted-foreground">Última atualização: {updatedAt}</p>
        <div className="mt-12 space-y-9 text-sm leading-7 text-muted-foreground [&_a]:text-primary-soft [&_a]:underline [&_h2]:font-display [&_h2]:text-2xl [&_h2]:text-foreground [&_li]:ml-5 [&_li]:list-disc [&_p]:mt-3 [&_ul]:mt-3">
          {children}
        </div>
      </article>
    </main>
  );
}
