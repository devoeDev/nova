import {
  ArrowRight,
  BadgeCheck,
  MessageCircle,
  Ruler,
  ShieldCheck,
} from "lucide-react";
import { openWhatsApp } from "../lib/whatsapp";
import { Reveal } from "./Reveal";

const mainPaths = [
  "M105 430V215L340 84L575 215V430",
  "M105 215H575",
  "M153 430V245H527V430",
  "M210 430V245M283 430V245M397 430V245M470 430V245",
  "M105 215L153 245L210 215L283 245L340 215L397 245L470 215L527 245L575 215",
  "M153 245L210 430M210 245L153 430",
  "M470 245L527 430M527 245L470 430",
];

export function Hero() {
  return (
    <section className="hero section" id="inicio">
      <div className="hero-grid-lines" aria-hidden="true" />
      <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
      <div className="hero-orbit hero-orbit-two" aria-hidden="true" />

      <div className="container hero-layout">
        <div className="hero-content">
          <Reveal className="hero-status" delay={20}>
            <span aria-hidden="true" />
            Atendimento técnico em Sergipe e região
          </Reveal>

          <Reveal className="eyebrow" delay={60}>
            <span className="eyebrow-line" />
            Engenharia, fabricação e montagem
          </Reveal>

          <Reveal as="h1" delay={120}>
            Estruturas metálicas
            <span>feitas para durar.</span>
          </Reveal>

          <Reveal as="p" className="hero-description" delay={220}>
            Do levantamento à montagem, desenvolvemos soluções industriais sob medida com foco em
            segurança, precisão técnica e acabamento profissional.
          </Reveal>

          <Reveal className="hero-actions" delay={300}>
            <a className="button button-primary button-lg" href="#orcamento">
              Solicitar orçamento
              <ArrowRight aria-hidden="true" />
            </a>

            <button
              className="button button-outline button-lg"
              type="button"
              onClick={() =>
                openWhatsApp(
                  "Olá! Gostaria de falar com um especialista da Nova Aliança sobre um projeto industrial.",
                )
              }
            >
              <MessageCircle aria-hidden="true" />
              Falar com especialista
            </button>
          </Reveal>

          <Reveal as="ul" className="hero-trust" delay={380} aria-label="Diferenciais principais">
            <li><ShieldCheck aria-hidden="true" /> Segurança em cada etapa</li>
            <li><BadgeCheck aria-hidden="true" /> Equipe especializada</li>
            <li><Ruler aria-hidden="true" /> Execução sob medida</li>
          </Reveal>

          <Reveal delay={430}>
            <a className="hero-scroll-link" href="#servicos">
              Conheça nossas soluções
              <ArrowRight aria-hidden="true" />
            </a>
          </Reveal>
        </div>

        <Reveal className="hero-visual" direction="right" delay={160}>
          <div className="visual-glow" aria-hidden="true" />

          <div className="industrial-panel">
            <div className="panel-topline">
              <span>PROJETO NA-2026</span>
              <span className="panel-live"><i /> EM DESENVOLVIMENTO</span>
            </div>

            <svg
              className="industrial-drawing"
              viewBox="0 0 680 540"
              role="img"
              aria-label="Ilustração técnica de uma estrutura metálica industrial"
            >
              <defs>
                <linearGradient id="metalGradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#f4c430" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#9f7610" stopOpacity="0.45" />
                </linearGradient>
                <pattern id="blueprintGrid" width="34" height="34" patternUnits="userSpaceOnUse">
                  <path d="M 34 0 L 0 0 0 34" fill="none" stroke="#ffffff" strokeOpacity="0.05" strokeWidth="1" />
                </pattern>
              </defs>

              <rect width="680" height="540" fill="url(#blueprintGrid)" />

              <g fill="none" stroke="url(#metalGradient)" strokeWidth="7" strokeLinecap="square" strokeLinejoin="miter">
                {mainPaths.map((path, index) => (
                  <path
                    key={path}
                    className="drawing-path"
                    d={path}
                    opacity={index > 4 ? 0.45 : 1}
                    style={{ animationDelay: `${0.25 + index * 0.09}s` }}
                  />
                ))}
              </g>

              <g fill="none" stroke="#d7d7d7" strokeOpacity="0.46" strokeWidth="2">
                <path d="M72 463H607" />
                <path d="M89 482H590" strokeDasharray="10 10" />
                <path d="M77 202V439" strokeDasharray="7 7" />
                <path d="M603 202V439" strokeDasharray="7 7" />
                <path d="M74 198L100 198M580 198L606 198" />
                <path d="M68 433L94 433M586 433L612 433" />
              </g>

              <g fill="#f4c430">
                {[
                  [105, 215, 8], [340, 84, 8], [575, 215, 8], [153, 430, 7], [527, 430, 7],
                ].map(([cx, cy, r], index) => (
                  <circle
                    key={`${cx}-${cy}`}
                    className="drawing-point"
                    cx={cx}
                    cy={cy}
                    r={r}
                    style={{ animationDelay: `${1 + index * 0.08}s` }}
                  />
                ))}
              </g>

              <g fill="#efefef" fontFamily="Manrope, sans-serif" fontSize="13" fontWeight="700" letterSpacing="2">
                <text x="92" y="188">EIXO A</text>
                <text x="543" y="188">EIXO F</text>
                <text x="299" y="58">COBERTURA</text>
                <text x="260" y="510">ESTRUTURA PRINCIPAL</text>
              </g>
            </svg>

            <div className="panel-footer">
              <div><small>ESCOPO</small><strong>PROJETO + EXECUÇÃO</strong></div>
              <div><small>PADRÃO</small><strong>ALTA PERFORMANCE</strong></div>
            </div>
          </div>

          <div className="floating-badge badge-quality">
            <ShieldCheck aria-hidden="true" />
            <span><small>Compromisso com</small>SEGURANÇA</span>
          </div>

          <div className="floating-badge badge-experience">
            <strong>360°</strong>
            <span>Projeto à execução</span>
          </div>
        </Reveal>
      </div>

      <Reveal className="container stats-strip" delay={80}>
        <article><strong>01</strong><span><b>Diagnóstico</b>Levantamento técnico da necessidade</span></article>
        <article><strong>02</strong><span><b>Produção</b>Fabricação e controle de qualidade</span></article>
        <article><strong>03</strong><span><b>Entrega</b>Montagem segura conforme o escopo</span></article>
      </Reveal>
    </section>
  );
}
