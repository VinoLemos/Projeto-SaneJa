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
    justify-content: left;
  }

  h3,
  p {
    color: #fff;
  }

  h1 {
    margin-top: 0.2em;
    color: #8dadb0;
    margin-left: 0.3em;
    font-size: 4em;
    text-shadow: 2px 2px #333;
  }

  h3 {
    font-size: 1em;
    font-weight: 300;
    padding: 0 2em 6em;
    text-shadow: 2px 2px #333;
  }

  p {
    font-size: 15px;
  }

  section {
    width: 80%;
    flex-wrap: wrap;
    margin-left: 1.8em;
    padding: 1em;
    background-color: rgba(0, 0, 0, 0.5);
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
