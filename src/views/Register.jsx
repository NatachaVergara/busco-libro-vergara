import React, { useState } from 'react'
import { auth } from '../service/fireBaseConfig'
import { Link } from 'react-router-dom'
import ModalRegisterLogin from '../components/Modal/ModalRegisterLogin'



const Register = () => {
    const [registerEmail, setRegisterEmail] = useState('')
    const [registerPassword, setRegisterPassword] = useState('')
    const [passwordVald, setPasswordVald] = useState('')
    const [showModal, setShowModal] = useState(false)

    const register = async (e) => {
        try {
            e.preventDefault()
            await auth.createUserWithEmailAndPassword(registerEmail, registerPassword)
            
            setTimeout(() => {
                setShowModal(true)
            }, 1000);

        } catch (error) {
            e.preventDefault()
            alert(error.message)
        }

    }

    const handleHide = () => {
        setShowModal(false)

    }
    
    const noValidate =
        !(registerEmail.length &&
            registerPassword.length &&
            passwordVald.length > 0 &&
            registerPassword === passwordVald
        )

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
                        onChange={(e) => { setRegisterEmail(e.target.value) }}
                    />
                    <small id="emailHelp" className="form-text text-muted">Nunca compartiremos su email</small>
                </div>
                <div className="form-group text-center">
                    <label className="form-label mt-4">Ingrese una contraseña</label>
                    <input type="password"
                        className="form-control"
                        id="contraseña"
                        placeholder="Mínimo 6 caracteres"
                        onChange={(e) => { setRegisterPassword(e.target.value) }}
                    />
                </div>
                <div className="form-group text-center">
                    <label className="form-label mt-4">Vuelva a ingresar su contraseña</label>
                    <input type="password"
                        id="contraseña2"
                        onChange={(e) => { setPasswordVald(e.target.value) }}
                        className={registerPassword !== passwordVald ? "form-control bg-light text-dark" : "form-control"} />
                </div>

                <button
                    type="submit"
                    className="btn btn-primary mt-3"
                    disabled={noValidate}
                    onClick={register}>
                    Registrar
                </button>
                <Link to="/login" className="mt-3">¿Ya tiene cuenta?</Link>
            </form>
            <ModalRegisterLogin
                show={showModal}
                onHide={handleHide}
                message=" Gracias por confiar en nosotros, a partir de ahora ya puede realizar compras en Busco Libro app"
            />

        </>

    )
}

export default Register
