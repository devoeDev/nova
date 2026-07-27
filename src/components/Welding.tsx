import { ArrowUpRight, ScanLine, ShieldCheck, Sparkles } from "lucide-react";
import type { CSSProperties } from "react";
import { openWhatsApp } from "../lib/whatsapp";
import { Reveal } from "./Reveal";

const sparks = [
  [-138, -92, -0.12, 4], [-108, -142, -0.46, 3], [-55, -126, -0.78, 5],
  [30, -136, -0.32, 3], [94, -104, -0.66, 4], [145, -48, -0.91, 3],
  [128, 30, -0.22, 5], [80, 86, -0.57, 3], [20, 106, -0.84, 4],
  [-68, 88, -0.38, 3], [-126, 42, -0.73, 5], [-162, -18, -1.04, 3],
];

export function Welding() {
  return (
    <section className="section welding-section" id="soldagem">
      <div className="welding-grid-lines" aria-hidden="true" />

      <div className="container welding-layout">
        <Reveal className="welding-visual" direction="left" aria-hidden="true">
          <div className="welding-glow" />

          <div className="welding-frame">
            <div className="welding-status">
              <span><i /> PROCESSO CONTROLADO</span>
              <strong>SOLDA INDUSTRIAL</strong>
            </div>

            <div className="welding-scene">
              <div className="metal-plate plate-horizontal" />
              <div className="metal-plate plate-vertical" />

              <svg className="welding-torch" viewBox="0 0 230 180" focusable="false">
                <defs>
                  <linearGradient id="torchMetal" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#f3f3f1" />
                    <stop offset="42%" stopColor="#8d8d89" />
                    <stop offset="100%" stopColor="#292927" />
                  </linearGradient>
                </defs>
                <path d="M28 28h94l41 37-42 45-43-36H28z" fill="#161616" stroke="#3d3d3b" strokeWidth="5" />
                <path d="M118 76l31 28-43 47-31-29z" fill="url(#torchMetal)" />
                <path d="M144 108l30 27-22 25-31-28z" fill="#202020" stroke="#777" strokeWidth="3" />
                <path d="M170 137l27 24" fill="none" stroke="#dadad7" strokeWidth="10" strokeLinecap="round" />
                <path d="M195 160l17 15" fill="none" stroke="#f4c430" strokeWidth="6" strokeLinecap="round" />
              </svg>

              <div className="welding-core" />
              <div className="welding-flare" />
              <div className="welding-beam" />

              {sparks.map(([tx, ty, delay, size], index) => (
                <span
                  className="welding-spark"
                  key={`${tx}-${ty}-${index}`}
                  style={{
                    "--tx": `${tx}px`,
                    "--ty": `${ty}px`,
                    "--delay": `${delay}s`,
                    "--size": `${size}px`,
                  } as CSSProperties}
                />
              ))}
            </div>

            <div className="welding-metrics">
              <div><small>PROCESSOS</small><strong>MIG • MAG • ELETRODO</strong></div>
              <div><small>CONTROLE</small><strong>PRECISÃO E ACABAMENTO</strong></div>
            </div>
          </div>
        </Reveal>

        <Reveal className="welding-content" direction="right" delay={100}>
          <span className="section-kicker">Soldagem industrial</span>
          <h2>Uniões precisas para estruturas mais resistentes.</h2>
          <p>Executamos serviços de soldagem em fabricação, montagem, reforços e manutenção, com preparação adequada das peças, controle do processo e acabamento profissional.</p>

          <div className="welding-features">
            <article><ScanLine aria-hidden="true" /><div><strong>Precisão na execução</strong><span>Soldas alinhadas ao projeto e às necessidades de cada estrutura.</span></div></article>
            <article><ShieldCheck aria-hidden="true" /><div><strong>Segurança e resistência</strong><span>Processos cuidadosos para uniões confiáveis e duráveis.</span></div></article>
            <article><Sparkles aria-hidden="true" /><div><strong>Acabamento profissional</strong><span>Preparação, limpeza e finalização compatíveis com o serviço executado.</span></div></article>
          </div>

          <button
            className="button button-primary button-lg"
            type="button"
            onClick={() => openWhatsApp("Olá! Gostaria de solicitar um orçamento para um serviço de soldagem industrial.")}
          >
            Solicitar orçamento de soldagem
            <ArrowUpRight aria-hidden="true" />
          </button>
        </Reveal>
      </div>
    </section>
  );
}
