import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

interface Capability {
  code: string;
  title: string;
  description: string;
  tags: string[];
  drawing: "warehouse" | "mezzanine" | "platform";
}

const capabilities: Capability[] = [
  {
    code: "CAP-01",
    title: "Galpões e coberturas",
    description:
      "Estruturas dimensionadas para áreas industriais, comerciais, ampliações e proteção de operações.",
    tags: ["Pórticos", "Treliças", "Coberturas"],
    drawing: "warehouse",
  },
  {
    code: "CAP-02",
    title: "Mezaninos e acessos",
    description:
      "Soluções para circulação, aproveitamento de espaço e acesso técnico com fabricação sob medida.",
    tags: ["Mezaninos", "Escadas", "Guarda-corpos"],
    drawing: "mezzanine",
  },
  {
    code: "CAP-03",
    title: "Plataformas industriais",
    description:
      "Plataformas e passarelas para operação, inspeção e manutenção de máquinas e equipamentos.",
    tags: ["Passarelas", "Operação", "Manutenção"],
    drawing: "platform",
  },
];

function CapabilityDrawing({ type }: { type: Capability["drawing"] }) {
  if (type === "warehouse") {
    return (
      <svg viewBox="0 0 520 300" role="img" aria-label="Desenho técnico de galpão metálico">
        <g className="capability-grid">
          {Array.from({ length: 13 }).map((_, index) => (
            <path key={`v-${index}`} d={`M${index * 44} 0V300`} />
          ))}
          {Array.from({ length: 8 }).map((_, index) => (
            <path key={`h-${index}`} d={`M0 ${index * 44}H520`} />
          ))}
        </g>
        <g className="capability-main-lines">
          <path d="M54 242V112L260 40l206 72v130" />
          <path d="M54 112h412" />
          <path d="M96 242V136h328v106" />
          <path d="M150 242V136m72 106V136m76 106V136m72 106V136" />
          <path d="M54 112l42 24 54-24 72 24 38-24 38 24 72-24 54 24 42-24" />
        </g>
        <g className="capability-detail-lines">
          <path d="M32 260h456" />
          <path d="M54 276h412" strokeDasharray="9 9" />
        </g>
      </svg>
    );
  }

  if (type === "mezzanine") {
    return (
      <svg viewBox="0 0 520 300" role="img" aria-label="Desenho técnico de mezanino e escada">
        <g className="capability-grid">
          {Array.from({ length: 13 }).map((_, index) => (
            <path key={`v-${index}`} d={`M${index * 44} 0V300`} />
          ))}
          {Array.from({ length: 8 }).map((_, index) => (
            <path key={`h-${index}`} d={`M0 ${index * 44}H520`} />
          ))}
        </g>
        <g className="capability-main-lines">
          <path d="M56 224h408V94H56z" />
          <path d="M56 136h408" />
          <path d="M92 224v-88m92 88v-88m152 88v-88m92 88v-88" />
          <path d="M84 224l126-88" />
          <path d="M96 214h34v-24h34v-24h34v-24h34" />
          <path d="M56 80h408M56 80v28m408-28v28" />
        </g>
        <g className="capability-detail-lines">
          <path d="M36 246h448" />
          <path d="M72 64h376" strokeDasharray="8 8" />
        </g>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 520 300" role="img" aria-label="Desenho técnico de plataforma industrial">
      <g className="capability-grid">
        {Array.from({ length: 13 }).map((_, index) => (
          <path key={`v-${index}`} d={`M${index * 44} 0V300`} />
        ))}
        {Array.from({ length: 8 }).map((_, index) => (
          <path key={`h-${index}`} d={`M0 ${index * 44}H520`} />
        ))}
      </g>
      <g className="capability-main-lines">
        <path d="M56 218h408v-74H56z" />
        <path d="M82 218v-74m92 74v-74m172 74v-74m92 74v-74" />
        <path d="M56 130h408" />
        <path d="M68 94h384v36H68z" />
        <path d="M68 94V62m64 32V62m64 32V62m64 32V62m64 32V62m64 32V62m64 32V62" />
        <path d="M46 252h428" />
      </g>
      <g className="capability-detail-lines">
        <path d="M82 218l92-74m0 74L82 144m264 74l92-74m0 74l-92-74" />
      </g>
    </svg>
  );
}

export function ProjectShowcase() {
  return (
    <section className="section capabilities-section" id="projetos">
      <div className="container">
        <Reveal className="section-heading capabilities-heading">
          <div>
            <span className="section-kicker">Capacidades de projeto</span>
            <h2>Soluções pensadas para cada operação.</h2>
          </div>
          <p>
            Cada estrutura parte de uma necessidade real. A solução é definida conforme o espaço,
            o uso, os acessos e as condições de montagem.
          </p>
        </Reveal>

        <div className="capabilities-grid">
          {capabilities.map((capability, index) => (
            <Reveal
              as="article"
              className="capability-card"
              delay={index * 110}
              key={capability.code}
            >
              <div className="capability-card-top">
                <span>{capability.code}</span>
                <a href="#orcamento" aria-label={`Solicitar orçamento para ${capability.title}`}>
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </div>

              <div className="capability-drawing">
                <CapabilityDrawing type={capability.drawing} />
                <span className="capability-scan" aria-hidden="true" />
              </div>

              <div className="capability-copy">
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
                <ul aria-label={`Aplicações de ${capability.title}`}>
                  {capability.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="capabilities-note" delay={160}>
          <span>01</span>
          <p>
            Os desenhos acima representam as categorias de solução e não obras específicas. O projeto
            final é definido após o levantamento da necessidade.
          </p>
          <a href="#orcamento">Apresentar meu projeto <ArrowUpRight aria-hidden="true" /></a>
        </Reveal>
      </div>
    </section>
  );
}
