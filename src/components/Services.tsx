import {
  Construction,
  PanelsTopLeft,
  Settings,
  Shield,
  Warehouse,
} from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { Reveal } from "./Reveal";

type ServiceIcon = ComponentType<SVGProps<SVGSVGElement>>;

interface Service {
  title: string;
  description: string;
  items: string[];
  icon: ServiceIcon;
}

function StairsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3 21h4v-4h4v-4h4V9h4V5h2" />
      <path d="M3 17v4h18" />
    </svg>
  );
}

const services: Service[] = [
  {
    title: "Coberturas metálicas",
    description:
      "Coberturas para galpões, áreas produtivas, estacionamentos e espaços comerciais, com dimensionamento adequado e acabamento profissional.",
    items: [
      "Galpões e áreas industriais",
      "Ampliações e adequações",
      "Estruturas sob medida",
    ],
    icon: Warehouse,
  },
  {
    title: "Estruturas metálicas",
    description:
      "Fabricação e montagem de estruturas para projetos industriais, comerciais e civis, com foco em resistência, precisão e durabilidade.",
    items: [
      "Pórticos e treliças",
      "Reforços estruturais",
      "Fabricação personalizada",
    ],
    icon: Construction,
  },
  {
    title: "Escadas e mezaninos",
    description:
      "Soluções para acesso, circulação e aproveitamento inteligente de áreas, respeitando as necessidades do ambiente e da operação.",
    items: [
      "Escadas industriais",
      "Mezaninos metálicos",
      "Acessos técnicos",
    ],
    icon: StairsIcon,
  },
  {
    title: "Plataformas industriais",
    description:
      "Plataformas de trabalho, inspeção e manutenção desenvolvidas para proporcionar acesso seguro a máquinas, equipamentos e áreas elevadas.",
    items: [
      "Plataformas de operação",
      "Passarelas técnicas",
      "Adequação de acessos",
    ],
    icon: PanelsTopLeft,
  },
  {
    title: "Corrimãos e guarda-corpos",
    description:
      "Sistemas de proteção e apoio para circulação segura em escadas, passarelas, plataformas, mezaninos e demais áreas de risco.",
    items: [
      "Proteção de áreas elevadas",
      "Corrimãos industriais",
      "Soluções personalizadas",
    ],
    icon: Shield,
  },
  {
    title: "Manutenção industrial",
    description:
      "Serviços corretivos e preventivos para preservar a segurança, a disponibilidade e o desempenho de estruturas e componentes industriais.",
    items: [
      "Reparos e reforços",
      "Substituição de componentes",
      "Adequações estruturais",
    ],
    icon: Settings,
  },
];

export function Services() {
  return (
    <section className="section services-section" id="servicos">
      <div className="container">
        <Reveal className="section-heading">
          <div>
            <span className="section-kicker">Nossos serviços</span>
            <h2>Soluções robustas para demandas industriais.</h2>
          </div>

          <p>
            Atuação completa em fabricação, montagem e manutenção de estruturas,
            com soluções desenvolvidas para cada necessidade operacional.
          </p>
        </Reveal>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal
                as="article"
                className={`service-card ${index === 0 ? "featured" : ""}`}
                delay={index * 90}
                key={service.title}
              >
                <div className="service-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="service-icon">
                  <Icon aria-hidden="true" />
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <ul>
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
