import React, { useState, useEffect } from "react";
import { API_URL } from "../../env";
import { useForm } from "react-hook-form";

import {
  Grid,
  Typography,
  Box,
  FormHelperText,
  FormControl,
  FormLabel,
  TextField,
  Select,
  InputLabel,
  MenuItem,
  CircularProgress
} from "@mui/material";

import NavigationBar from "../layout/NavigationBar";
import SubmitButton from "../layout/SubmitButton";
import SuccessAlert from "../layout/SuccessAlert";
import ErrorAlert from "../layout/ErrorAlert";
import axios from "axios";

function TechnicalVisit() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const [properties, setProperties] = useState([]);
  const [selectedPropertyId, setSelectedPropertyId] = useState('');
  const [loading, setLoading] = React.useState(false);
  const token = localStorage.getItem("token");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const statusId = "442ed696-b819-493f-aab8-b754104673c6";

  useEffect(() => {
    fetch(
      `${API_URL}/ResidentialProperty/get-user-properties`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => response.json())
      .then((json) => { setProperties(json); if (json.length > 0) { setSelectedPropertyId(json[0].id) } })
      .catch((err) => console.log(err));
  }, []);

  const onSubmit = async (data) => {
    const propertyId = selectedPropertyId;
    const requestVisitData = {
      "residentialPropertyId": propertyId,
      "statusId": statusId,
      "visitDate": data.visitDate
    }
    await axios.post(`${API_URL}/technicalvisit/request-visit`, requestVisitData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
      console.log(requestVisitData),
      setLoading(true))
      .then(() => {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 3000);
        setLoading(false);
        setTimeout(() => {
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

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <NavigationBar />
      <Grid item sm={12} xs={12}>
        <Typography component="h1" variant="h5" mt={5} textAlign="center">
          Agende uma visita
        </Typography>
        {success && <SuccessAlert message="Visita agendada com sucesso!" />}
        {error && (
          <ErrorAlert message="Ops, algo deu errado. Tente novamente mais tarde." />
        )}
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
            name="visitDate"
            type="date"
            {...register("visitDate", {
              required: "Data obrigatória",
            })}
          />
          {errors.visitDate && (
            <FormHelperText sx={{ color: "#bf6560" }}>
              {errors.visitDate.message}
            </FormHelperText>
          )}
          <FormControl fullWidth>
            <InputLabel>Selecione o imóvel</InputLabel>

            <Select
              value={selectedPropertyId}
              onChange={(event) => setSelectedPropertyId(event.target.value)}
              label="Selecione o imóvel"
              sx={{ marginBottom: "1em" }}
              key={selectedPropertyId}
            >
              {properties.map((property) => (
                <MenuItem value={property.id} key={property.id}>{property.street}</MenuItem>
              ))}

            </Select>

          </FormControl>

          <SubmitButton text={loading ? <CircularProgress sx={{ color: "#3b8786", alignItems: "center" }} /> : "Agendar"} onClick={handleSubmit(onSubmit)} />
        </FormControl>
      </Box>
    </Grid>
  );
}

export default TechnicalVisit;
