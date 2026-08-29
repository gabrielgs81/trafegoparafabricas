import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Ctx = { open: () => void };
const LeadFormContext = createContext<Ctx>({ open: () => {} });

export function useLeadForm() {
  return useContext(LeadFormContext);
}

const CHALLENGES = [
  "Preciso gerar mais oportunidades",
  "Recebo muitos leads desqualificados",
  "Quero aumentar meu ticket médio",
  "Quero escalar o faturamento",
  "Meu comercial não converte os leads",
  "Não consigo mensurar o retorno do tráfego",
  "Outro",
];

const REVENUE = [
  "Até R$ 100 mil/mês",
  "R$ 100 mil a R$ 300 mil/mês",
  "R$ 300 mil a R$ 1 milhão/mês",
  "R$ 1 milhão a R$ 3 milhões/mês",
  "Acima de R$ 3 milhões/mês",
];

const MEDIA_SPEND = [
  "Ainda não invisto",
  "Até R$ 3 mil/mês",
  "R$ 3 mil a R$ 10 mil/mês",
  "R$ 10 mil a R$ 30 mil/mês",
  "Acima de R$ 30 mil/mês",
];

function Field({
  label,
  children,
  htmlFor,
}: {
  label: string;
  children: ReactNode;
  htmlFor?: string;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={htmlFor} className="text-xs font-medium tracking-wide text-muted-foreground">
        {label}
      </Label>
      {children}
    </div>
  );
}

export function LeadFormProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const value = useMemo(() => ({ open: () => setIsOpen(true) }), []);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsOpen(false);
    toast.success("Diagnóstico solicitado", {
      description: "Recebemos seus dados. O contato é feito por WhatsApp em até 1 dia útil.",
    });
    event.currentTarget.reset();
  }

  return (
    <LeadFormContext.Provider value={value}>
      {children}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-h-[92dvh] overflow-y-auto border-border bg-surface sm:max-w-xl">
          <DialogHeader>
            <p className="eyebrow">Diagnóstico comercial</p>
            <DialogTitle className="text-2xl">
              Vamos entender a operação antes de falar de mídia.
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Quanto mais preciso o preenchimento, mais útil é a conversa.
            </DialogDescription>
          </DialogHeader>

          <form className="mt-2 grid gap-5" onSubmit={handleSubmit}>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Nome" htmlFor="lf-nome">
                <Input id="lf-nome" name="nome" required autoComplete="name" />
              </Field>
              <Field label="Empresa" htmlFor="lf-empresa">
                <Input id="lf-empresa" name="empresa" required autoComplete="organization" />
              </Field>
              <Field label="WhatsApp" htmlFor="lf-whatsapp">
                <Input
                  id="lf-whatsapp"
                  name="whatsapp"
                  required
                  inputMode="tel"
                  placeholder="(00) 00000-0000"
                />
              </Field>
              <Field label="Instagram ou site da empresa" htmlFor="lf-site">
                <Input id="lf-site" name="site" required placeholder="@ ou https://" />
              </Field>
              <Field label="Segmento da fábrica" htmlFor="lf-segmento">
                <Input
                  id="lf-segmento"
                  name="segmento"
                  required
                  placeholder="Ex.: equipamentos fitness"
                />
              </Field>
              <Field label="Quantidade de vendedores" htmlFor="lf-vendedores">
                <Input id="lf-vendedores" name="vendedores" required inputMode="numeric" />
              </Field>
            </div>

            <Field label="Faturamento médio mensal">
              <Select name="faturamento" required>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  {REVENUE.map((r) => (
                    <SelectItem key={r} value={r}>
                      {r}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>

            <Field label="Investimento mensal atual em tráfego">
              <Select name="investimento" required>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  {MEDIA_SPEND.map((r) => (
                    <SelectItem key={r} value={r}>
                      {r}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>

            <Field label="Qual é o principal desafio da sua operação hoje?">
              <Select name="desafio" required>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  {CHALLENGES.map((r) => (
                    <SelectItem key={r} value={r}>
                      {r}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>

            <Button type="submit" variant="cta" size="xl" className="w-full">
              Solicitar meu diagnóstico
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </LeadFormContext.Provider>
  );
}
