import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import axios from "axios";

import {
  Grid,
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
  CircularProgress,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import SubmitButton from "../layout/SubmitButton";
import SuccessAlert from "./SuccessAlert";
import ErrorAlert from "./ErrorAlert";

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

function FormUser({
  formIcon,
  formTitle,
  formParagraph,
  formLink,
  formLinkText,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const onSubmit = async (data) => {
    await axios
      .post(
        "https://localhost:7021/api/Authorize/register-person",
        data,
        setLoading(true)
      )
      .then(() => {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 3000);
        setLoading(false);
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
    <Box sx={boxStyle}>
      <Avatar sx={{ bgcolor: "primary.main" }}>{formIcon}</Avatar>
      <Typography component="h1" variant="h5">
        {formTitle}
      </Typography>
      {loading && (
        <CircularProgress sx={{ color: "#3b8786", alignItems: "center" }} />
      )}
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
                pattern: {
                  value: /^[a-zA-Z]+ [a-zA-Z]+$/,
                  message: "Nome incompleto ou inválido",
                },
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
            {formParagraph}{" "}
            <LinkStyle>
              <Link to={formLink}>{formLinkText}</Link>
            </LinkStyle>
          </Grid>
        </Grid>
        <SubmitButton text="Cadastrar" onClick={handleSubmit(onSubmit)} />
      </Box>
    </Box>
  );
}

export default FormUser;
