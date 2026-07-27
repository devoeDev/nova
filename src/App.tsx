import { Advantages } from "./components/Advantages";
import { Faq } from "./components/Faq";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { FinalCta, Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Process } from "./components/Process";
import { ProjectShowcase } from "./components/ProjectShowcase";
import { Quote } from "./components/Quote";
import { Services } from "./components/Services";
import { Welding } from "./components/Welding";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo-principal">
        Ir para o conteúdo
      </a>
      <div className="page-noise" aria-hidden="true" />
      <Header />
      <main id="conteudo-principal">
        <Hero />
        <Services />
        <ProjectShowcase />
        <Welding />
        <Advantages />
        <Process />
        <Faq />
        <Quote />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
