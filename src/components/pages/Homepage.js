import React from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import NavigationBar from "../layout/NavigationBar";

import { css } from "@emotion/css";

function Homepage() {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <NavigationBar />
      <Grid item sm={12} xs={12}>
        <Typography component="h1" variant="h5" mt={5} textAlign="center">
          Olá,{" "}
          <span
            className={css`
              text-decoration: underline;
              text-underline-position: under;
            `}
          >
            Usuário
          </span>
          !
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Homepage;
