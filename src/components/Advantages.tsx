import { ClipboardCheck, Gem, Handshake, ShieldCheck, type LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";

const advantages: Array<{ title: string; description: string; icon: LucideIcon }> = [
  { title: "Segurança", description: "Processos planejados para reduzir riscos e garantir uma execução responsável em todas as etapas do serviço.", icon: ShieldCheck },
  { title: "Qualidade", description: "Materiais selecionados, fabricação cuidadosa e acabamento profissional para soluções com resistência e alto padrão.", icon: Gem },
  { title: "Compromisso", description: "Equipe especializada, comunicação transparente e foco em cumprir o escopo acordado com o cliente.", icon: Handshake },
];

export function Advantages() {
  return (
    <section className="section advantages-section" id="diferenciais">
      <div className="container advantages-layout">
        <Reveal className="advantages-intro" direction="left">
          <span className="section-kicker">Por que escolher a Nova Aliança?</span>
          <h2>Força técnica para entregar com confiança.</h2>
          <p>Cada projeto é conduzido com planejamento, responsabilidade e atenção aos detalhes. Nosso compromisso é entregar uma solução segura, funcional e preparada para durar.</p>

          <div className="technical-note">
            <ClipboardCheck aria-hidden="true" />
            <div><strong>Atendimento consultivo</strong><span>Entendemos a necessidade antes de definir a melhor solução para o projeto.</span></div>
          </div>
        </Reveal>

        <div className="advantages-list">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <Reveal as="article" className="advantage-card" delay={index * 110} key={advantage.title}>
                <div className="advantage-icon"><Icon aria-hidden="true" /></div>
                <div>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{advantage.title}</h3>
                  <p>{advantage.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
