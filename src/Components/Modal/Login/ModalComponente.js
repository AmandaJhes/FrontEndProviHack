import Modal from 'react-modal';
import Stack from '@mui/material/Stack';
import { theme } from '../../Header/Header';
import { ButtonEnter, ButtonForgot, Form, Heading, InputLogin } from './styles';
import { useState } from 'react';
import ModalSignUp from '../SignUp/ModalSignUp';

const ModalComponent = (props) => {
    const [login, setLogin] = useState('')
    const [pass, setPass] = useState('')
    const [modalSignUp, setModalSignUp] = useState(false)

    const openModalSignUp = () => {
        setModalSignUp(true)
    }

    const closeModalSignUp = () => {
        setModalSignUp(false)
    }


    const onsubmitForm = (event) => {
        event.preventDefault();

        const logIntro = {
            login,
            pass
        }

        setLogin('')
        setPass('')
    }

    return (
        <Modal
            isOpen={props.newModal}
            onRequestClose={props.closeModal}
        >
            <Heading>entrar</Heading>
            <Form onSubmit={onsubmitForm}>
                <div>
                    <InputLogin
                        id="outlined-basic"
                        label="Login"
                        variant="outlined"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    />
                    <InputLogin
                        type={'password'}
                        id="outlined-basic"
                        label="Senha"
                        variant="outlined"
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                    />
                </div>

                <ButtonForgot>Esqueci minha senha</ButtonForgot>
                <Stack spacing={2} direction="row">
                    <ButtonEnter type={'submit'} theme={theme} variant="contained">entrar</ButtonEnter>
                </Stack>
                <p>Novo usuário por aqui? <h2 onClick={openModalSignUp}> Cadastre-se</h2></p>
            </Form>
            <ModalSignUp
                modalSignUp={modalSignUp}
                closeModalSignUp={closeModalSignUp}
            />

        </Modal>
    )
}

export default ModalComponent