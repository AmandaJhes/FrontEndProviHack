import React from "react";
import {
  // Main,
  DivHead,
  ImgLogo,
  H1,
  Pmenor,
  Pmaior,
  Borda,
  Borda2,
  Infos,
  ImgInfos,
  BordaFim,
  Copyrights,
  MidImg,
  MidDiv
} from "./styles";
import { createTheme } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import styled from "styled-components";
import logo from "../../Assets/Vector.svg";
import art1 from "../../Assets/art1.png";
import art2 from "../../Assets/art2.png";
import art3 from "../../Assets/art3.png";
import {
  IconContext,
} from "react-icons";

import { RiFacebookFill,
    RiWhatsappFill,
    RiInstagramFill,
    RiTwitterFill, } from "react-icons/ri";

import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#f4b000",
    },
    secondary: {
      main: "#ffffff",
    },
    terciary: {
      main: "#0044ff",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

const ButtonMaterial = styled(Button)`
  && {
    border-radius: 80px;
    height: 38px;
    font-size: 20px;
    font-family: "Montserrat", sans-serif;
    position: absolute;
    left: 20px;
  }
`;

const Main = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width:100%;
height:100%;
background-color: #0b0b11;

.global-class-name{
  :hover{
    opacity:0.8;
    cursor:pointer;
  }
}
`

function SecondPage() {
  return (
    <Main>
      <DivHead>
        <Stack spacing={2} direction="row">
          <ButtonMaterial theme={theme} variant="outlined">
            <b>←</b>
          </ButtonMaterial>
        </Stack>
        <ImgLogo src={logo}></ImgLogo>
      </DivHead>
      <H1>
        Mural de <p>ECO</p>ntribuição
      </H1>
      <MidDiv>
        <MidImg src={art1}></MidImg>
        <MidImg src={art2}></MidImg>
        <MidImg src={art3}></MidImg>
      </MidDiv>
      <Infos>
      <IconContext.Provider
          value={{
            color: "white",
            size: "50px"
          }}
        >
          <div>
            <BsFillTelephoneFill />
          </div>
        </IconContext.Provider>
        <Borda>
          <Pmenor>Falar com suporte</Pmenor>
          <Pmaior>+55 19 914521455</Pmaior>
        </Borda>
        <IconContext.Provider
          value={{
            color: "white",
            size: "50px"
          }}
        >
          <div>
            <AiOutlineMail />
          </div>
        </IconContext.Provider>
        <Borda>
          <Pmenor>envie-nos um e-mail</Pmenor>
          <Pmaior>nome@gmail.com</Pmaior>
        </Borda>
        <IconContext.Provider
          value={{
            color: "white",
            size: "50px"
          }}
        >
          <div>
            <MdLocationOn />
          </div>
        </IconContext.Provider>
        <Borda2>
          <Pmenor>Rua da Árvore, 2030</Pmenor>
          <Pmaior>Campinas, SP</Pmaior>
        </Borda2>
      </Infos>
      <BordaFim />
      <Copyrights>
        <IconContext.Provider
          value={{
            color: "white",
            size: "50px",
            className: "global-class-name",
          }}
        >
          <div>
            <RiFacebookFill />
          </div>
        </IconContext.Provider>
        <IconContext.Provider
          value={{
            color: "white",
            size: "50px",
            className: "global-class-name",
          }}
        >
          <div>
            <RiWhatsappFill />
          </div>
        </IconContext.Provider>
        <IconContext.Provider
          value={{
            color: "white",
            size: "50px",
            className: "global-class-name",
          }}
        >
          <div>
            <RiInstagramFill />
          </div>
        </IconContext.Provider>
        <IconContext.Provider
          value={{
            color: "white",
            size: "50px",
            className: "global-class-name",
          }}
        >
          <div>
            <RiTwitterFill />
          </div>
        </IconContext.Provider>
        <p>
          Copyright 2019 logo | Políticas de Privacidade | Termos e Condições
        </p>
      </Copyrights>
    </Main>
  );
}

export default SecondPage;
