import React from "react";
import { Button } from "@mui/material";

import { css } from "@emotion/css";

function SubmitButton({ text, onClick }) {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={onClick}
      className={css`
        width: 100%;
      `}
    >
      {text}
    </Button>
  );
}

export default SubmitButton;
