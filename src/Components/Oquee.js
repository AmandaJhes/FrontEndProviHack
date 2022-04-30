import styled from "styled-components"
import florest from '../Assets/florest.png'

const Main = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`
const Span = styled.div`
    h1{
        width: 20%;
    }
    p{
        width: 40%;
    }
`
export const Oque = () =>{

    return(
        <Main>
            <div>
                <img src={florest}/>
            </div>
            <Span>
                <h1>O que é o "nome do projeto"?</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <p>Mais sobre nós -</p>
            </Span>
        </Main>
    )
}