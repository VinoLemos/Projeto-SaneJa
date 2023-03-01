import React from "react";

import water from "../../img/pexels-water.mp4";

import styled from "styled-components";

const Styles = styled.div`
  video {
    object-fit: cover;
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: -1;
  }

  div {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
  }

  h1 {
    color: #8dadb0;
    font-size: 100px;
    margin-top: 1em;
  }

  h3 {
    color: #7eb7bd;
    font-size: 22px;
    font-weight: 600;
    padding-left: 1em;
  }

  section {
    width: 450px;
    flex-wrap: wrap;
  }

  p {
    color: #fff;
    font-size: 18px;
    font-weight: 100;
    padding: 3em;
  }

  span {
    background-color: rgba(94, 109, 110, 0.5);
    padding: 0.3em;
  }

  a {
    text-decoration: none;
    color: #fff;
    padding-right: 1em;
  }
`;

function HeroSection() {
  return (
    <Styles>
      <div>
        <video src={water} autoPlay loop muted />
        <h1>Sanejá </h1>
        <h3>A sua plataforma de atendimento</h3>
        <section>
          <p>
            Aqui você encontrará o passo a passo para fazer o adequamento do seu
            imóvel e, assim, receber sua rede de <span>saneamento básico</span>
          </p>
        </section>
      </div>
    </Styles>
  );
}

export default HeroSection;
