import React, { useState } from "react";
import { useForm } from "react-hook-form";

import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import FormHelperText from "@mui/material/FormHelperText";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import { css } from "@emotion/css";

import styled from "styled-components";

import { Link } from "react-router-dom";

import water from "../../img/pexels-water.mp4";
import SubmitButton from "../layout/SubmitButton";

function RegisterUser() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const Styles = styled.div`
    ul {
      list-style-type: square;
    }
    .item-lista {
      font-size: 12px;
    }
  `;

  return (
    <Styles>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <Grid item xs={12} sm={4} md={7}>
          <video
            src={water}
            autoPlay
            loop
            muted
            className={css`
              object-fit: cover;
              width: 100vw;
              min-height: 100vh;
              position: absolute;
              z-index: -1;
            `}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
          bgcolor="#c7d9d8"
        >
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
              <AccountBoxOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Faça o cadastro
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <Grid container spacing={1}>
                <Grid item xs={6} sm={6}>
                  <TextField
                    margin="normal"
                    fullWidth
                    label="Nome completo"
                    name="nome"
                    type="text"
                    inputProps={{
                      maxLength: 50,
                    }}
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
                    margin="normal"
                    fullWidth
                    label="CPF"
                    name="cpf"
                    type="number"
                    onInput={(e) => {
                      e.target.value = Math.max(0, parseInt(e.target.value))
                        .toString()
                        .slice(0, 11);
                    }}
                    {...register("cpf", {
                      required: "CPF obrigatório",
                    })}
                  />
                  {errors.cpf && (
                    <FormHelperText sx={{ color: "#bf6560" }}>
                      {errors.cpf.message}
                    </FormHelperText>
                  )}
                </Grid>
              </Grid>

              <Grid container spacing={1}>
                <Grid item xs={6} sm={6}>
                  <TextField
                    sx={{ marginTop: "1.3em" }}
                    margin="normal"
                    fullWidth
                    label="RG"
                    name="rg"
                    type="text"
                    inputProps={{ maxLength: 9 }}
                    {...register("rg", {
                      required: "RG obrigatório",
                    })}
                  />
                  {errors.rg && (
                    <FormHelperText sx={{ color: "#bf6560" }}>
                      {errors.rg.message}
                    </FormHelperText>
                  )}
                </Grid>

                <Grid item xs={6} sm={6}>
                  <InputLabel sx={{ fontSize: "0.9em", color: "#3b8786" }}>
                    Data de nascimento
                  </InputLabel>
                  <TextField
                    fullWidth
                    name="dataNascimento"
                    type="date"
                    {...register("dataNascimento", {
                      required: "Data obrigatória",
                    })}
                  />
                  {errors.dataNascimento && (
                    <FormHelperText sx={{ color: "#bf6560" }}>
                      {errors.dataNascimento.message}
                    </FormHelperText>
                  )}
                </Grid>
              </Grid>

              <Grid container spacing={1}>
                <Grid item xs={6} sm={6}>
                  <TextField
                    margin="normal"
                    fullWidth
                    label="Celular"
                    name="celular"
                    type="number"
                    onInput={(e) => {
                      e.target.value = Math.max(0, parseInt(e.target.value))
                        .toString()
                        .slice(0, 11);
                    }}
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
                    margin="normal"
                    fullWidth
                    label="Email"
                    name="email"
                    type="text"
                    autoComplete="username"
                    inputProps={{
                      maxLength: 40,
                    }}
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
                  inputProps={{
                    maxLength: 15,
                  }}
                  {...register("senha", {
                    required: "Senha obrigatória",
                    minLength: {
                      value: 8,
                      message: "Senha precisa ter entre 8 e 15 caracteres",
                    },
                  })}
                />
                {errors.senha && (
                  <FormHelperText sx={{ color: "#bf6560" }}>
                    {errors.senha.message}
                  </FormHelperText>
                )}
                <Typography
                  sx={{
                    color: "#3b8786",
                    fontWeight: "bold",
                    fontSize: 12,
                    marginTop: 2,
                  }}
                >
                  Segurança da senha
                </Typography>
                <ul>
                  <li className="item-lista">No mínimo 8 caracteres;</li>
                  <li className="item-lista">
                    Pelo menos uma letra minúscula;
                  </li>
                  <li className="item-lista">
                    Pelo menos uma letra maiúscula;
                  </li>
                  <li className="item-lista">
                    Pelo menos um caractere especial.
                  </li>
                </ul>
              </FormControl>
              <Grid container>
                <Grid item mb={2}>
                  Já tem uma conta?{" "}
                  <Link
                    to="/login"
                    className={css`
                      text-decoration: none;
                      color: #3b8786;

                      &:hover {
                        color: #41696e;
                      }
                    `}
                  >
                    Login
                  </Link>
                </Grid>
              </Grid>
              <SubmitButton text="Cadastrar" onClick={handleSubmit(onSubmit)} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Styles>
  );
}

export default RegisterUser;
