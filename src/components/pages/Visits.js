import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../../env";

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
  const [visits, setVisits] = useState([]);
  const [statuses, setStatuses] = useState([]);
  const [properties, setProperties] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch(
      `${API_URL}/technicalvisit/get-person-visits`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => response.json())
      .then((json) => setVisits(json))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch(
      `${API_URL}/technicalvisit/list-visit-statuses`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => response.json())
      .then((json) => setStatuses(json))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch(
      `${API_URL}/ResidentialProperty/get-user-properties`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => response.json())
      .then((json) => setProperties(json))
      .catch((err) => console.log(err));
  }, []);

  function formatDateTime(dateTimeString) {
    const dateTime = new Date(dateTimeString);
    const options = {
      dateStyle: "short",
    };
    return dateTimeString != null ? dateTime.toLocaleString(undefined, options) : " ";
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
        {visits.map((visit) => {
          const property = properties.find(
            (property) => property.id === visit.residentialPropertyId
          );

          if (!property) {
            return null;
          }
          const propertyStreet = property.street;
          const propertyNumber = property.number;

          const statusInfo = statuses.find((status) => status.id === visit.statusId);

          if (!statusInfo) {
            return null
          }

          const statusMessage = statusInfo.status;

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
                <Typography sx={{ fontSize: 20 }} color="primary.main" >
                  Imóvel: {propertyStreet}, {propertyNumber}
                </Typography>
                <Typography sx={{ fontSize: 16, color: "#666" }}>
                  {visit.userId !== null ? "Nome agente" : "Visita pendente de aceitação."}
                </Typography>
                <Typography sx={{ fontSize: 14 }}>
                  Data: {formatDateTime(visit.visitDate)}
                </Typography>
                <Grid container justifyContent="center" alignItems="center" mt={3}>
                  <Badge badgeContent={statusMessage === "Pending" ? "Pendente" : statusMessage === "In Progress" ? "Em Progresso" : statusMessage === "Finished" ? "Finalizada" : "Cancelada"} color={statusMessage === "Pending" ? "warning" : statusMessage === "In Progress" ? "info" : statusMessage === "Finished" ? "success" : "error"} key={visit.id}/>
                </Grid>
              </CardContent>
            </Card>
          );
        })}

      </Grid>
    </Grid>
  );
}

export default Visits;
