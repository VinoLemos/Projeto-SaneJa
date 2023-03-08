import React from "react";
import HeroSection from "../layout/HeroSection";

function Home() {
  return (
    <>
      <HeroSection
        title="Sanejá"
        subtitle="A sua plataforma de atendimento"
        paragraph="A ferramenta certa para fazer o adequamento do seu
    imóvel e te ajudar a receber a rede de"
        span="saneamento básico"
        btnText="cadastro"
        link="/cadastro"
        btnText2="login"
        link2="/login"
      />
    </>
  );
}

export default Home;
