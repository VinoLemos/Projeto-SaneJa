import React from "react";

import { Grid, Box, Typography, Modal, Button } from "@mui/material";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";

import NavBarEmployee from "../layout/NavBarEmployee";
import FormUser from "../layout/FormUser";

const boxStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80vw",
  bgcolor: "background.paper",
  border: "2px solid rgba(250, 250, 250, 0.4)",
  boxShadow: 24,
};

function Administrator() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Grid>
      <NavBarEmployee />
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        marginTop={5}
      >
        <Typography component="h1" variant="h5" marginBottom={5}>
          Ferramenta de administração
        </Typography>
        <Button variant="contained" onClick={handleOpen}>
          Cadastrar Agente
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={boxStyle}>
            <Box
              sx={{
                my: 4,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <FormUser
                formIcon={<AccountBoxOutlinedIcon />}
                formTitle="Cadastrar Agente"
              />
            </Box>
          </Box>
        </Modal>
      </Grid>
    </Grid>
  );
}

export default Administrator;
