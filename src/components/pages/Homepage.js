import React from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import NavigationBar from "../layout/NavigationBar";

import { css } from "@emotion/css";

import water from "../../img/pixabay-water.jpeg";

function Homepage() {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid
        item
        sm={12}
        xs={12}
        sx={{ minHeight: "70vh", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)" }}
      >
        <img
          src={water}
          className={css`
            object-fit: cover;
            width: 100vw;
            height: 70vh;
            position: absolute;
            z-index: -1;
          `}
          alt="Imagem de gotas de água"
        />
        <NavigationBar />
      </Grid>
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
