import React from "react";

import { AiOutlineWhatsApp, AiOutlineMail } from "react-icons/ai";

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
    font-size: 90px;
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
    background-color: rgba(0, 0, 0, 0.5);
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

  #contact-list {
    list-style-type: none;
    text-align: left;
  }

  #contact-list p {
    padding: 0;
  }

  #contact-list svg {
    width: 30px;
    color: #8dadb0;
    margin-right: 1em;
  }
`;

function HeroSection({
  title,
  subtitle,
  paragraph,
  span,
  contact,
  contactTitle,
  contactInfo,
  emailTitle,
  emailInfo,
}) {
  return (
    <Styles>
      <div>
        <video src={water} autoPlay loop muted />
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <section>
          <p>
            {paragraph}
            {span && <span>{span}</span>}
          </p>
          {contact && (
            <ul id="contact-list">
              <li>
                <p>
                  <AiOutlineWhatsApp />
                  <strong>
                    <span>{contactTitle}</span>
                  </strong>
                  {contactInfo}
                </p>
              </li>
              <li>
                <p>
                  <AiOutlineMail />
                  <strong>
                    <span>{emailTitle}</span>
                  </strong>
                  {emailInfo}
                </p>
              </li>
            </ul>
          )}
        </section>
      </div>
    </Styles>
  );
}

export default HeroSection;
