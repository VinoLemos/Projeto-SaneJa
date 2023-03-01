import React from "react";

import HeroSection from "../layout/HeroSection";

function About() {
  return (
    <section>
      <HeroSection
        title="Nós"
        subtitle="Somos uma solução para facilitar o acesso ao saneamento básico"
        paragraph="Em nossa plataforma será possível que você faça seu cadastro, informe
      o seu imóvel e agende visitas técnicas com nossos especialistas para
      que a análise seja feita e tudo esteja certo para que você receba a
      sua rede de saneamento básico,"
        span="sem dor de cabeça!"
      />
    </section>
  );
}

export default About;
