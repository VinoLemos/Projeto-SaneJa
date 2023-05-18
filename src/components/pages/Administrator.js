import React from "react";

import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";

import FormUser from "../layout/FormUser";
import logo from "../../img/logo-name.png";

import styled from "styled-components";
import { css } from "@emotion/css";
import "bootstrap/dist/css/bootstrap.min.css";

const Styles = styled.div`
  .navbar {
    padding: 1em;
    backdrop-filter: blur(10px);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  a {
    text-decoration: none;
    text-transform: uppercase;
    color: #fff;
    text-shadow: 2px 2px #333;
    padding: 8px;

    &:hover {
      backdrop-filter: blur(10px);
      box-shadow: 0 0 15px rgba(253, 253, 253, 0.5);
    }
  }

  .navbar-toggler,
  .navbar-toggler:focus,
  .navbar-toggler:active,
  .navbar-toggler-icon:focus {
    outline: none;
    background-color: rgba(250, 250, 250, 0.4);
    box-shadow: none;
    border: 0;
  }
`;

const style = {
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
    <Styles>
      <Navbar
        expand="lg"
        className={css`
          width: 100vw;
          background-size: cover;
          background-image: url("https://images.pexels.com/photos/689326/pexels-photo-689326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
        `}
      >
        <Navbar.Brand>
          <Link to="/home">
            <img src={logo} alt="Logo Sanejá" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item>
              <Button variant="contained">Sair</Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
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
          <Box sx={style}>
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
    </Styles>
  );
}

export default Administrator;
