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
        btnText="CADASTRO"
        btnStyle="btn--primary"
        btnSize="btn--large"
        link="/cadastro"
        btnText2="LOGIN"
        btnStyle2="btn--primary"
        btnSize2="btn--large"
        link2="/login"
      />
    </>
  );
}

export default Home;
