import React from "react"
import { Main, Div1, Div2, Div3,ImgLogo, SubText, P, Pponto } from './styles'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import styled from "styled-components";
import { createTheme } from "@mui/material/styles";
import vector from '../../Assets/Vector.svg'

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
&&{
    border-radius: 80px;
    height: 38px;
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
}
`

const Button1 = styled(Button)`
&&{
    border-radius: 15px;
    height: 40px;
    font-size: 16px;
    padding:0 20px 0 20px;
    font-family: 'Montserrat', sans-serif;
    filter: drop-shadow(1px 3px 3px rgba(10, 10, 16, 0.8));
}
`

const Button2 = styled(Button)`
&&{
    border-radius: 15px;
    height: 40px;
    font-size: 16px;
    padding:0 20px 0 20px;
    font-family: 'Montserrat', sans-serif;
    background-color: #3856ef;
    color:white;
}
`

function Header(props){
   
   return(
      <Main>
        <Div1>
            <ImgLogo src={vector}/>
            <Stack spacing={2} direction="row">
                <ButtonMaterial onClick={props.openModal} theme={theme} variant="outlined"><b>ENTRAR</b></ButtonMaterial>
            </Stack>
        </Div1>
        <Div2>
            <h1><b>Você é a <P>faísca</P> que falta<Pponto>.</Pponto></b></h1>
            <SubText>Você produz a <b>energia</b> que falta e nós mostramos quem você pode <b>salvar</b>.</SubText>
        </Div2>
        <Div3>
        <Stack spacing={2} direction="row">
            <Button1 theme={theme} color="secondary" variant="outlined"><b>Fugir da Missão</b></Button1>
        </Stack>
        <Stack spacing={2} direction="row">
            <Button2 theme={theme} variant="contained"><b>Salvar o planeta</b></Button2>
        </Stack>
        </Div3>
      </Main>
   )

}

export default Header;