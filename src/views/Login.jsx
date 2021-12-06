import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ModalRegisterLogin from '../components/Modal/ModalRegisterLogin'
import { auth } from '../service/fireBaseConfig'


const Login = () => {
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const [showModal, setShowModal] = useState(false)

    const noValidate =
        !(loginEmail.length &&
            loginPassword.length > 0

        )

    const login = async (e) => {

        try {
            e.preventDefault()
            await auth.signInWithEmailAndPassword(loginEmail, loginPassword)

            setTimeout(() => {
                setShowModal(true)
            }, 1000);

        } catch (error) {
            alert(error.message)
        }

    }


    const handleHide = () => {
        setShowModal(false)

    }

    return (
        <>
            <form className="d-flex flex-column align-items-center">
                <div className="form-group  text-center">
                    <label className="form-label mt-4 ">Ingrese su email</label>
                    <input type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        onChange={(e) => { setLoginEmail(e.target.value) }}
                    />
                    <small id="emailHelp" className="form-text text-muted">Nunca compartiremos su email</small>
                </div>
                <div className="form-group text-center">
                    <label className="form-label mt-4">Ingrese una contraseña</label>
                    <input type="password"
                        className="form-control"
                        id="contraseña"
                        placeholder="Mínimo 6 caracteres"
                        onChange={(e) => { setLoginPassword(e.target.value) }}
                    />
                </div>
                <button type="submit"
                    className="btn btn-primary mt-3"
                    disabled={noValidate}
                    onClick={login}>
                    Submit
                </button>

                <Link to="/register" className="mt-3">¿No tiene cuenta?</Link>
                <Link to="/resetPassword" className="mt-3">¿No recuerda su contraseña?</Link>
            </form>
            <ModalRegisterLogin
                show={showModal}
                onHide={handleHide}
                message=" Gracias por volver a confiar en Busco Libro app"

            />
        </>



    )
}

export default Login
