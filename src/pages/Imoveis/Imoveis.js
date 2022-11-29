import { useEffect, useState } from "react";
import { BsHouseDoorFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

import api from "../../api/saneja";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Back from "../../components/Back";
import ImovelCard from "../../components/ImovelCard/ImovelCard";

import classes from "./Imoveis.module.css";
import Button from "../../components/Button/Button";

function Imoveis() {
  const [imoveis, setImoveis] = useState([]);

  useEffect(() => {
    api
      .get(`/imoveis`)
      .then((response) => {
        console.log(response);
        if (!(response && response.data)) {
          throw new Error("Erro ao buscar imoveis");
        }

        setImoveis(response.data);
      })
      .catch(() => {
        throw new Error("Erro ao buscar imoveis");
      });
  }, []);

  const pullImovelFromList = (imovelId) => {
    setImoveis((currentImoveis) =>
      currentImoveis.filter((currentImovel) => currentImovel.id !== imovelId)
    );
  };

  const requestDeleteImovel = (imovelId) => {
    api
      .delete(`/imoveis/${imovelId}`)
      .then(() => {
        pullImovelFromList(imovelId);

        Swal.fire({
          icon: "success",
          title: "Imóvel excluído com sucesso",
          confirmButtonText: "Fechar",
          confirmButtonColor: "#6F9CB5",
        });
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Não foi possível excluir o imóvel",
          confirmButtonText: "Fechar",
          confirmButtonColor: "#6F9CB5",
        });
      });
  };

  const deleteImovelHandler = (imovel) => {
    Swal.fire({
      title: `Deseja excluir o imóvel \n(RGI: ${imovel.rgi})?`,
      showCancelButton: true,
      confirmButtonText: "Excluir",
      cancelButtonText: "Cancelar",
      customClass: {
        actions: "my-actions",
        cancelButton: "order-1 right-gap",
        confirmButton: "order-2",
        denyButton: "order-3",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        requestDeleteImovel(imovel.id);
      }
    });
  };

  return (
    <>
      <Header />
      <div className={classes["main-container"]}>
        <div className={classes.controls}>
          <Link to="/cadastro-imovel">
            <Button type="highlight">
              <BsHouseDoorFill size="1.3rem" /> Novo imóvel
            </Button>
          </Link>
        </div>
        <div className={classes.imoveis}>
          {imoveis.map((imovel) => (
            <ImovelCard
              key={imovel.rgi}
              imovel={imovel}
              onDelete={deleteImovelHandler}
            />
          ))}
        </div>
      </div>
      <Back />
      <Footer />
    </>
  );
}

export default Imoveis;
