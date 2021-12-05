import React, { useState } from 'react'
import { auth} from '../service/fireBaseConfig'
import { Link } from 'react-router-dom'
import './register.css'

const RegisterContainer = () => {
    const [registerEmail, setRegisterEmail] = useState('')
    const [registerPassword, setRegisterPassword] = useState('')
    const [passwordVald, setPasswordVald] = useState('')

    



    const register = async (e) => {
        try {
            e.preventDefault()
            let user = await auth.createUserWithEmailAndPassword(registerEmail, registerPassword)            
            console.log(user)

            alert(`Cuenta creada exitosamente`)

        } catch (error) {
            console.log(error.message)
     }      

    }

    
    const noValidate = 
        !(registerEmail.length &&
            registerPassword.length &&
            passwordVald.length > 0 &&
            registerPassword === passwordVald
        )


    


    




    return (
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
                    className={registerPassword !== passwordVald ? "form-control bg-danger" : "form-control"} />
                
            </div>
            
            <button
                type="submit"
              
                    className="btn btn-primary mt-3"
                    disabled={noValidate}
                    onClick={register}                    
            >
                <Link to={'/'}
                    className="text-decoration-none">
                Submit
                </Link>
            
            </button>
           

            <Link to="/login" className="mt-3">¿Ya tiene cuenta?</Link>


        </form>
    )
}

export default RegisterContainer
