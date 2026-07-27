import { ArrowUpRight, Check, Send } from "lucide-react";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { openWhatsApp } from "../lib/whatsapp";
import { Reveal } from "./Reveal";

interface QuoteData {
  name: string;
  company: string;
  phone: string;
  service: string;
  message: string;
  privacy: boolean;
}

type QuoteErrors = Partial<Record<keyof QuoteData, string>>;

const initialData: QuoteData = {
  name: "",
  company: "",
  phone: "",
  service: "",
  message: "",
  privacy: false,
};

const quickServices = [
  "Estrutura metálica",
  "Cobertura metálica",
  "Soldagem industrial",
  "Manutenção industrial",
];

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

function validate(data: QuoteData): QuoteErrors {
  const errors: QuoteErrors = {};
  if (data.name.trim().length < 3) errors.name = "Informe seu nome completo.";
  if (data.phone.replace(/\D/g, "").length < 10) errors.phone = "Informe um telefone válido com DDD.";
  if (!data.service) errors.service = "Selecione o serviço desejado.";
  if (data.message.trim().length < 15) errors.message = "Descreva o projeto com pelo menos 15 caracteres.";
  if (!data.privacy) errors.privacy = "Você precisa autorizar o contato para continuar.";
  return errors;
}

export function Quote() {
  const [data, setData] = useState<QuoteData>(initialData);
  const [errors, setErrors] = useState<QuoteErrors>({});

  const handleTextChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setData((current) => ({ ...current, [name]: name === "phone" ? formatPhone(value) : value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  };

  const selectService = (service: string) => {
    setData((current) => ({ ...current, service }));
    setErrors((current) => ({ ...current, service: undefined }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(data);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      window.requestAnimationFrame(() => {
        document.querySelector<HTMLElement>(".has-error input, .has-error select, .has-error textarea")?.focus();
      });
      return;
    }

    const message = [
      "Olá! Gostaria de solicitar um orçamento com a Nova Aliança.",
      "",
      `*Nome:* ${data.name.trim()}`,
      `*Empresa:* ${data.company.trim() || "Não informada"}`,
      `*Telefone:* ${data.phone}`,
      `*Serviço de interesse:* ${data.service}`,
      `*Detalhes do projeto:* ${data.message.trim()}`,
    ].join("\n");

    openWhatsApp(message);
  };

  return (
    <section className="section quote-section" id="orcamento">
      <div className="quote-grid-decoration" aria-hidden="true" />
      <div className="container quote-layout">
        <Reveal className="quote-content" direction="left">
          <span className="section-kicker">Solicite uma análise</span>
          <h2>Conte sobre o seu projeto.</h2>
          <p>
            Envie as informações iniciais e fale diretamente com nossa equipe pelo WhatsApp.
            Quanto mais detalhes você fornecer, mais objetivo será o primeiro atendimento.
          </p>

          <div className="quote-points">
            <div><Check aria-hidden="true" /> Atendimento para projetos industriais e comerciais</div>
            <div><Check aria-hidden="true" /> Soluções personalizadas conforme sua necessidade</div>
            <div><Check aria-hidden="true" /> Envio direto e prático pelo WhatsApp</div>
          </div>

          <div className="quote-guide">
            <span>Para agilizar</span>
            <p>Informe medidas aproximadas, localização, fotos disponíveis e como a estrutura será utilizada.</p>
          </div>

          <div className="direct-contact">
            <span>Prefere contato direto?</span>
            <button
              type="button"
              className="text-link"
              onClick={() => openWhatsApp("Olá! Quero solicitar um orçamento para um projeto industrial.")}
            >
              Chamar no WhatsApp <ArrowUpRight aria-hidden="true" />
            </button>
          </div>
        </Reveal>

        <Reveal className="quote-form-wrapper" direction="right" delay={120}>
          <div className="form-heading">
            <div><span>ORÇAMENTO</span><small>Formulário rápido</small></div>
            <strong>Envio via WhatsApp</strong>
          </div>

          <form className="quote-form" noValidate onSubmit={handleSubmit}>
            <fieldset className="quick-service-fieldset">
              <legend>Qual solução você procura?</legend>
              <div className="quick-service-list">
                {quickServices.map((service) => (
                  <button
                    className={data.service === service ? "is-selected" : ""}
                    key={service}
                    type="button"
                    onClick={() => selectService(service)}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="field-grid">
              <div className={`form-field ${errors.name ? "has-error" : ""}`}>
                <label htmlFor="name">Nome completo *</label>
                <input id="name" name="name" type="text" autoComplete="name" placeholder="Digite seu nome" value={data.name} onChange={handleTextChange} />
                <small className="field-error">{errors.name}</small>
              </div>

              <div className="form-field">
                <label htmlFor="company">Empresa</label>
                <input id="company" name="company" type="text" autoComplete="organization" placeholder="Nome da empresa" value={data.company} onChange={handleTextChange} />
                <small className="field-error" />
              </div>
            </div>

            <div className="field-grid">
              <div className={`form-field ${errors.phone ? "has-error" : ""}`}>
                <label htmlFor="phone">Telefone / WhatsApp *</label>
                <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="(79) 99999-9999" value={data.phone} onChange={handleTextChange} />
                <small className="field-error">{errors.phone}</small>
              </div>

              <div className={`form-field ${errors.service ? "has-error" : ""}`}>
                <label htmlFor="service">Serviço de interesse *</label>
                <select id="service" name="service" value={data.service} onChange={handleTextChange}>
                  <option value="">Selecione</option>
                  <option>Cobertura metálica</option>
                  <option>Estrutura metálica</option>
                  <option>Escada ou mezanino</option>
                  <option>Plataforma industrial</option>
                  <option>Corrimão ou guarda-corpo</option>
                  <option>Manutenção industrial</option>
                  <option>Soldagem industrial</option>
                  <option>Outro serviço</option>
                </select>
                <small className="field-error">{errors.service}</small>
              </div>
            </div>

            <div className={`form-field ${errors.message ? "has-error" : ""}`}>
              <label htmlFor="message">Descreva brevemente o projeto *</label>
              <textarea id="message" name="message" rows={5} placeholder="Ex.: preciso de uma cobertura metálica para uma área de aproximadamente 300 m²..." value={data.message} onChange={handleTextChange} />
              <small className="field-error">{errors.message}</small>
            </div>

            <label className="privacy-check">
              <input
                type="checkbox"
                id="privacy"
                name="privacy"
                checked={data.privacy}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  setData((current) => ({ ...current, privacy: event.target.checked }));
                  setErrors((current) => ({ ...current, privacy: undefined }));
                }}
              />
              <span>Autorizo o contato da Nova Aliança para dar continuidade ao atendimento.</span>
            </label>
            <small className="field-error privacy-error">{errors.privacy}</small>

            <button className="button button-primary button-lg submit-button" type="submit">
              Enviar solicitação pelo WhatsApp <Send aria-hidden="true" />
            </button>

            <p className="form-note">Seus dados serão utilizados somente para responder à solicitação.</p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
