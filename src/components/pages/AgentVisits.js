import React, { useState, useEffect } from "react";
import { API_URL } from "../../env";
import { useForm } from "react-hook-form";
import axios from "axios";

import {
  Grid,
  Typography,
  Modal,
  Box,
  FormLabel,
  TextField,
  MenuItem,
  Select,
  FormControl,
} from "@mui/material";

import AgentVisitsData from "../layout/AgentVisitsData";
import SubmitButton from "../layout/SubmitButton";
import SuccessAlert from "../layout/SuccessAlert";
import ErrorAlert from "../layout/ErrorAlert";
import NavBarAgent from "../layout/NavBarAgent";

const agentVisitscolumns = [
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
    width: 130,
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
  },
  {
    field: "propertyOwner",
    headerName: "Solicitante",
    width: 200,
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
  },
  {
    field: "returnDate",
    headerName: "Retorno",
    width: 100,
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
  },
  {
    field: "homologated",
    headerName: "Homologado",
    width: 120,
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
  },
  {
    field: "homologationDate",
    headerName: "Data Homologação",
    width: 150,
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
  },
  {
    field: "observation",
    headerName: "Observação",
    width: 100,
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
  overflow: "scroll",
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

function AgentVisits() {
  const { register, handleSubmit } = useForm();
  const [detailsAgentVisit, setDetailsAgentVisit] = useState([]);
  const [agentVisits, setAgentVisits] = useState([]);
  const [openAgentVisits, setOpenAgentVisits] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [needsReturn, setNeedsReturn] = useState(false);
  const token = localStorage.getItem("token");

  const handleOpenAgentVisits = () => setOpenAgentVisits(true);
  const handleCloseAgentVisits = () => setOpenAgentVisits(false);

  useEffect(() => {
    fetchAgentVisits();
  }, []);

  function fetchAgentVisits() {
    fetch(`${API_URL}/technicalvisit/get-agent-visits`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        const formatedVisits = json.map((visit) => {
          const formatedDate = new Date(visit.visitDate).toLocaleDateString();
          const formatedHomologDate =
            visit.homologationDate !== null
              ? new Date(visit.homologationDate).toLocaleDateString()
              : "";
          const formatedReturnDate =
            visit.returnDate !== null
              ? new Date(visit.returnDate).toLocaleDateString()
              : "";
          const formatedStatus =
            visit.status === "Pending"
              ? "Pendente"
              : visit.status === "In Progress"
              ? "Em Progresso"
              : visit.status === "Finished"
              ? "Concluída"
              : "Cancelada";
          const formatedHomolog = visit.homologated ? "Sim" : "Não";
          return {
            ...visit,
            visitDate: formatedDate,
            homologationDate: formatedHomologDate,
            homologated: formatedHomolog,
            returnDate: formatedReturnDate,
            status: formatedStatus,
          };
        });
        setAgentVisits(formatedVisits);
      })
      .catch((err) => console.log(err));
  }

  const formatedHomologationDate = (event) => new Date(event).toLocaleDateString();

  const handleSelectChange = (event) => {
    setNeedsReturn(event.target.value === "Sim");
  };

  function handleClickAgentVisits(row) {
    fetch(`${API_URL}/technicalvisit/visit-details`, {
      headers: {
        Authorization: `Bearer ${token}`,
        visitId: row.id,
      },
    })
      .then((response) => response.json())
      .then((json) => setDetailsAgentVisit(json))
      .catch((err) => console.log(err));
  }

  const handleFinish = () => {
    fetch(`${API_URL}/technicalvisit/finish-visit`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        visitId: detailsAgentVisit.visitId,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          handleCloseAgentVisits();
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
          }, 3000);
          fetchAgentVisits();
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
  const handleReturn = (data) => {
    const returnData = {
      VisitId: detailsAgentVisit.visitId,
      returnDate: data.returnDate,
    };
    console.log(returnData);
    axios
      .put(`${API_URL}/technicalvisit/post-return-date`, returnData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          handleCloseAgentVisits();
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
          }, 3000);
          fetchAgentVisits();
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

  const handleHomologation = (data) => {
    const homologationData = {
      VisitId: detailsAgentVisit.visitId,
      Observation: data.observation,
    };
    axios
      .put(`${API_URL}/technicalvisit/visit-homologation`, homologationData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          handleCloseAgentVisits();
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
          }, 3000);
          fetchAgentVisits();
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
      <Grid
        sx={{
          textAlign: "center",
          marginTop: 5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography component="h1" variant="h5" marginBottom={2}>
          Suas Visitas
        </Typography>
        {success && <SuccessAlert message="Dados atualizados com sucesso!" />}
        {error && (
          <ErrorAlert message="Ops, algo deu errado. Tente novamente mais tarde." />
        )}
        {agentVisits.lenght !== 0 && (
          <Box
            sx={{
              "& .super-app-theme--header": {
                fontStyle: "italic",
                backgroundColor: "rgba(120, 130, 125, 0.55)",
              },
            }}
          >
            <AgentVisitsData
              rows={agentVisits}
              columns={agentVisitscolumns}
              handleClick={handleClickAgentVisits}
              handleOpen={handleOpenAgentVisits}
            />
          </Box>
        )}
        {detailsAgentVisit.length !== 0 && (
          <Modal
            open={openAgentVisits}
            onClose={handleCloseAgentVisits}
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
                Detalhes da Visita
              </Typography>
              <Grid style={containerStyle}>
                <Box display="flex" flexDirection="row">
                  <Typography variant="p" style={emphasisStyle}>
                    Solicitante: &nbsp;
                  </Typography>
                  <Typography variant="p" style={paragraphStyle}>
                    {detailsAgentVisit.propertyOwner}
                  </Typography>
                </Box>
                <Box display="flex" flexDirection="row">
                  <Typography variant="p" style={emphasisStyle}>
                    Status: &nbsp;
                  </Typography>
                  <Typography variant="p" style={paragraphStyle}>
                    {translateStatus(detailsAgentVisit.visitStatus)}
                  </Typography>
                </Box>
                <Box display="flex" flexDirection="row">
                  <Typography variant="p" style={emphasisStyle}>
                    Endereço: &nbsp;
                  </Typography>
                  <Typography variant="p" style={paragraphStyle}>
                    {detailsAgentVisit.property.street},{" "}
                    {detailsAgentVisit.property.number}
                  </Typography>
                  <Typography variant="p" style={paragraphStyle}>
                    &nbsp;
                    {detailsAgentVisit.property.cep} -{" "}
                    {detailsAgentVisit.property.city} /{" "}
                    {detailsAgentVisit.property.uf}
                  </Typography>
                </Box>
                <Box display="flex" flexDirection="row">
                  <Typography variant="p" style={emphasisStyle}>
                    RGI: &nbsp;
                  </Typography>
                  <Typography variant="p" style={paragraphStyle}>
                    {detailsAgentVisit.property.rgi}
                  </Typography>
                </Box>
                <Box display="flex" flexDirection="row">
                  <Typography variant="p" style={emphasisStyle}>
                    Hidrômetro: &nbsp;
                  </Typography>
                  <Typography variant="p" style={paragraphStyle}>
                    {detailsAgentVisit.property.hidrometer}
                  </Typography>
                </Box>
                {detailsAgentVisit.observation !== "" && (
                  <Box display="flex" flexDirection="row">
                    <Typography variant="p" style={emphasisStyle}>
                      Observação: &nbsp;
                    </Typography>
                    <Typography variant="p" style={paragraphStyle}>
                      {detailsAgentVisit.observation}
                    </Typography>
                  </Box>
                )}
                {detailsAgentVisit.homologationDate !== null && (
                  <Box display="flex" flexDirection="row">
                    <Typography variant="p" style={emphasisStyle}>
                      Data de Homologação: &nbsp;
                    </Typography>
                    <Typography variant="p" style={paragraphStyle}>
                      {formatedHomologationDate(
                        detailsAgentVisit.homologationDate
                      )}
                    </Typography>
                  </Box>
                )}
                <Box display="flex" flexDirection="column">
                  {!detailsAgentVisit.homologated &&
                    detailsAgentVisit.visitStatus !== "Finished" &&
                    detailsAgentVisit.visitStatus !== "Canceled" && (
                      <Box>
                        <Typography variant="p" style={emphasisStyle}>
                          Precisa fazer um retorno? &nbsp;
                        </Typography>
                        <FormControl fullWidth margin="normal">
                          <Select
                            value={needsReturn ? "Sim" : "Não"}
                            onChange={handleSelectChange}
                          >
                            <MenuItem value="Sim">Sim</MenuItem>
                            <MenuItem value="Não">Não</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    )}
                  {needsReturn && (
                    <>
                      <FormLabel
                        sx={{
                          fontSize: "0.9em",
                          color: "#3b8786",
                          textAlign: "left",
                          marginTop: "1em",
                        }}
                      >
                        Data do retorno
                      </FormLabel>
                      <TextField
                        fullWidth
                        margin="normal"
                        name="returnDate"
                        type="date"
                        {...register("returnDate")}
                      />
                      <SubmitButton
                        text="Enviar"
                        onClick={handleSubmit(handleReturn)}
                      />
                    </>
                  )}
                </Box>

                <Box display="flex" flexDirection="row" gap={2}>
                  {detailsAgentVisit.visitStatus === "In Progress" &&
                    !needsReturn && (
                      <Box width="100%">
                        <Box display="flex" flexDirection="row">
                          <TextField
                            margin="normal"
                            fullWidth
                            label=" Observação"
                            name="observation"
                            type="text"
                            {...register("observation")}
                          />
                        </Box>
                        <SubmitButton
                          text="Finalizar Visita"
                          onClick={handleSubmit(handleHomologation)}
                        />
                      </Box>
                    )}
                </Box>
              </Grid>
            </Box>
          </Modal>
        )}
      </Grid>
    </Grid>
  );
}

export default AgentVisits;
