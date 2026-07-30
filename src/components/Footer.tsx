import {
  ArrowUp,
  ArrowUpRight,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { COMPANY } from "../lib/company";
import { openWhatsApp } from "../lib/whatsapp";
import { Logo } from "./Logo";
import { Reveal } from "./Reveal";

export function FinalCta() {
  return (
    <section className="final-cta" id="contato">
      <Reveal className="container final-cta-inner">
        <div>
          <span className="section-kicker">Seu próximo projeto começa aqui</span>
          <h2>Vamos transformar sua necessidade em estrutura?</h2>
          <p>
            Apresente a demanda e converse diretamente com a equipe da Nova
            Aliança.
          </p>
        </div>

        <button
          className="button button-dark button-xl"
          type="button"
          onClick={() =>
            openWhatsApp(
              "Olá! Quero tirar um projeto do papel e gostaria de solicitar um orçamento com a Nova Aliança.",
            )
          }
        >
          Solicitar orçamento agora
          <ArrowUpRight aria-hidden="true" />
        </button>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand-column">
          <a
            className="brand footer-brand"
            href="#inicio"
            aria-label="Nova Aliança - Voltar ao início"
          >
            <Logo footer />
          </a>

          <p>
            Soluções industriais e estruturas metálicas com segurança,
            qualidade e compromisso, do projeto à execução.
          </p>

          <div className="social-links" aria-label="Redes sociais e contato">
            <a
              href={COMPANY.instagram.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Instagram da Nova Aliança: ${COMPANY.instagram.handle}`}
              title={COMPANY.instagram.handle}
            >
              <Instagram aria-hidden="true" />
            </a>

            <button
              type="button"
              aria-label="WhatsApp da Nova Aliança"
              title={`WhatsApp ${COMPANY.phones[1].display}`}
              onClick={() =>
                openWhatsApp(
                  "Olá! Vim pelo site da Nova Aliança e gostaria de mais informações.",
                )
              }
            >
              <MessageCircle aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="footer-column">
          <h3>Navegação</h3>
          <a href="#servicos">Serviços</a>
          <a href="#projetos">Capacidades</a>
          <a href="#soldagem">Soldagem</a>
          <a href="#processo">Como trabalhamos</a>
          <a href="#faq">Dúvidas frequentes</a>
          <a href="#orcamento">Solicitar orçamento</a>
        </div>

        <div className="footer-column">
          <h3>Contato</h3>

          {COMPANY.phones.map((phone) => (
            <a href={phone.href} key={phone.display}>
              <Phone aria-hidden="true" />
              {phone.label}: {phone.display}
            </a>
          ))}

          <a
            href={COMPANY.instagram.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram aria-hidden="true" />
            {COMPANY.instagram.handle}
          </a>

          <a
            href={COMPANY.address.mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir endereço da Nova Aliança no mapa"
          >
            <MapPin aria-hidden="true" />
            <div className="footer-address-text">
              <span>{COMPANY.address.street}</span>
              <span>{COMPANY.address.neighborhood}</span>
              <span>{COMPANY.address.city}</span>
            </div>
          </a>
        </div>

        <div className="footer-column">
          <h3>Atendimento</h3>
          <span>Segunda a sexta</span>
          <strong>08h às 18h</strong>
          <span>Sábado</span>
          <strong>08h às 12h</strong>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>
          © {new Date().getFullYear()} Nova Aliança. Todos os direitos
          reservados.
        </p>
        <a href="#topo">
          Voltar ao topo <ArrowUp aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
