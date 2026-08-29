import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/termos")({
  head: () => ({
    meta: [
      { title: "Termos de Uso | R2Flow" },
      { name: "description", content: "Termos de uso do site da R2Flow." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalPage title="Termos de Uso" updatedAt="29 de agosto de 2026">
      <section>
        <h2>1. Identificação</h2>
        <p>
          Este site é operado pela R2Flow, marca de Gabriel Sabino da Silva Rodrigues, CNPJ
          41.906.310/0001-57, com endereço na Rua Florindo Rosan, 70, Jardim do Bosque, São José do
          Rio Preto/SP, CEP 15053-035. Contato:{" "}
          <a href="mailto:gabriel@r2flow.com.br">gabriel@r2flow.com.br</a>.
        </p>
      </section>
      <section>
        <h2>2. Objetivo do site</h2>
        <p>
          O site apresenta serviços de gestão de tráfego pago, criação de anúncios e peças
          publicitárias, automações comerciais e sistemas de gestão CRM, prestados em todo o Brasil,
          de forma remota ou presencial conforme disponibilidade e contratação.
        </p>
      </section>
      <section>
        <h2>3. Diagnóstico e contratação</h2>
        <p>
          O envio do formulário representa uma solicitação de contato e não cria obrigação de
          contratação. Escopo, valores, prazos e responsabilidades serão definidos em proposta ou
          contrato específico. A R2Flow busca responder às solicitações em até 24 horas.
        </p>
      </section>
      <section>
        <h2>4. Resultados</h2>
        <p>
          Estratégias de marketing e vendas estão sujeitas a fatores como mercado, oferta,
          investimento, operação comercial e capacidade produtiva. Conteúdos, estimativas e casos
          apresentados não constituem promessa ou garantia de faturamento ou resultado futuro.
        </p>
      </section>
      <section>
        <h2>5. Uso do conteúdo</h2>
        <p>
          Textos, identidade, materiais, métodos e demais conteúdos do site não podem ser copiados,
          distribuídos ou explorados comercialmente sem autorização, ressalvados os usos permitidos
          por lei.
        </p>
      </section>
      <section>
        <h2>6. Disponibilidade e links externos</h2>
        <p>
          Podemos atualizar ou interromper partes do site para manutenção. Links para serviços de
          terceiros, como Instagram e WhatsApp, estão sujeitos aos termos e políticas dessas
          plataformas.
        </p>
      </section>
      <section>
        <h2>7. Privacidade e legislação</h2>
        <p>
          O tratamento de dados segue nossa <a href="/privacidade">Política de Privacidade</a>.
          Estes termos são regidos pela legislação brasileira, respeitados os direitos legalmente
          aplicáveis ao usuário.
        </p>
      </section>
    </LegalPage>
  );
}
