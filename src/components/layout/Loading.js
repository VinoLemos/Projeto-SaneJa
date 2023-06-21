import React from "react";

import { CircularProgress } from "@mui/material";

function Loading() {
  return <CircularProgress sx={{ color: "#fff", alignItems: "center" }} />;
}

export default Loading;
