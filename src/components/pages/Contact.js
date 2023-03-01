import React from "react";

import HeroSection from "../layout/HeroSection";

function Contact() {
  return (
    <>
      <HeroSection
        title="Contato"
        subtitle="Surgiu uma dúvida? Fale conosco!"
        paragraph="Qualquer dúvida ou sujestão de como podemos melhorar, entre em contato
    conosco através dos canais abaixo:"
        contact="true"
        contactTitle="Whatsapp: "
        contactInfo="(13) 99999-9999"
        emailTitle="Email: "
        emailInfo="sacsaneja@saneja.com.br"
      />
    </>
  );
}

export default Contact;
