import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ModalRegisterLogin from '../components/Modal/ModalRegisterLogin'

import loginUser from "../utils/loginUser"



const Login = () => {
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const [showModal, setShowModal] = useState(false)


    const noValidate =
        !(loginEmail.length &&
            loginPassword.length > 0

        )

    const login = (e) => {
        e.preventDefault()
        loginUser(loginEmail, loginPassword, setShowModal)
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
                    <small id="emailHelp" className="form-text text-muted">Nunca compartiremos su información</small>
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
                <Link to="/loginAdmin" className="mt-3">Soy administrador</Link>
                <h6 className="mx-3  mt-3 text-center">Si tiene problemas para loguearse a su cuenta envíe un email a ntchvergara@gmail.com</h6>
            </form>


            <ModalRegisterLogin
                show={showModal}
                onHide={handleHide}
                message=" Gracias por volver a confiar en Busco Libro app" />



        </>



    )
}

export default Login
