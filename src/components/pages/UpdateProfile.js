import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { API_URL } from "../../env";

import axios from "axios";

import {
  Grid,
  Box,
  Avatar,
  Typography,
  FormHelperText,
  TextField,
  InputLabel
} from "@mui/material";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";

import NavigationBar from "../layout/NavigationBar";
import SubmitButton from "../layout/SubmitButton";
import SuccessAlert from "../layout/SuccessAlert";
import ErrorAlert from "../layout/ErrorAlert";
import Loading from "../layout/Loading";

function UpdateProfile() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [formattedBirthDate, setFormattedBirthDate] = useState("");
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  const [isUserUpdated, setUserUpdated] = useState(false);
  const [updateCount, setUpdateCount] = useState(0);

  const onSubmit = (data) => {
    const userUpdatedData = {
      "id": userId,
      "name": data.name,
      "email": data.email,
      "phoneNumber": data.phoneNumber,
      "birthday": data.birthDay
    }
    axios.put(`${API_URL}/person/update-client`, userUpdatedData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        setSuccess(true);
        setUserUpdated(true);
        setUpdateCount((prevCount) => prevCount + 1);
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

  useEffect(() => {
    axios
      .get(`${API_URL}/person/get-client-details`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) => {
        setUserId(data.data.id);
        setUserName(data.data.name);

        const birthDate = new Date(data.data.birthday);
        const formattedDate = birthDate.toLocaleDateString();
        setFormattedBirthDate(formattedDate);

        setValue("name", data.data.name);
        setValue("cpf", data.data.cpf);
        setValue("rg", data.data.rg);
        setValue("phoneNumber", data.data.phoneNumber);
        setValue("email", data.data.email);
      })
      .catch((err) => console.log(err));
  },[isUserUpdated, updateCount, token, setValue]);

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
              {userName}
            </Typography>
            {success && <SuccessAlert message="Dados atualizados com sucesso!" />}
            {error && (
              <ErrorAlert message="Ops, algo deu errado. Tente novamente mais tarde." />
            )}
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <Grid container spacing={1}>
                <Grid item xs={6} sm={6}>
                  <TextField
                    InputLabelProps={{ shrink: true }}
                    margin="normal"
                    fullWidth
                    label="Nome completo"
                    name="name"
                    type="text"
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
                    name="birthDay"
                    value={formattedBirthDate}
                    {...register("birthDay")}
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
                    name="phoneNumber"
                    type="text"
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

              <SubmitButton
                text={loading ? <Loading /> : "Atualizar"}
                onClick={handleSubmit(onSubmit)}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default UpdateProfile;
