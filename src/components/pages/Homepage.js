import React, { useEffect, useState } from "react";
import { API_URL } from "../../env";

import axios from "axios";

import { Grid, Typography, Button } from "@mui/material";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Link } from "react-router-dom";

import NavigationBar from "../layout/NavigationBar";

import { css } from "@emotion/css";

function Homepage() {
  const token = localStorage.getItem("token");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    axios
      .get(`${API_URL}/person/get-client-details`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) => {
        setUserName(data.data.name);
      })
      .catch((err) => console.log(err));
  });
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
            {userName}
          </span>
          !
        </Typography>
        <Grid
          container
          marginTop={8}
          justifyContent="center"
          direction="row"
          flexWrap="wrap"
        >
          <Button
            variant="contained"
            startIcon={<HomeOutlinedIcon />}
            sx={{ marginRight: 5 }}
          >
            <Link
              to="/imoveis"
              className={css`
                text-decoration: none;
                color: #fff;

                &:hover {
                  color: #fff;
                }
              `}
            >
              Meus Imóveis{" "}
            </Link>
          </Button>
          <Button
            variant="contained"
            startIcon={<ManageAccountsOutlinedIcon />}
          >
            <Link
              to="/perfil"
              className={css`
                text-decoration: none;
                color: #fff;

                &:hover {
                  color: #fff;
                }
              `}
            >
              Meu Perfil
            </Link>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Homepage;
