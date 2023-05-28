import React from "react";

import { Grid, Paper } from "@mui/material";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";

import FormUser from "../layout/FormUser";
import Video from "../layout/Video";

function RegisterUser() {
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid item xs={12} sm={4} md={7}>
        <Video />
      </Grid>
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
        bgcolor="#c7d9d8"
      >
        <FormUser
          formIcon={<AccountBoxOutlinedIcon />}
          formTitle="Faça o cadastro"
          formParagraph="Já tem cadastro?"
          formLink="/login"
          formLinkText="Login"
        />
      </Grid>
    </Grid>
  );
}

export default RegisterUser;
