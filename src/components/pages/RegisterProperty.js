import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../env";

import axios from "axios";
import {
  Grid,
  Box,
  Avatar,
  Typography,
  TextField,
  FormHelperText,
  CircularProgress,
} from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

import NavigationBar from "../layout/NavigationBar";
import SubmitButton from "../layout/SubmitButton";
import SuccessAlert from "../layout/SuccessAlert";
import ErrorAlert from "../layout/ErrorAlert";

function RegisterProperty() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const onSubmit = async (data) => {
    await axios
      .post(
        `${API_URL}/residentialproperty/register-property"`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
        setLoading(true)
      )
      .then(() => {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 3000);
        setLoading(false);
        setTimeout(() => {
          navigate("/imoveis");
        }, 5000);
      })
      .catch((error) => {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 3000);
        setLoading(false);
        console.log(error);
      });
  };

  const [loading, setLoading] = React.useState(false);

  const checkCEP = (e) => {
    const cleanCep = e.target.value.replace(/\D/g, "");
    if (!e.target.value) return;
    fetch(`https://brasilapi.com.br/api/cep/v1/${cleanCep}`, setLoading(true))
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setValue("street", data.street);
        setValue("neighborhood", data.neighborhood);
        setValue("city", data.city);
        setValue("uf", data.state);
        setLoading(false);
      });
  };

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <NavigationBar />
      <Grid item sm={12} xs={12}>
        <Box
          sx={{
            my: 4,
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
          {loading && (
            <CircularProgress sx={{ color: "#3b8786", alignItems: "center" }} />
          )}
          {success && <SuccessAlert message="Imóvel cadastrado com sucesso!" />}
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
            <SubmitButton text="Cadastrar" onClick={handleSubmit(onSubmit)} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default RegisterProperty;
