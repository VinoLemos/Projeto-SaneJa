import React, { useState, useEffect } from "react";
import { API_URL } from "../../env";

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
} from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { css } from "@emotion/css";

import NavigationBar from "../layout/NavigationBar";

function Properties() {
  const [properties, setProperties] = useState([]);
  const token = localStorage.getItem("token");
  const [open, setOpen] = React.useState(false);
  const [selectedPropertyId, setSelectedPropertyId] = useState(null);

  const handleClickOpen = (propertyId) => {
    setSelectedPropertyId(propertyId);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteProperty = () => {
    setProperties((currentProperties) =>
      currentProperties.filter((property) => property.id !== selectedPropertyId)
    );

    handleClose();
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
  }, []);
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
          <Card
            variant="outlined"
            sx={{
              minWidth: 250,
              marginTop: 6,
              bgcolor: "secondary.main",
            }}
            key={property.id}
          >
            <CardContent>
              <Typography sx={{ fontSize: 20 }} color="primary.main">
                Imóvel RGI: {property.rgi}
              </Typography>
              <Typography sx={{ fontSize: 16, color: "#666" }}>
                Hidrômetro: {property.hidrometer}
              </Typography>
              <Typography sx={{ fontSize: 14 }}>{property.street}</Typography>
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
                <Button variant="outlined" color="success">
                  Alterar
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => handleClickOpen(property.id)}
                >
                  Excluir
                </Button>
                <Dialog
                  open={open}
                  onClose={handleClose}
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
                    <Button onClick={handleClose}>Cancelar</Button>
                    <Button
                      color="error"
                      onClick={handleDeleteProperty}
                      autoFocus
                    >
                      Excluir
                    </Button>
                  </DialogActions>
                </Dialog>
              </Grid>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </Grid>
  );
}

export default Properties;
