import React from "react"
import Cadastro from "./Components/Formulario/Cadastro";
import { ContainerNossosServicos } from "./Components/NossosServicos/ContainerNossosServicos";
import styled from "styled-components";
import Header from "./Components/Header/Header";
import PlanetB from "./Components/PlanetB/PlanetB";
import SecondPage from "./Pages/SecondPage/SecondPage"
// import Login from "./Components/Formulario/Login";
import "./Styles/App.css"

function App() {
  return (
    <div>
      {/* <h3><Login /> </h3> */}
      {/* <h3><Cadastro /></h3> */}
      {/* <Header/> */}
      {/* <PlanetB/> */}
      <SecondPage/>
    </div>
  );
}

export default App;
