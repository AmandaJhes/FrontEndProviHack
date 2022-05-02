import React, { useState } from "react"
import Cadastro from "./Components/Formulario/Cadastro";
import { ContainerNossosServicos } from "./Components/NossosServicos/ContainerNossosServicos";
import styled from "styled-components";
import Header from "./Components/Header/Header";
import PlanetB from "./Components/PlanetB/PlanetB";
// import Login from "./Components/Formulario/Login";
import "./Styles/App.css"
import ModalComponent from "./Components/Modal/Login/ModalComponente";

function App() {
  const [newModal, setNewModal] = useState(false)

  const openModal = () => {
    setNewModal(true)
  }

  const closeModal = () => {
    setNewModal(false)
  }
console.log(newModal);
  return (
    <div>
      {/* <h3><Login /> </h3> */}
      {/* <h3><Cadastro /></h3> */}
      <Header
        openModal={openModal}
      />
      <ModalComponent
        newModal={newModal}
        closeModal={closeModal}
      />
      {/* <PlanetB/> */}
    </div>
  );
}

export default App;
