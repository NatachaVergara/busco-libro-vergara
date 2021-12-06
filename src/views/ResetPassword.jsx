import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ModalResetPassword from '../components/Modal/ModalResetPassword'
import { auth } from '../service/fireBaseConfig'


const ResetPassword = () => {
    const [loginEmail, setLoginEmail] = useState('')
    const [showModal, setShowModal] = useState(false)


    const resetPassword = (e) => {
        e.preventDefault();
        auth.sendPasswordResetEmail(loginEmail)


        setTimeout(() => {
            setShowModal(true)
        }, 1000);


    }

    const handleHide = () => {
        setShowModal(false)

    }


    return (
        <>
            <div className="form-floating container d-flex flex-column  align-items-center mt-5">
                <input type="email"
                    className="form-control mb-2"
                    id="floatingInput"
                    placeholder="email"
                    onChange={(e) => { setLoginEmail(e.target.value) }}

                />
                <label >email@email.com</label>

                <button type="button"
                    disabled={loginEmail === ''}
                    className="btn btn-outline-success text-center"
                    onClick={resetPassword} >
                    Resetear contraseña
                </button>

                <button type="button"
                    className="btn btn-outline-success text-center mt-2">
                    <Link to={'/login'} className="text-decoration-none">
                        Volver a login
                    </Link>
                </button>

            </div>
            <ModalResetPassword
                show={showModal}
                onHide={handleHide}

            />
        </>

    )
}

export default ResetPassword
