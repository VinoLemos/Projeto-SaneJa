import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import axios from "axios";

import {
  Avatar,
  TextField,
  InputAdornment,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  IconButton,
  Paper,
  Box,
  Grid,
  Typography,
  CircularProgress,
} from "@mui/material";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { css } from "@emotion/css";

import Video from "../layout/Video";
import SubmitButton from "../layout/SubmitButton";
import SuccessAlert from "../layout/SuccessAlert";
import ErrorAlert from "../layout/ErrorAlert";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userData = {
      email: data.email,
      password: data.password,
      confirmedPassword: data.password,
      showPassword,
    };
    console.log(userData);
    await axios
      .post(
        "https://localhost:7021/api/Authorize/login",
        userData,
        setLoading(true)
      )
      .then((res) => {
        const token = res.data.token;
        localStorage.setItem("token", token);
        setLoading(false);
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 3000);
      });
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
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {loading ? <CircularProgress /> : "Faça o login"} <br />
            {success && <SuccessAlert message="Login efetuado com suceeso!" />}
            {error && <ErrorAlert message="Login ou senha inválidos." />}
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1, width: "30ch" }}>
            <FormControl sx={{ width: "30ch" }}>
              <TextField
                id="component-error"
                margin="normal"
                fullWidth
                label="Email"
                name="email"
                autoComplete="email"
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
            </FormControl>

            <FormControl sx={{ mb: 3, width: "30ch" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Senha
              </InputLabel>
              <OutlinedInput
                type={showPassword ? "text" : "password"}
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
                autoComplete="current-password"
                label="Senha"
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
            <SubmitButton text="Entrar" onClick={handleSubmit(onSubmit)} />
            <Grid container>
              <Grid item mt={2}>
                Não tem uma conta?{" "}
                <Link
                  to="/cadastro"
                  className={css`
                    text-decoration: none;
                    color: #3b8786;

                    &:hover {
                      color: #41696e;
                    }
                  `}
                >
                  Cadastre-se
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Login;
