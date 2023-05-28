import React from "react";
import { useForm } from "react-hook-form";

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

function RegisterProperty() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const [loading, setLoading] = React.useState(false);

  const checkCEP = (e) => {
    const cleanCep = e.target.value.replace(/\D/g, "");
    if (!e.target.value) return;
    fetch(`https://brasilapi.com.br/api/cep/v1/${cleanCep}`, setLoading(true))
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setValue("rua", data.street);
        setValue("bairro", data.neighborhood);
        setValue("cidade", data.city);
        setValue("estado", data.state);
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
          <Box component="form" noValidate sx={{ mt: 1, maxWidth: "50vw" }}>
            <Grid container spacing={1} marginBottom={2}>
              <Grid item xs={12} sm={6}>
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
              <Grid item xs={12} sm={6}>
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
              <Grid item xs={12} sm={6}>
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
              <Grid item xs={12} sm={6}>
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
