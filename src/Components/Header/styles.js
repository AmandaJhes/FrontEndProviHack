import styled from 'styled-components'

export const Main = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width:100%;
height:100vh;
background-color: #0b0b11;
`

export const Div1 = styled.div`
display: flex;
width:90%;
flex-direction: row;
justify-content: space-between;
align-items: center;
height:7.5vh;
padding: 20px;
`

export const Div2 = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
margin-top:50px;

h1{
    color:#ffffff;
    font-family: 'Poppins', sans-serif;
    font-size:60px;
}
`

export const Div3 = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
width:400px;
margin-top:50px;
`

export const ImgLogo = styled.img`
height:40px;
`

export const SubText = styled.div`
color:#ffffff;
font-size:30px;
width:45%;
margin-top: -20px;
`