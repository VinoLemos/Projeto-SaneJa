import React from "react";

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

import { css } from "@emotion/css";

import NavigationBar from "../layout/NavigationBar";

import water from "../../img/pixabay-water.jpeg";
import { Link } from "react-router-dom";

function Properties() {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid
        item
        sm={12}
        xs={12}
        sx={{ minHeight: "40vh", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)" }}
      >
        <img
          src={water}
          className={css`
            object-fit: cover;
            width: 100vw;
            height: 40vh;
            position: absolute;
            z-index: -1;
          `}
          alt="Imagem de gotas de água"
        />
        <NavigationBar />
      </Grid>
      <Button variant="contained" sx={{ marginTop: 4 }}>
        <AddCircleOutlineOutlinedIcon sx={{ marginRight: 1 }} />
        <Link
          to="/cadastro-imovel"
          className={css`
            text-decoration: none;
            color: #fff;

            &:hover {
              color: #fff;
            }
          `}
        >
          Novo imóvel
        </Link>
      </Button>
      <Grid
        item
        sm={12}
        xs={12}
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Card
          variant="outlined"
          sx={{
            minWidth: 250,
            marginTop: 6,
            bgcolor: "secondary.main",
          }}
        >
          <CardContent>
            <Typography sx={{ fontSize: 20 }} color="primary.main">
              Imóvel RGI:
            </Typography>
            <Typography sx={{ fontSize: 16, color: "#666" }}>
              Hidrômetro:
            </Typography>
            <Typography sx={{ fontSize: 14 }}>Rua</Typography>
            <Typography sx={{ fontSize: 14 }}>Bairro - CEP</Typography>
            <Typography sx={{ fontSize: 14 }}>Complemento</Typography>
            <Typography sx={{ fontSize: 14 }}>Cidade, Estado</Typography>
            <Grid
              sx={{
                marginTop: 2,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Button variant="outlined" color="success">
                Alterar
              </Button>
              <Button variant="outlined" color="error">
                Excluir
              </Button>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Properties;
