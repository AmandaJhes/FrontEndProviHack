import styled from 'styled-components'

export const DivHead = styled.div`
display: flex;
width:100%;
flex-direction: row;
justify-content:center;
align-items: flex-start;
height:7.5vh;
margin-top:50px;
margin-bottom: 50px;
`

export const ImgLogo = styled.img`
height:130px;
width:680px;

`
export const H1 = styled.h1`
color:#ffffff;
font-size: 60px;
p{
    display:inline;
    color:#f4b000;
}
`

export const Pmenor = styled.p`
font-family: Montserrat;
  font-size: 14px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.14;
  letter-spacing: normal;
  text-align: left;
  color: #fff;
  height:25px;
  margin:0;
`
export const Pmaior = styled.p`
font-family: Montserrat;
  font-size: 20px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
  color: #fff;
  height:25px;
  margin:0;
  margin-top:5px;
`

export const Borda = styled.div`
border-right: 2px solid #f4b000;
height: 80px;
width: 200px;
display: flex;
flex-direction: column;
justify-content: center;
padding:0 20px;
margin-right:20px;
`
export const Borda2 = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
height: 80px;
width: 200px;
padding:0 20px;
`
export const Infos = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`

export const ImgInfos = styled.div`
width:50px;
height:50px;
display:flex;
align-items: center;
`

export const BordaFim = styled.div`
width:5px;
border-top:2px solid #f4b000;
width:85%;
margin-top:50px;
`

export const Copyrights = styled.div`
margin-top:75px;
width:85%;
display:flex;
flex-direction: row;
justify-content: space-around;
align-items: flex-start;
height:50px;
margin-bottom:100px;
p{
    font-family: Montserrat;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 3.06;
  letter-spacing: normal;
  text-align: center;
  color: #fff;
}
`
export const MidDiv = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
width:100%;
`

export const MidImg = styled.img`
width:80%;
border-radius:20px;
box-shadow:5px 5px 5px 5px black;
margin-bottom:100px;
`