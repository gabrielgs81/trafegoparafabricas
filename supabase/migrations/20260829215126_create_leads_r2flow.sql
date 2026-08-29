create table if not exists public.leads_r2flow (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  expires_at timestamptz not null default (now() + interval '1 year'),
  nome text not null check (char_length(nome) between 2 and 120),
  empresa text not null check (char_length(empresa) between 2 and 160),
  whatsapp text not null check (char_length(whatsapp) between 10 and 24),
  site text not null check (char_length(site) between 2 and 300),
  segmento text not null check (char_length(segmento) between 2 and 160),
  vendedores integer not null check (vendedores between 0 and 10000),
  faturamento text not null,
  investimento text not null,
  desafio text not null,
  consentimento boolean not null default true check (consentimento = true),
  origem text not null default 'lp.r2flow.com.br',
  utm_source text,
  utm_medium text,
  utm_campaign text,
  status text not null default 'novo'
);

comment on table public.leads_r2flow is
  'Leads captados pela landing page da R2Flow; retenção máxima prevista de 1 ano.';

alter table public.leads_r2flow enable row level security;

revoke all on table public.leads_r2flow from anon, authenticated;
grant insert on table public.leads_r2flow to anon;
grant usage, select on sequence public.leads_r2flow_id_seq to anon;

drop policy if exists "Public can submit R2Flow leads" on public.leads_r2flow;
create policy "Public can submit R2Flow leads"
on public.leads_r2flow
for insert
to anon
with check (
  consentimento = true
  and origem = 'lp.r2flow.com.br'
  and char_length(nome) between 2 and 120
  and char_length(empresa) between 2 and 160
  and char_length(whatsapp) between 10 and 24
);
