import React, { useState } from "react";
import { useForm } from "react-hook-form";

import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { css } from "@emotion/css";

import { Link } from "react-router-dom";

import water from "../../img/pexels-water.mp4";
import SubmitButton from "../layout/SubmitButton";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => console.log(data);

  return (
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
        />{" "}
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
            Faça o login
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
                {...register("email", {
                  required: "Email obrigatório",
                  pattern: {
                    value: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
                    message: "Email incompleto ou inválido",
                  },
                })}
                aria-describedby="component-error-text"
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
            <SubmitButton text="Entrar" onClick={handleSubmit(onSubmit)} />
            <Grid container>
              <Grid item mt={2}>
                Não tem uma conta?{" "}
                <Link
                  to="/cadastro"
                  className={css`
                    text-decoration: none;
                    color: #3b8786;
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
