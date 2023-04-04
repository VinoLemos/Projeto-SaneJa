import React from "react";
import { useForm } from "react-hook-form";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

import NavigationBar from "../layout/NavigationBar";

import SubmitButton from "../layout/SubmitButton";

function TechnicalVisit() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => console.log(data);

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <NavigationBar />
      <Grid item sm={12} xs={12}>
        <Typography component="h1" variant="h5" mt={5} textAlign="center">
          Agende uma visita
        </Typography>
      </Grid>
      <Box component="form" noValidate sx={{ mt: 1, textAlign: "center" }}>
        <FormControl sx={{ width: "30ch" }}>
          <FormLabel
            sx={{
              fontSize: "0.9em",
              color: "#3b8786",
              textAlign: "left",
              marginTop: "1em",
            }}
          >
            Data da visita
          </FormLabel>
          <TextField
            fullWidth
            margin="normal"
            name="dataVisita"
            type="date"
            {...register("dataVisita", {
              required: "Data obrigatória",
            })}
          />
          {errors.dataVisita && (
            <FormHelperText sx={{ color: "#bf6560" }}>
              {errors.dataVisita.message}
            </FormHelperText>
          )}
          <FormControl fullWidth>
            <InputLabel>Selecione o imóvel</InputLabel>
            <Select
              label="Selecione o imóvel"
              sx={{ marginBottom: "1em" }}
            ></Select>
          </FormControl>

          <SubmitButton text="Agendar" onClick={handleSubmit(onSubmit)} />
        </FormControl>
      </Box>
    </Grid>
  );
}

export default TechnicalVisit;
