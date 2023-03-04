import React from "react";

import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import styled from "styled-components";

const Styles = styled.div`
  .btn {
    padding: 8px 20px;
    border-radius: 3px;
  }

  .btn--primary {
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    border: 1px solid #fff;
  }

  .btn--outline {
    background-color: transparent;
    color: #fff;
    padding: 8px 20px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    transition: all 0.3s ease-out;
  }

  .btn--secondary {
    background-color: #8dadb0;
    color: #fff;
    border: none;

    &:hover {
      background-color: #9bbfc2;
    }
  }

  .btn--primary:hover,
  .btn--outline:hover {
    background-color: #fff;
    color: #333;
  }

  .btn--medium {
    padding: 8px;
  }

  .btn--large {
    padding: 12px;
  }

  .btn--x-large {
    width: 100%;
    padding: 12px;
  }

  a {
    width: 5%;
  }
`;

const STYLES = ["btn--primary", "btn--outline", "btn--secondary"];
const SIZES = ["btn--medium", "btn--large", "btn--x-large"];

function SubmitButton({
  text,
  btnStyle,
  btnSize,
  link,
  text2,
  btnStyle2,
  btnSize2,
  link2,
  onClick,
}) {
  const checkBtnStyle = STYLES.includes(btnStyle) ? btnStyle : STYLES[0];
  const checkBtnSize = SIZES.includes(btnSize) ? btnSize : SIZES[0];
  const checkBtnStyle2 = STYLES.includes(btnStyle2) ? btnStyle2 : STYLES[0];
  const checkBtnSize2 = SIZES.includes(btnSize2) ? btnSize2 : SIZES[0];
  return (
    <Styles>
      {link ? (
        <Link to={link}>
          <Button
            className={`btn ${checkBtnStyle} ${checkBtnSize}`}
            link={link}
            onClick={onClick}
          >
            {text}
          </Button>
        </Link>
      ) : (
        <Button
          className={`btn ${checkBtnStyle} ${checkBtnSize}`}
          onClick={onClick}
        >
          {text}
        </Button>
      )}
      {link2 && (
        <Link to={link2}>
          <Button
            className={`btn ${checkBtnStyle2} ${checkBtnSize2}`}
            link2={link2}
            onClick={onClick}
          >
            {text2}
          </Button>
        </Link>
      )}
    </Styles>
  );
}

export default SubmitButton;
