import React from "react";
import { Grid, Stack, Alert } from "@mui/material";

function SuccessAlert({ message }) {
  return (
    <Grid>
      <Stack sx={{ width: "100%", zIndex: "1" }} spacing={2}>
        <Alert severity="success">{message}</Alert>
      </Stack>
    </Grid>
  );
}

export default SuccessAlert;
