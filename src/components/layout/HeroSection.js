import React from "react";

import { Container, Box } from "@mui/material";
import { AiOutlineWhatsApp, AiOutlineMail } from "react-icons/ai";
import { css } from "@emotion/css";

import Video from "./Video";
import NavButton from "./NavButton";

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
  btnText2,
  link2,
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "95vh",
      }}
    >
      <Video />
      <Container maxWidth="lg">
        <h1
          className={css`
            color: #8dadb0;
            font-size: 4em;
            text-shadow: 2px 2px #333;
          `}
        >
          {title}
        </h1>
        <h3
          className={css`
            font-weight: 500;
            color: #fff;
            text-shadow: 2px 2px #333;
          `}
        >
          {subtitle}
        </h3>
        <section
          className={css`
            flex-wrap: wrap;
            padding: 0.5em;
            backdrop-filter: blur(10px);
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
          `}
        >
          <p
            className={css`
              font-weight: 600;
              color: #fff;
            `}
          >
            {paragraph}
            {span && (
              <span
                className={css`
                  background-color: rgba(94, 109, 110, 0.5);
                  padding: 0.2em;
                `}
              >
                {span}
              </span>
            )}
          </p>
          {contact && (
            <ul
              className={css`
                color: #fff;
                list-style-type: none;
              `}
            >
              <li>
                <p>
                  <AiOutlineWhatsApp
                    className={css`
                      color: #8dadb0;
                      font-weight: 600;
                      width: 30px;
                    `}
                  />
                  <strong>
                    <span
                      className={css`
                        background-color: rgba(94, 109, 110, 0.5);
                        padding: 0.2em;
                      `}
                    >
                      {contactTitle}
                    </span>
                  </strong>
                  {contactInfo}
                </p>
              </li>
              <li>
                <p>
                  <AiOutlineMail
                    className={css`
                      color: #8dadb0;
                      font-weight: 600;
                      width: 30px;
                    `}
                  />
                  <strong>
                    <span
                      className={css`
                        background-color: rgba(94, 109, 110, 0.5);
                        padding: 0.2em;
                      `}
                    >
                      {emailTitle}
                    </span>
                  </strong>
                  {emailInfo}
                </p>
              </li>
            </ul>
          )}
        </section>
        {btnText && (
          <NavButton
            text={btnText}
            link={link}
            text2={btnText2}
            link2={link2}
          />
        )}
      </Container>
    </Box>
  );
}

export default HeroSection;
