import React from "react";

import { Grid, Typography } from "@mui/material";

import NavBarEmployee from "../layout/NavBarEmployee";

function Agent() {
  return (
    <Grid>
      <NavBarEmployee />
      <Grid sx={{ textAlign: "center", marginTop: 5 }}>
        <Typography component="h1" variant="h5" marginBottom={5}>
          Área do Agente
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Agent;
