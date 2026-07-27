import {
  ArrowUp,
  ArrowUpRight,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
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
          <p>Apresente a demanda e converse diretamente com a equipe da Nova Aliança.</p>
        </div>
        <button
          className="button button-dark button-xl"
          type="button"
          onClick={() => openWhatsApp("Olá! Quero tirar um projeto do papel e gostaria de solicitar um orçamento com a Nova Aliança.")}
        >
          Solicitar orçamento agora <ArrowUpRight aria-hidden="true" />
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
          <a className="brand footer-brand" href="#inicio" aria-label="Nova Aliança - Voltar ao início"><Logo footer /></a>
          <p>Soluções industriais e estruturas metálicas com segurança, qualidade e compromisso, do projeto à execução.</p>
          <div className="social-links" aria-label="Redes sociais">
            <a href="#" aria-label="Instagram da Nova Aliança"><Instagram aria-hidden="true" /></a>
            <a href="#" aria-label="Facebook da Nova Aliança"><Facebook aria-hidden="true" /></a>
            <button type="button" aria-label="WhatsApp da Nova Aliança" onClick={() => openWhatsApp("Olá! Vim pelo site da Nova Aliança e gostaria de mais informações.")}>
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
          <a href="tel:+5579999999999"><Phone aria-hidden="true" /> (79) 99999-9999</a>
          <a href="mailto:contato@novaalianca.com.br"><Mail aria-hidden="true" /> contato@novaalianca.com.br</a>
          <span><MapPin aria-hidden="true" /> Sergipe e região</span>
        </div>

        <div className="footer-column">
          <h3>Atendimento</h3>
          <span>Segunda a sexta</span><strong>08h às 18h</strong>
          <span>Sábado</span><strong>08h às 12h</strong>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Nova Aliança. Todos os direitos reservados.</p>
        <a href="#topo">Voltar ao topo <ArrowUp aria-hidden="true" /></a>
      </div>
    </footer>
  );
}
