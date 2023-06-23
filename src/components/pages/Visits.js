import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../../env";

import {
  Grid,
  Button,
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { css } from "@emotion/css";

import NavigationBar from "../layout/NavigationBar";

function Visits() {
  const [visits, setVisits] = useState([]);
  const [agentName, setAgentName] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch(`${API_URL}/technicalvisit/get-person-visits`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((json) => setVisits(json))
      .catch((err) => console.log(err));
  }, [token]);

  function formatDateTime(dateTimeString) {
    const dateTime = new Date(dateTimeString);
    const options = {
      dateStyle: "short",
    };
    return dateTimeString != null
      ? dateTime.toLocaleString(undefined, options)
      : " ";
  }

  function getStatusColor(status) {
    if (status === "Pending") {
      return {
        backgroundColor: "warning.main",
        color: "warning.contrastText",
      };
    }
    if (status === "In Progress") {
      return {
        backgroundColor: "info.main",
        color: "info.contrastText",
      };
    }
    if (status === "Finished") {
      return {
        backgroundColor: "success.main",
        color: "success.contrastText",
      };
    }
    if (status === "Canceled") {
      return {
        backgroundColor: "error.main",
        color: "error.contrastText",
      };
    }
    return {};
  }

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
        {visits.length === 0 ? (
          <Typography sx={{ fontSize: 20 }} color="primary.main" mt={4}>
            Você ainda não possui visitas agendadas.
          </Typography>
        ) : (
          visits.map((visit) => {
            const statusColor = getStatusColor(visit.visitStatus);
            return (
              <Card
                variant="outlined"
                sx={{
                  minWidth: 250,
                  marginTop: 6,
                  bgcolor: "secondary.main",
                }}
                key={visit.id}
              >
                <CardContent key={visit.id}>
                  <Typography sx={{ fontSize: 20 }} color="primary.main">
                    Imóvel: {visit.property.street}, {visit.property.number}
                  </Typography>
                  <Typography sx={{ fontSize: 16, color: "#666" }}>
                    {visit.agentName !== null
                      ? setAgentName(visit.agentName) && { agentName }
                      : ""}
                  </Typography>
                  <Typography sx={{ fontSize: 14 }}>
                    Data: {formatDateTime(visit.visitRequestDate)}
                  </Typography>
                  <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    mt={3}
                  >
                    <Box
                      key={visit.id}
                      sx={{
                        display: "inline-block",
                        padding: "4px 8px",
                        borderRadius: "4px",
                        ...statusColor,
                      }}
                    >
                      {visit.visitStatus === "Pending" && "Pendente"}
                      {visit.visitStatus === "In Progress" && "Em Progresso"}
                      {visit.visitStatus === "Finished" && "Finalizada"}
                      {visit.visitStatus === "Canceled" && "Cancelada"}
                    </Box>
                  </Grid>
                </CardContent>
              </Card>
            );
          })
        )}
      </Grid>
    </Grid>
  );
}

export default Visits;
