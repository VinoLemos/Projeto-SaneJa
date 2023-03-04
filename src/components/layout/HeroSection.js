import React from "react";

import { AiOutlineWhatsApp, AiOutlineMail } from "react-icons/ai";

import water from "../../img/pexels-water.mp4";

import styled from "styled-components";
import SubmitButton from "./SubmitButton";

const Styles = styled.div`
  video {
    object-fit: cover;
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: -1;
  }

  div {
    text-align: left;
  }

  h3,
  p {
    color: #fff;
  }

  h1 {
    margin-top: 0.2em;
    margin-left: 0.8em;
    color: #8dadb0;
    font-size: 4em;
    text-shadow: 2px 2px #333;
  }

  h3 {
    font-size: 1em;
    font-weight: 300;
    margin-left: 3.2em;
    margin-bottom: 8em;
    text-shadow: 2px 2px #333;
  }

  p {
    font-size: 15px;
  }

  section {
    width: 80%;
    flex-wrap: wrap;
    margin-left: 2.5em;
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
  .btn {
    margin: 2em 2.5em;
    width: 120px;
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
  btnText,
  link,
  btnStyle,
  btnSize,
  btnText2,
  link2,
  btnStyle2,
  btnSize2,
}) {
  return (
    <Styles>
      <div className="d-flex flex-column">
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
        {btnText && (
          <SubmitButton
            text={btnText}
            btnStyle={btnStyle}
            link={link}
            btnSize={btnSize}
            text2={btnText2}
            btnStyle2={btnStyle2}
            link2={link2}
            btnSize2={btnSize2}
          />
        )}
      </div>
    </Styles>
  );
}

export default HeroSection;
