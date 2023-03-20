import React from "react";
import { useForm } from "react-hook-form";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";

import NavigationBar from "../layout/NavigationBar";

import { css } from "@emotion/css";

import SubmitButton from "../layout/SubmitButton";

import water from "../../img/pixabay-water.jpeg";

function RegisterProperty() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const checkCEP = (e) => {
    const cleanCep = e.target.value.replace(/\D/g, "");
    if (!e.target.value) return;
    fetch(`https://brasilapi.com.br/api/cep/v1/${cleanCep}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setValue("rua", data.street);
        setValue("bairro", data.neighborhood);
        setValue("cidade", data.city);
        setValue("estado", data.state);
      });
  };

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid
        item
        sm={12}
        xs={12}
        sx={{ minHeight: "30vh", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)" }}
      >
        <img
          src={water}
          className={css`
            object-fit: cover;
            width: 100vw;
            height: 30vh;
            position: absolute;
            z-index: -1;
          `}
          alt="Imagem de gotas de água"
        />
        <NavigationBar />
      </Grid>
      <Grid item sm={12} xs={12}>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <HomeOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Cadastre seu imóvel
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1, maxWidth: "70vw" }}>
            <Grid container spacing={1} marginBottom={2}>
              <Grid item xs={6} sm={6}>
                <TextField
                  InputLabelProps={{ shrink: true }}
                  margin="normal"
                  fullWidth
                  label="CEP"
                  name="cep"
                  type="text"
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
                  name="rua"
                  type="text"
                  {...register("rua")}
                />
              </Grid>
              <Grid item xs={6} sm={6}>
                <TextField
                  InputLabelProps={{ shrink: true }}
                  margin="normal"
                  fullWidth
                  label="Número"
                  name="numero"
                  type="number"
                  {...register("numero", {
                    required: "Numero obrigatório",
                  })}
                />
                {errors.numero && (
                  <FormHelperText sx={{ color: "#bf6560" }}>
                    {errors.numero.message}
                  </FormHelperText>
                )}
                <TextField
                  InputLabelProps={{ shrink: true }}
                  margin="normal"
                  fullWidth
                  label="Bairro"
                  name="bairro"
                  type="text"
                  {...register("bairro")}
                />
              </Grid>
              <Grid item xs={6} sm={6}>
                <TextField
                  InputLabelProps={{ shrink: true }}
                  margin="normal"
                  fullWidth
                  label="Cidade"
                  name="cidade"
                  type="text"
                  {...register("cidade")}
                />
                <TextField
                  InputLabelProps={{ shrink: true }}
                  margin="normal"
                  fullWidth
                  label="Estado"
                  name="estado"
                  type="text"
                  {...register("estado")}
                />
              </Grid>
              <Grid item xs={6} sm={6}>
                <TextField
                  margin="normal"
                  fullWidth
                  label="RGI"
                  name="rgi"
                  type="text"
                  {...register("rgi")}
                />
                <TextField
                  margin="normal"
                  fullWidth
                  label="Hidrômetro"
                  name="hidrometro"
                  type="text"
                  {...register("hidrometro")}
                />
              </Grid>
            </Grid>
            <SubmitButton text="Cadastrar" onClick={handleSubmit(onSubmit)} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default RegisterProperty;
