import styled from "styled-components";
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 80%;
    justify-content: space-between;
        div{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 60%;
                input{
                    height: 20%;
                    font-size: 2rem;
                }
        }
        p{
            display: flex;
            align-items: center;
            justify-content: center;
            h2{
                color: #3856EF;
                cursor: pointer;
            }
        }

`
export const Heading = styled.h1`
    color: #F4B000;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
`
export const ButtonForgot = styled(Button)`
    &&{
        color: #000;
        border-radius: 15px;
        font-size: 16px;
    }
`
export const ButtonEnter = styled(Button)`
    &&{
        border-radius: 60px;
        height: 30%;
        font-size: 2rem;
        color: white;
        width: 40%;
        font-weight: bold;
        text-transform: uppercase;
    }
`
export const InputLogin = styled(TextField)`
    &&{
        height: 20%;
        font-size: 1rem;
        height: 100%;
        font-weight: bold;
    }

`
