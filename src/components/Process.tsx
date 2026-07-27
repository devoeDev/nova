import { DraftingCompass, Factory, HardHat, MessagesSquare, type LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";

const steps: Array<{ title: string; description: string; icon: LucideIcon }> = [
  { title: "Entendimento", description: "Analisamos sua necessidade, contexto operacional, dimensões e expectativas.", icon: MessagesSquare },
  { title: "Planejamento", description: "Definimos a solução, os materiais, o escopo e as etapas de execução.", icon: DraftingCompass },
  { title: "Fabricação", description: "Produzimos os componentes com controle de medidas, qualidade e acabamento.", icon: Factory },
  { title: "Montagem", description: "Executamos a instalação com organização, segurança e atenção ao projeto.", icon: HardHat },
];

export function Process() {
  return (
    <section className="section process-section" id="processo">
      <div className="container">
        <Reveal className="section-heading compact">
          <div><span className="section-kicker">Do projeto à execução</span><h2>Um processo claro. Uma entrega consistente.</h2></div>
        </Reveal>

        <div className="process-grid">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Reveal as="article" className="process-card" delay={index * 90} key={step.title}>
                <span className="process-index">{String(index + 1).padStart(2, "0")}</span>
                <Icon aria-hidden="true" />
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
