import React, { useState } from "react";

import { Navigate } from "react-router-dom";
import { Button } from "@mui/material";

function LogoutButton() {
  const [redirect, setRedirect] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setRedirect(true);
  };

  return (
    <Button variant="contained" onClick={handleLogout}>
      Sair
      {redirect && <Navigate to="/" />}
    </Button>
  );
}

export default LogoutButton;
