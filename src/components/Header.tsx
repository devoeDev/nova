import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const navigation = [
  { href: "#servicos", label: "Serviços" },
  { href: "#projetos", label: "Projetos" },
  { href: "#soldagem", label: "Soldagem" },
  { href: "#processo", label: "Processo" },
  { href: "#faq", label: "Dúvidas" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateHeader = () => {
      setScrolled(window.scrollY > 16);
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0);
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    window.addEventListener("resize", updateHeader);

    return () => {
      window.removeEventListener("scroll", updateHeader);
      window.removeEventListener("resize", updateHeader);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const sections = Array.from(document.querySelectorAll<HTMLElement>("main section[id]"));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-30% 0px -58% 0px", threshold: [0, 0.15, 0.4] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const closeOnDesktop = () => {
      if (window.innerWidth > 980) setMenuOpen(false);
    };
    window.addEventListener("resize", closeOnDesktop);
    return () => window.removeEventListener("resize", closeOnDesktop);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`} id="topo">
      <span
        className="scroll-progress"
        style={{ transform: `scaleX(${scrollProgress})` }}
        aria-hidden="true"
      />

      <div className="container header-inner">
        <a className="brand" href="#inicio" aria-label="Nova Aliança - Página inicial" onClick={closeMenu}>
          <Logo />
        </a>

        <button
          className={`menu-toggle ${menuOpen ? "is-active" : ""}`}
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

        <nav
          className={`main-nav ${menuOpen ? "is-open" : ""}`}
          id="main-navigation"
          aria-label="Navegação principal"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              className={activeSection === item.href.slice(1) ? "active" : ""}
              href={item.href}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}

          <a className="button button-sm button-primary nav-cta" href="#orcamento" onClick={closeMenu}>
            Solicitar orçamento
            <ArrowUpRight aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  );
}
