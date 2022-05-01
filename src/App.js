import React, { useState } from "react"
import Cadastro from "./Components/Formulario/Cadastro";
import { ContainerNossosServicos } from "./Components/NossosServicos/ContainerNossosServicos";
import styled from "styled-components";
import Header from "./Components/Header/Header";
import PlanetB from "./Components/PlanetB/PlanetB";
// import Login from "./Components/Formulario/Login";
import "./Styles/App.css"

function App() {
  const [newModal,setNewModal] = useState(false)

  const openModal=()=>{
    setNewModal(true)
  }

  const closeModal=()=>{
    setNewModal(false)
  }

  return (
    <div>
      {/* <h3><Login /> </h3> */}
      {/* <h3><Cadastro /></h3> */}
      <Header/>
      {/* <PlanetB/> */}
    </div>
  );
}

export default App;
