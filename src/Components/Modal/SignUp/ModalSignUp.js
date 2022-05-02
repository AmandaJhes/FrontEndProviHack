import Modal from 'react-modal';
import Stack from '@mui/material/Stack';
import { theme } from '../../Header/Header';
import { useState } from 'react';
import { Form, InputLogin, ButtonEnter, Heading } from './styles'
const ModalSignUp = (props) => {
    const [login, setLogin] = useState('')
    const [pass, setPass] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [compare, setCompare] = useState(false)

    const onsubmitForm = (event) => {
        event.preventDefault();

        pass !== confirmPass ? setCompare(true) : setCompare(false)

        const logIn = {
            login,
            pass
        }
      
    }

    return (
        <Modal
            isOpen={props.modalSignUp}
            onRequestClose={props.closeModalSignUp}
        >
            <Heading>Cadastro</Heading>
            <Form onSubmit={onsubmitForm}>
                <div>
                    <InputLogin
                        id="outlined-basic"
                        label="Email"
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
                        inputProps={{ maxLength: 6, title: "A senha deve conter até 6 digitos" }}

                    />
                    <InputLogin
                        error={compare}
                        helperText={compare ? "Senhas diferentes" : ""}
                        type={'password'}
                        id="outlined-basic"
                        label="Confirmar Senha"
                        variant="outlined"
                        value={confirmPass}
                        onChange={(e) => setConfirmPass(e.target.value)}
                    />
                </div>
                <Stack spacing={2} direction="row">
                    <ButtonEnter type={'submit'} theme={theme} variant="contained">entrar</ButtonEnter>
                </Stack>

            </Form>
        </Modal>
    )
}

export default ModalSignUp