import React from "react";

import { Link } from "react-router-dom";
import { Grid, Button, Card, CardContent, Typography } from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { css } from "@emotion/css";

import NavigationBar from "../layout/NavigationBar";

function Properties() {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <NavigationBar />
      <Grid container sx={{ justifyContent: "center" }}>
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
      </Grid>

      <Grid
        item
        sm={8}
        xs={8}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          flexWrap: "wrap",
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
                flexWrap: "wrap",
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
