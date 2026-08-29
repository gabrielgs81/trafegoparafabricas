import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const leadSchema = z.object({
  nome: z.string().trim().min(2).max(120),
  empresa: z.string().trim().min(2).max(160),
  whatsapp: z.string().trim().min(10).max(24),
  site: z.string().trim().min(2).max(300),
  segmento: z.string().trim().min(2).max(160),
  vendedores: z.coerce.number().int().min(0).max(10_000),
  faturamento: z.string().trim().min(1).max(100),
  investimento: z.string().trim().min(1).max(100),
  desafio: z.string().trim().min(1).max(200),
  consentimento: z.literal(true),
  websiteConfirmacao: z.string().max(0),
  utmSource: z.string().max(200).optional(),
  utmMedium: z.string().max(200).optional(),
  utmCampaign: z.string().max(200).optional(),
});

export const submitLead = createServerFn({ method: "POST" })
  .validator(leadSchema)
  .handler(async ({ data }) => {
    // Honeypot: return success without persisting automated submissions.
    if (data.websiteConfirmacao) return { ok: true };

    const url = process.env.SUPABASE_URL;
    const key = process.env.SUPABASE_PUBLISHABLE_KEY;
    if (!url || !key) throw new Error("Lead storage is not configured");

    const response = await fetch(`${url}/rest/v1/leads_r2flow`, {
      method: "POST",
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        nome: data.nome,
        empresa: data.empresa,
        whatsapp: data.whatsapp,
        site: data.site,
        segmento: data.segmento,
        vendedores: data.vendedores,
        faturamento: data.faturamento,
        investimento: data.investimento,
        desafio: data.desafio,
        consentimento: data.consentimento,
        origem: "lp.r2flow.com.br",
        utm_source: data.utmSource || null,
        utm_medium: data.utmMedium || null,
        utm_campaign: data.utmCampaign || null,
      }),
    });

    if (!response.ok) {
      console.error(`Supabase lead insert failed with status ${response.status}`);
      throw new Error("Não foi possível registrar o diagnóstico");
    }

    return { ok: true };
  });
