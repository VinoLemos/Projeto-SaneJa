import React, { useState, useEffect } from "react";
import { API_URL } from "../../env";
import { useForm } from "react-hook-form";

import axios from "axios";

import { Link } from "react-router-dom";
import {
  Grid,
  Button,
  Card,
  CardContent,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Modal,
  Box,
  TextField,
  FormHelperText,
  CircularProgress
} from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { css } from "@emotion/css";

import NavigationBar from "../layout/NavigationBar";
import SubmitButton from "../layout/SubmitButton";
import SuccessAlert from "../layout/SuccessAlert";
import ErrorAlert from "../layout/ErrorAlert";

const modalStyle = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "70vw",
  textAlign: "center",
  alignItems: "center",
  bgcolor: "background.paper",
  border: "1px solid rgba(222,222,222,0.5)",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
};

function Properties() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [properties, setProperties] = useState([]);
  const token = localStorage.getItem("token");
  const [openDialog, setOpenDialog] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [selectedProperty, setSelectedProperty] = useState({});
  const [isPropertyUpdated, setPropertyUpdated] = useState(false);
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleClickOpenDialog = (property) => {
    setSelectedProperty(property);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteProperty = () => {
    setProperties((currentProperties) =>
      currentProperties.filter((property) => property.id !== selectedProperty)
    );

    handleClose();
  };

  const checkCEP = (e) => {
    const cleanCep = e.target.value.replace(/\D/g, "");
    if (!e.target.value) return;
    fetch(`https://brasilapi.com.br/api/cep/v1/${cleanCep}`, setLoading(true))
      .then((res) => res.json())
      .then((data) => {
        setValue("street", data.street);
        setValue("neighborhood", data.neighborhood);
        setValue("city", data.city);
        setValue("uf", data.state);
        setLoading(false);
      });
  };

  const onSubmit = async (data) => {
    const id = localStorage.getItem("id");
    const propertyUpdatedData = {
      "id": id,
      "street": data.street,
      "number": data.number,
      "complement": data.complement,
      "neighborhood": data.neighborhood,
      "cep": data.cep,
      "city": data.city,
      "uf": data.uf,
      "rgi": data.rgi,
      "hidrometer": data.hidrometer,
    }
  
    await axios
      .put(
        `${API_URL}/residentialproperty/update-property`,
        propertyUpdatedData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
        setLoading(true)
      )
      .then(() => {
        setSuccess(true);
        setPropertyUpdated(true);
        setTimeout(() => {
          setSuccess(false);
        }, 3000);
        setLoading(false);
        setTimeout(() => {
          setOpen(false);
        }, 5000);
      })
      .catch((error) => {
        setError(true);
        setTimeout(() => {
          setError(false);
          setOpen(false);
        }, 3000);
        setLoading(false);
        console.log(error);
      });
  };

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
  }, [isPropertyUpdated]);

  function handleUpdateClick(property) {
    setSelectedProperty(property);
    const rgi = property.rgi;
    setOpen(true);
    setPropertyUpdated(false);
    const fetchProperty = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${API_URL}/residentialproperty/get-property-by-rgi`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "rgi": `${parseInt(rgi, 10)}`
            },
          }
        );
        const property = response.data;

        setValue("cep", property.cep);
        setValue("street", property.street);
        setValue("number", property.number);
        setValue("neighborhood", property.neighborhood);
        setValue("complement", property.complement);
        setValue("city", property.city);
        setValue("uf", property.uf);
        setValue("rgi", property.rgi);
        setValue("hidrometer", property.hidrometer);

        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(true);
      }
    };

    fetchProperty();
  }

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
        {properties.length === 0 && (
          <Typography sx={{ fontSize: 20 }} color="primary.main" mt={4}>
            Você ainda não possui imóvel cadastrado.
          </Typography>
        )}
        {properties.map((property) => (
          localStorage.setItem("id", selectedProperty.id),
          <Card
            variant="outlined"
            sx={{
              minWidth: 250,
              marginTop: 6,
              bgcolor: "secondary.main",
            }}
            key={property.id}
          >
            <CardContent key={property.id}>
              <Typography sx={{ fontSize: 20 }} color="primary.main">
                Imóvel RGI: {property.rgi}
              </Typography>
              <Typography sx={{ fontSize: 16, color: "#666" }}>
                Hidrômetro: {property.hidrometer}
              </Typography>
              <Typography sx={{ fontSize: 14 }}>{property.street}, {property.number}</Typography>
              <Typography sx={{ fontSize: 14 }}>
                Bairro: {property.neighborhood} - CEP: {property.cep}
              </Typography>
              <Typography sx={{ fontSize: 14 }}>
                Complemento: {property.complement}
              </Typography>
              <Typography sx={{ fontSize: 14 }}>
                Cidade: {property.city}, {property.uf}
              </Typography>
              <Grid
                sx={{
                  marginTop: 2,
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                }}
              >
                <Button variant="outlined" color="success" onClick={() => handleUpdateClick(property)}>
                  Alterar
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => handleClickOpenDialog(property.id)}
                >
                  Excluir
                </Button>
                <Dialog
                  open={openDialog}
                  onClose={handleCloseDialog}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">
                    {"Excluir imóvel"}
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      Deseja excluir o imóvel?
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleCloseDialog}>Cancelar</Button>
                    <Button
                      color="error"
                      onClick={handleDeleteProperty}
                      autoFocus
                    >
                      Excluir
                    </Button>
                  </DialogActions>
                </Dialog>
                <Modal open={selectedProperty !== null ? open : ""}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title">
                  <Box sx={modalStyle}>
                    <Typography id="modal-modal-title" variant="h5" component="h2">
                      Dados do Imóvel
                    </Typography>
                    {success && <SuccessAlert message="Imóvel atualizado com sucesso!" />}
                    {error && (
                      <ErrorAlert message="Ops, algo deu errado. Tente novamente mais tarde." />
                    )}
                    <Box component="form" noValidate sx={{ mt: 1, maxWidth: "50vw" }}>
                      <Grid container spacing={1} marginBottom={2}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            InputLabelProps={{ shrink: true }}
                            margin="normal"
                            fullWidth
                            label="CEP"
                            name="cep"
                            type="number"
                            {...register("cep")}
                            onBlur={checkCEP}
                          />
                          {errors.cep && (
                            <FormHelperText sx={{ color: "#bf6560" }}>
                              {errors.cep.message}
                            </FormHelperText>
                          )}
                          <TextField
                            InputLabelProps={{ shrink: true }}
                            margin="normal"
                            fullWidth
                            label="Rua"
                            name="street"
                            type="text"
                            {...register("street")}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            InputLabelProps={{ shrink: true }}
                            margin="normal"
                            fullWidth
                            label="Número"
                            name="number"
                            type="number"
                            {...register("number", {
                              required: "Numero obrigatório",
                            })}
                          />
                          {errors.number && (
                            <FormHelperText sx={{ color: "#bf6560" }}>
                              {errors.number.message}
                            </FormHelperText>
                          )}
                          <TextField
                            InputLabelProps={{ shrink: true }}
                            margin="normal"
                            fullWidth
                            label="Bairro"
                            name="neighborhood"
                            type="text"
                            {...register("neighborhood")}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            InputLabelProps={{ shrink: true }}
                            margin="normal"
                            fullWidth
                            label="Complemento"
                            name="complement"
                            type="text"
                            {...register("complement", {
                              required: "Complemento obrigatório",
                            })}
                          />
                          {errors.complement && (
                            <FormHelperText sx={{ color: "#bf6560" }}>
                              {errors.complement.message}
                            </FormHelperText>
                          )}
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            InputLabelProps={{ shrink: true }}
                            margin="normal"
                            fullWidth
                            label="Cidade"
                            name="city"
                            type="text"
                            {...register("city")}
                          />
                          <TextField
                            InputLabelProps={{ shrink: true }}
                            margin="normal"
                            fullWidth
                            label="Estado"
                            name="uf"
                            type="text"
                            {...register("uf")}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            InputLabelProps={{ shrink: true }}
                            margin="normal"
                            fullWidth
                            label="RGI"
                            name="rgi"
                            type="number"
                            {...register("rgi", {
                              required: "RGI obrigatório",
                            })}
                          />
                          {errors.rgi && (
                            <FormHelperText sx={{ color: "#bf6560" }}>
                              {errors.rgi.message}
                            </FormHelperText>
                          )}
                          <TextField
                            InputLabelProps={{ shrink: true }}
                            margin="normal"
                            fullWidth
                            label="Hidrômetro"
                            name="hidrometer"
                            type="number"
                            {...register("hidrometer", {
                              required: "Hidrômetro obrigatório",
                            })}
                          />
                          {errors.hidrometer && (
                            <FormHelperText sx={{ color: "#bf6560" }}>
                              {errors.hidrometer.message}
                            </FormHelperText>
                          )}
                        </Grid>
                      </Grid>
                      <SubmitButton text={loading ? <CircularProgress sx={{ color: "#3b8786", alignItems: "center" }}/> : "Atualizar"} onClick={handleSubmit(onSubmit)} />
                    </Box>
                  </Box>
                </Modal>
              </Grid>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </Grid>
  );
}

export default Properties;
