import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../../env";

import axios from "axios";

import {
  Grid,
  Paper,
  Avatar,
  FormHelperText,
  TextField,
  Typography,
  Box,
  InputAdornment,
  FormControl,
  OutlinedInput,
  IconButton,
  InputLabel,
} from "@mui/material";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import SubmitButton from "../layout/SubmitButton";
import SuccessAlert from "../layout/SuccessAlert";
import ErrorAlert from "../layout/ErrorAlert";
import Loading from "../layout/Loading";
import Video from "../layout/Video";

import styled from "styled-components";

const boxStyle = {
  my: 7.2,
  mx: 4,
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const LinkStyle = styled.div`
  display: inline-flex;
  a {
    text-decoration: none;
    color: #3b8786;

    &:hover {
      color: #41696e;
    }
  }
`;

const Lista = styled.div`
  ul {
    list-style-type: square;
  }
  .item-lista {
    font-size: 12px;
  }
`;

function RegisterUser() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    await axios
      .post(
        `${API_URL}/Authorize/register-person`,
        data,
        setLoading(true)
      )
      .then(() => {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 3000);
        setLoading(false);
        setTimeout(() => {
          navigate("/login");
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

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const [showConfPassword, setShowConfPassword] = useState(false);

  const handleClickShowConfPassword = () =>
    setShowConfPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseDownConfPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid item xs={12} sm={4} md={7}>
        <Video />
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
         <Box sx={boxStyle}>
      <Avatar sx={{ bgcolor: "primary.main" }}><AccountBoxOutlinedIcon/></Avatar>
      <Typography component="h1" variant="h5">
        Faça o cadastro
      </Typography>
      {success && <SuccessAlert message="Cadastro realizado com sucesso!" />}
      {error && (
        <ErrorAlert message="Ops, algo deu errado. Tente novamente mais tarde." />
      )}
      <Box component="form" noValidate>
        <Grid container spacing={1}>
          <Grid item xs={6} sm={6}>
            <TextField
              margin="normal"
              fullWidth
              label="Nome completo"
              name="name"
              type="text"
              inputProps={{
                maxLength: 50,
              }}
              {...register("name", {
                required: "Nome obrigatório",
              })}
            />
            {errors.name && (
              <FormHelperText sx={{ color: "#bf6560" }}>
                {errors.name.message}
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
              name="birthDay"
              type="date"
              {...register("birthDay", {
                required: "Data obrigatória",
              })}
            />
            {errors.birthDay && (
              <FormHelperText sx={{ color: "#bf6560" }}>
                {errors.birthDay.message}
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
              name="phoneNumber"
              type="number"
              onInput={(e) => {
                e.target.value = Math.max(0, parseInt(e.target.value))
                  .toString()
                  .slice(0, 11);
              }}
              {...register("phoneNumber", {
                required: "Celular obrigatório",
              })}
            />
            {errors.phoneNumber && (
              <FormHelperText sx={{ color: "#bf6560" }}>
                {errors.phoneNumber.message}
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
        <Grid container spacing={1}>
          <Grid item xs={6} sm={6}>
            <FormControl sx={{ mt: 2, width: "100%" }} variant="outlined">
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
                name="password"
                inputProps={{
                  maxLength: 15,
                }}
                {...register("password", {
                  required: "Senha obrigatória",
                  minLength: {
                    value: 8,
                    message: "Senha precisa ter entre 8 e 15 caracteres",
                  },
                })}
              />
              {errors.password && (
                <FormHelperText sx={{ color: "#bf6560" }}>
                  {errors.password.message}
                </FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={6}>
            <FormControl sx={{ mt: 2, width: "100%" }} variant="outlined">
              <InputLabel>Confirmar Senha</InputLabel>
              <OutlinedInput
                type={showConfPassword ? "text" : "password"}
                autoComplete="current-password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowConfPassword}
                      onMouseDown={handleMouseDownConfPassword}
                      edge="end"
                    >
                      {showConfPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Confirmar Senha"
                name="confirmedPassword"
                inputProps={{
                  maxLength: 15,
                }}
                {...register("confirmedPassword", {
                  required: "Senha obrigatória",
                  minLength: {
                    value: 8,
                    message: "Senha precisa ter entre 8 e 15 caracteres",
                  },
                })}
              />
              {errors.confirmedPassword && (
                <FormHelperText sx={{ color: "#bf6560" }}>
                  {errors.confirmedPassword.message}
                </FormHelperText>
              )}
            </FormControl>
          </Grid>
        </Grid>
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
        <Lista>
          <ul>
            <li className="item-lista">No mínimo 8 caracteres;</li>
            <li className="item-lista">Pelo menos uma letra minúscula;</li>
            <li className="item-lista">Pelo menos uma letra maiúscula;</li>
            <li className="item-lista">Pelo menos um caractere especial.</li>
          </ul>
        </Lista>
        <Grid container>
          <Grid item mb={2}>
            Já tem um cadastro?{" "}
            <LinkStyle>
              <Link to="/login">Login</Link>
            </LinkStyle>
          </Grid>
        </Grid>
        <SubmitButton text={loading ? <Loading/> : "Cadastrar"} onClick={handleSubmit(onSubmit)} />
      </Box>
    </Box>
      </Grid>
    </Grid>
  );
}

export default RegisterUser;
