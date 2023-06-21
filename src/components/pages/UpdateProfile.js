import React, { useState } from "react";
import { useForm } from "react-hook-form";

import {
  Grid,
  Box,
  Avatar,
  Typography,
  FormHelperText,
  TextField,
  InputLabel,
  InputAdornment,
  FormControl,
  OutlinedInput,
  IconButton,
} from "@mui/material";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import NavigationBar from "../layout/NavigationBar";
import SubmitButton from "../layout/SubmitButton";
import Loading from "../layout/Loading";

function UpdateProfile() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);

  const onSubmit = (data) => console.log(data);

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <NavigationBar />
      <Grid item sm={12} xs={12}>
        <Grid container sx={{ justifyContent: "center", marginTop: 2 }}>
          <Box
            sx={{
              my: 2,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
              <ManageAccountsOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Nome Usuário
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <Grid container spacing={1}>
                <Grid item xs={6} sm={6}>
                  <TextField
                    InputLabelProps={{ shrink: true }}
                    margin="normal"
                    fullWidth
                    label="Nome completo"
                    name="nome"
                    type="text"
                    {...register("nome", {
                      required: "Nome obrigatório",
                      pattern: {
                        value: /^[a-zA-Z]+ [a-zA-Z]+$/,
                        message: "Nome incompleto ou inválido",
                      },
                    })}
                  />
                  {errors.nome && (
                    <FormHelperText sx={{ color: "#bf6560" }}>
                      {errors.nome.message}
                    </FormHelperText>
                  )}
                </Grid>
                <Grid item xs={6} sm={6}>
                  <TextField
                    InputLabelProps={{ shrink: true }}
                    disabled
                    margin="normal"
                    fullWidth
                    label="CPF"
                    name="cpf"
                    type="text"
                    {...register("cpf")}
                  />
                </Grid>
              </Grid>

              <Grid container spacing={1}>
                <Grid item xs={6} sm={6}>
                  <TextField
                    InputLabelProps={{ shrink: true }}
                    disabled
                    sx={{ marginTop: "1.3em" }}
                    margin="normal"
                    fullWidth
                    label="RG"
                    name="rg"
                    type="text"
                    {...register("rg")}
                  />
                </Grid>

                <Grid item xs={6} sm={6}>
                  <InputLabel sx={{ fontSize: "0.9em", color: "#3b8786" }}>
                    Data de nascimento
                  </InputLabel>
                  <TextField
                    disabled
                    fullWidth
                    name="dataNascimento"
                    type="date"
                    {...register("dataNascimento")}
                  />
                </Grid>
              </Grid>

              <Grid container spacing={1}>
                <Grid item xs={6} sm={6}>
                  <TextField
                    InputLabelProps={{ shrink: true }}
                    margin="normal"
                    fullWidth
                    label="Celular"
                    name="celular"
                    type="text"
                    {...register("celular", {
                      required: "Celular obrigatório",
                    })}
                  />
                  {errors.celular && (
                    <FormHelperText sx={{ color: "#bf6560" }}>
                      {errors.celular.message}
                    </FormHelperText>
                  )}
                </Grid>

                <Grid item xs={6} sm={6}>
                  <TextField
                    InputLabelProps={{ shrink: true }}
                    margin="normal"
                    fullWidth
                    label="Email"
                    name="email"
                    type="text"
                    autoComplete="username"
                    {...register("email", {
                      required: "Email obrigatório",
                      pattern: {
                        value: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
                        message: "Email incompleto ou inválido",
                      },
                    })}
                  />
                  {errors.email && (
                    <FormHelperText sx={{ color: "#bf6560" }}>
                      {errors.email.message}
                    </FormHelperText>
                  )}
                </Grid>
              </Grid>

              <FormControl
                sx={{ mt: 2, mb: 2, width: "100%" }}
                variant="outlined"
              >
                <InputLabel>Senha</InputLabel>
                <OutlinedInput
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Senha"
                  {...register("senha", {
                    required: "Senha obrigatória",
                    minLength: {
                      value: 4,
                      message: "Senha precisa ter entre 4 e 8 caracteres",
                    },
                  })}
                />
                {errors.senha && (
                  <FormHelperText sx={{ color: "#bf6560" }}>
                    {errors.senha.message}
                  </FormHelperText>
                )}
              </FormControl>
              <SubmitButton text={loading ? <Loading/> : "Atualizar"} onClick={handleSubmit(onSubmit)} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default UpdateProfile;
