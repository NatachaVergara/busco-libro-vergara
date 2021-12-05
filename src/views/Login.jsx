import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../service/fireBaseConfig'


const Login = () => {
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')




    const noValidate =
        !(loginEmail.length &&
            loginPassword.length > 0

        )

    const login = async (e) => {

        try {
            e.preventDefault()
            let user = await auth.signInWithEmailAndPassword(loginEmail, loginPassword)
            console.log(user)
            alert(`Ya se encuentra en su cuenta`)

        } catch (error) {
            console.log(error.message)
        }

    }


    return (
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
                onClick={login}
            >
                <Link to={'/'} className="text-decoration-none"> Submit  </Link>
            </button>



            <Link to="/register" className="mt-3">¿No tiene cuenta?</Link>


        </form>
    )
}

export default Login
