import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade | R2Flow" },
      { name: "description", content: "Política de privacidade e tratamento de dados da R2Flow." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalPage title="Política de Privacidade" updatedAt="29 de agosto de 2026">
      <section>
        <h2>1. Quem trata seus dados</h2>
        <p>
          A R2Flow é uma marca de Gabriel Sabino da Silva Rodrigues, CNPJ 41.906.310/0001-57, com
          endereço na Rua Florindo Rosan, 70, Jardim do Bosque, São José do Rio Preto/SP, CEP
          15053-035. Para assuntos de privacidade, fale com Gabriel Sabino pelo e-mail{" "}
          <a href="mailto:gabriel@r2flow.com.br">gabriel@r2flow.com.br</a>.
        </p>
      </section>
      <section>
        <h2>2. Dados coletados</h2>
        <p>
          No formulário de diagnóstico, coletamos nome, empresa, WhatsApp, site ou Instagram,
          segmento, quantidade de vendedores, faixa de faturamento, investimento em mídia e o
          principal desafio informado. Também podemos registrar parâmetros de origem da campanha.
        </p>
      </section>
      <section>
        <h2>3. Como usamos os dados</h2>
        <ul>
          <li>analisar e responder à solicitação de diagnóstico;</li>
          <li>entrar em contato pelo WhatsApp e realizar follow-up comercial;</li>
          <li>enviar comunicações relacionadas aos serviços da R2Flow;</li>
          <li>organizar o relacionamento comercial e aprimorar nossos processos.</li>
        </ul>
        <p>
          O tratamento ocorre com base no consentimento fornecido no formulário e, quando aplicável,
          em procedimentos preliminares relacionados a uma possível contratação.
        </p>
      </section>
      <section>
        <h2>4. Compartilhamento e armazenamento</h2>
        <p>
          Os dados podem ser processados por fornecedores necessários à operação, como Supabase
          (banco de dados), Vercel (hospedagem), WhatsApp e, futuramente, o CRM próprio da R2Flow.
          Esses fornecedores tratam dados conforme suas próprias medidas de segurança e contratos.
        </p>
        <p>
          Os dados dos leads serão mantidos por no máximo 12 meses, salvo quando houver obrigação
          legal, contratação em andamento ou pedido de exclusão aplicável.
        </p>
      </section>
      <section>
        <h2>5. Cookies e rastreamento</h2>
        <p>
          Atualmente, este site não utiliza Meta Pixel, Google Analytics ou Google Tag Manager.
          Cookies estritamente necessários ao funcionamento poderão ser utilizados. Caso novas
          ferramentas de publicidade ou análise sejam instaladas, esta política e os controles de
          consentimento serão atualizados antes da ativação.
        </p>
      </section>
      <section>
        <h2>6. Seus direitos</h2>
        <p>
          Você pode solicitar confirmação de tratamento, acesso, correção, informação sobre
          compartilhamento, portabilidade quando aplicável, revogação do consentimento e exclusão de
          dados tratados com consentimento, observadas as hipóteses legais de conservação. Envie a
          solicitação para <a href="mailto:gabriel@r2flow.com.br">gabriel@r2flow.com.br</a>.
        </p>
      </section>
      <section>
        <h2>7. Segurança e alterações</h2>
        <p>
          Adotamos medidas técnicas e administrativas proporcionais para proteger os dados contra
          acesso não autorizado, perda ou uso indevido. Esta política pode ser atualizada para
          refletir mudanças legais ou operacionais; a versão vigente permanecerá nesta página.
        </p>
      </section>
    </LegalPage>
  );
}
