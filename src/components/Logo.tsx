import { useState } from "react";

interface LogoProps {
  footer?: boolean;
}

export function Logo({ footer = false }: LogoProps) {
  const [failed, setFailed] = useState(false);
  const logoUrl = `${import.meta.env.BASE_URL}logo1.png`;

  if (failed) {
    return (
      <span className={`brand-fallback ${footer ? "brand-fallback-footer" : ""}`}>
        <strong>NOVA ALIANÇA</strong>
        <small>SOLUÇÕES INDUSTRIAIS</small>
      </span>
    );
  }

  return (
    <img
      className={`brand-logo ${footer ? "brand-logo-footer" : ""}`}
      src={logoUrl}
      alt="Nova Aliança Soluções Industriais"
      width={footer ? 290 : 310}
      height={footer ? 90 : 92}
      loading={footer ? "lazy" : "eager"}
      onError={() => setFailed(true)}
    />
  );
}
