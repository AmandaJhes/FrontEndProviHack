import React from "react"
import Cadastro from "./Components/Formulario/Cadastro";
import { ContainerNossosServicos } from "./Components/NossosServicos/ContainerNossosServicos";
// import Login from "./Components/Formulario/Login";
import "./Styles/App.css"

function App() {
  return (
    <div className="App">
      {/* <h3><Login /> </h3> */}
      {/* <h3><Cadastro /></h3> */}
      <h3><ContainerNossosServicos /></h3>
    </div>
  );
}

export default App;
