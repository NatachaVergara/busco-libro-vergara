import React, { useState } from 'react'
import { auth } from '../service/fireBaseConfig'


const ResetPassword = () => {
    const [loginEmail, setLoginEmail] = useState('')


    const resetPassword = (e) => {
        e.preventDefault();
        auth.sendPasswordResetEmail(loginEmail)
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
            <button type="button" className="btn btn-outline-success text-center"
                onClick={resetPassword}>Resetear contraseña</button>
        </div>


    )
}

export default ResetPassword
