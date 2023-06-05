import React from "react";
import { Grid, Stack, Alert } from "@mui/material";

function ErrorAlert({ message }) {
  return (
    <Grid>
      <Stack sx={{ width: "100%", zIndex: "1" }} spacing={2}>
        <Alert severity="error">{message}</Alert>
      </Stack>
    </Grid>
  );
}

export default ErrorAlert;
