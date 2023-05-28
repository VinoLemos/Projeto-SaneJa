import React from "react";
import { Link } from "react-router-dom";

import {
  Grid,
  Button,
  Card,
  CardContent,
  Typography,
  Badge,
} from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { css } from "@emotion/css";

import NavigationBar from "../layout/NavigationBar";

function Visits() {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <NavigationBar />
      <Grid container sx={{ justifyContent: "center" }}>
        <Button variant="contained" sx={{ marginTop: 4 }}>
          <AddCircleOutlineOutlinedIcon sx={{ marginRight: 1 }} />
          <Link
            to="/agendamento"
            className={css`
              text-decoration: none;
              color: #fff;

              &:hover {
                color: #fff;
              }
            `}
          >
            Nova visita
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
              Imóvel: Rua dos bobos, 71
            </Typography>
            <Typography sx={{ fontSize: 16, color: "#666" }}>
              Agente: Fulano
            </Typography>
            <Grid container justifyContent="center" alignItems="center" mt={3}>
              <Badge badgeContent="Concluída" color="success" />
            </Grid>

            <Grid
              sx={{
                marginTop: 2,
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            ></Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Visits;
