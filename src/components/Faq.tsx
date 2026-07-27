import { Reveal } from "./Reveal";

const questions = [
  {
    question: "As estruturas são feitas sob medida?",
    answer:
      "Sim. A solução é definida de acordo com a necessidade do cliente, dimensões, aplicação, condições do local e escopo combinado para fabricação e montagem.",
  },
  {
    question: "Quais informações ajudam no orçamento?",
    answer:
      "Tipo de serviço, medidas aproximadas, localização, fotos do espaço e uma breve descrição do uso esperado ajudam a equipe a entender melhor a demanda inicial.",
  },
  {
    question: "Vocês fazem manutenção e reforço estrutural?",
    answer:
      "O atendimento inclui manutenção industrial, reparos, substituição de componentes, reforços e adequações, conforme a avaliação de cada situação.",
  },
  {
    question: "Como funciona o processo até a montagem?",
    answer:
      "O fluxo apresentado no site passa por entendimento da necessidade, planejamento, fabricação e montagem. As etapas específicas variam conforme o serviço contratado.",
  },
];

export function Faq() {
  return (
    <section className="section faq-section" id="faq">
      <div className="container faq-layout">
        <Reveal className="faq-intro" direction="left">
          <span className="section-kicker">Dúvidas frequentes</span>
          <h2>Informações para começar com clareza.</h2>
          <p>
            Reunimos respostas rápidas para facilitar o primeiro contato e deixar o pedido de orçamento
            mais objetivo.
          </p>
          <a className="button button-outline" href="#orcamento">
            Solicitar uma análise
          </a>
        </Reveal>

        <div className="faq-list">
          {questions.map((item, index) => (
            <Reveal delay={index * 80} key={item.question}>
              <details className="faq-item" open={index === 0}>
                <summary>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{item.question}</strong>
                  <i aria-hidden="true" />
                </summary>
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
