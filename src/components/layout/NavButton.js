import React from "react";

import { Link } from "react-router-dom";
import { css } from "@emotion/css";

const btnStyle = css`
  cursor: pointer;
  margin-top: 2em;
  margin-right: 2em;
  width: 20vh;
  text-indent: wrap;
  height: 40px;
  color: #fff;
  font-size: 1em;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.2);
  border: 2px solid #fff;

  &:hover {
    background-color: #fff;
    color: #333;
  }
`;

function SubmitButton({ text, link, text2, link2 }) {
  return (
    <>
      {text && (
        <Link
          to={link}
          className={css`
            text-decoration: none;
          `}
        >
          <button link={link} className={btnStyle}>
            {text}
          </button>
        </Link>
      )}
      {link2 && (
        <Link
          to={link2}
          className={css`
            text-decoration: none;
          `}
        >
          <button link2={link2} className={btnStyle}>
            {text2}
          </button>
        </Link>
      )}
    </>
  );
}

export default SubmitButton;
