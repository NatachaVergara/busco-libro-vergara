import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../service/fireBaseConfig'


const ResetPassword = () => {
    const [loginEmail, setLoginEmail] = useState('')


    const resetPassword = (e) => {
        e.preventDefault();
        auth.sendPasswordResetEmail(loginEmail)
        alert(`Revise su email`)
    }


    return (

        <div className="form-floating container d-flex flex-column  align-items-center mt-5">
            <input type="password"
                className="form-control mb-2"
                id="floatingPassword"
                placeholder="Password"
                onChange={(e) => { setLoginEmail(e.target.value) }}
               
            />
            <label >Password</label>
           
            <button type="button"
                className="btn btn-outline-success text-center"
                onClick={resetPassword}>
                <Link to={'/login'} className="text-decoration-none">Resetear contraseña
                </Link>
            </button>
           
        </div>


    )
}

export default ResetPassword
