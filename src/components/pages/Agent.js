import React, { useState, useEffect } from "react";
import { API_URL } from "../../env";

import {
  Grid,
  Typography,
  Modal,
  Box,
  Button,
} from "@mui/material";

import NavBarAgent from "../layout/NavBarAgent";
import PendingVisitsData from "../layout/PendingVisitsData";
import SuccessAlert from "../layout/SuccessAlert";
import ErrorAlert from "../layout/ErrorAlert";

const columns = [
  {
    field: "visitDate",
    headerName: "Data",
    width: 100,
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
  },
  {
    field: "status",
    headerName: "Status",
    width: 100,
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
  },
  {
    field: "propertyOwner",
    headerName: "Solicitante",
    width: 300,
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
  },
];

const modalStyle = {
  backgroundColor: "#fff",
  border: "1px solid rgba(0,0,0,0.5)",
  boxShadow: 24,
  display: "flex",
  flexDirection: "column",
  width: "50vw",
  height: "90vh",
  position: "absolute",
  top: "15%",
  left: "50%",
};

const emphasisStyle = {
  fontSize: "18px",
  fontWeight: "bold",
};

const paragraphStyle = {
  fontSize: "18px",
};

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "5px",
  backgroundColor: "rgba(151, 153, 156, 0.5)",
  padding: "5px",
  margin: "5px",
  borderRadius: "5px",
};

function translateStatus(status) {
  if (status === "Pending") return "Pendente";
  if (status === "In Progress") return "Em Progresso";
  if (status === "Finished") return "Concluída";
  if (status === "Canceled") return "Cancelada";
}

function Agent() {
  const [visits, setVisits] = useState([]);
  const [details, setDetails] = useState([]);
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const token = localStorage.getItem("token");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    fetch(`${API_URL}/technicalvisit/list-pending-visits`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        const formatedVisits = json.map((visit) => {
          const formatedDate = new Date(visit.visitDate).toLocaleDateString();
          const formatedStatus =
            visit.status === "Pending"
              ? "Pendente"
              : "In Progress"
              ? "Em Progresso"
              : "Finished"
              ? "Concluída"
              : "Cancelada";
          return {
            ...visit,
            visitDate: formatedDate,
            status: formatedStatus,
          };
        });
        setVisits(formatedVisits);
      })
      .catch((err) => console.log(err));
  }, [token]);

  function handleClick(row) {
    fetch(`${API_URL}/technicalvisit/visit-details`, {
      headers: {
        Authorization: `Bearer ${token}`,
        visitId: row.id,
      },
    })
      .then((response) => response.json())
      .then((json) => setDetails(json))
      .catch((err) => console.log(err));
  }

  const handleAccept = () => {
    fetch(`${API_URL}/technicalvisit/accept-visit`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        visitId: details.visitId,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          handleClose();
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
          }, 3000);
          window.location.reload();
        }
      })
      .catch((err) => {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 3000);
        console.log(err);
      });
  };

  return (
    <Grid>
      <NavBarAgent />
      <Grid sx={{ textAlign: "center", marginTop: 5 }}>
        <Typography component="h1" variant="h5" marginBottom={2}>
          Área do Agente
        </Typography>
        {success && <SuccessAlert message="Visita aceita com sucesso!" />}
        {error && (
          <ErrorAlert message="Ops, algo deu errado. Tente novamente mais tarde." />
        )}
        <Typography component="p" fontSize={18} marginBottom={2}>
          Seja bem vindo. Dê uma olhada nas visitas disponíveis:
        </Typography>
      </Grid>
      {visits.lenght !== 0 && (
        <Box
          sx={{
            "& .super-app-theme--header": {
              fontStyle: "italic",
              backgroundColor: "rgba(120, 130, 125, 0.55)",
            },
          }}
        >
          <PendingVisitsData
            rows={visits}
            columns={columns}
            handleClick={handleClick}
            handleOpen={handleOpen}
          />
        </Box>
      )}

      {details.length !== 0 && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
        >
          <Box style={modalStyle}>
            <Typography
              id="modal-modal-title"
              variant="h5"
              component="h2"
              color="primary.main"
              m={2}
              textAlign="center"
            >
              Detalhes da Solicitação
            </Typography>

            <Grid style={containerStyle}>
              <Box display="flex" flexDirection="row">
                <Typography variant="p" style={emphasisStyle}>
                  Solicitante: &nbsp;
                </Typography>
                <Typography variant="p" style={paragraphStyle}>
                  {details.propertyOwner}
                </Typography>
              </Box>
              <Box display="flex" flexDirection="row">
                <Typography variant="p" style={emphasisStyle}>
                  Status: &nbsp;
                </Typography>
                <Typography variant="p" style={paragraphStyle}>
                  {translateStatus(details.visitStatus)}
                </Typography>
              </Box>
              <Box display="flex" flexDirection="row">
                <Typography variant="p" style={emphasisStyle}>
                  Endereço: &nbsp;
                </Typography>
                <Typography variant="p" style={paragraphStyle}>
                  {details.property.street}, {details.property.number}
                </Typography>
                <Typography variant="p" style={paragraphStyle}>
                  &nbsp;
                  {details.property.cep} - {details.property.city} /{" "}
                  {details.property.uf}
                </Typography>
              </Box>
              <Box display="flex" flexDirection="row">
                <Typography variant="p" style={emphasisStyle}>
                  RGI: &nbsp;
                </Typography>
                <Typography variant="p" style={paragraphStyle}>
                  {details.property.rgi}
                </Typography>
              </Box>
              <Box display="flex" flexDirection="row">
                <Typography variant="p" style={emphasisStyle}>
                  Hidrômetro: &nbsp;
                </Typography>
                <Typography variant="p" style={paragraphStyle}>
                  {details.property.hidrometer}
                </Typography>
              </Box>
            </Grid>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant="contained"
                size="small"
                sx={{ width: "20vw" }}
                onClick={(params) => {
                  handleAccept(params.row);
                }}
              >
                Aceitar
              </Button>
            </Box>
          </Box>
        </Modal>
      )}
    </Grid>
  );
}

export default Agent;
