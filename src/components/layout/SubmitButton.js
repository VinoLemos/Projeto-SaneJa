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
    background-color: rgba(0, 0, 0, 0.2);
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
  a {
    width: 5%;
  }
`;

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large"];

function SubmitButton({ text, btnStyle, btnSize, link, onClick }) {
  const checkBtnStyle = STYLES.includes(btnStyle) ? btnStyle : STYLES[0];
  const checkBtnSize = SIZES.includes(btnSize) ? btnSize : SIZES[0];
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
    </Styles>
  );
}

export default SubmitButton;
