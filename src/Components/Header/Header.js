import React from "react"
import { Main, Div1, Div2, Div3,ImgLogo, SubText } from './styles'
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
    height: 40px;
    font-size: 16px;
}
`

const Button1 = styled(Button)`
&&{
    border-radius: 15px;
    height: 40px;
    font-size: 16px;
}
`

const Button2 = styled(Button)`
&&{
    border-radius: 15px;
    height: 40px;
    font-size: 16px;
}
`

function Header(){
   
   return(
      <Main>
        <Div1>
            <ImgLogo src={vector}/>
            <Stack spacing={2} direction="row">
                <ButtonMaterial theme={theme} variant="outlined"><b>ENTRAR</b></ButtonMaterial>
            </Stack>
        </Div1>
        <Div2>
            <h1><b>Você é a faísca que falta.</b></h1>
            <SubText>Você produz a energia que falta e nós mostramos quem você pode salvar.</SubText>
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