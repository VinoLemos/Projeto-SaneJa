import React from "react";

import { Button } from "react-bootstrap";

import styled from "styled-components";

const Styles = styled.div`
  .btn {
    background-color: #51888a;
    border: none;
    color: #fff;
    margin-right: 1em;

    &:hover {
      background-color: #5f9ea1;
    }
  }
`;

function SubmitButton({ text }) {
  return (
    <Styles>
      <Button>{text}</Button>
    </Styles>
  );
}

export default SubmitButton;
