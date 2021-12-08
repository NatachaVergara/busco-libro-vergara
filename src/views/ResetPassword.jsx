import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ModalResetPassword from '../components/Modal/ModalResetPassword'
import resetPass from '../utils/resetPass'


const ResetPassword = () => {
    const [loginEmail, setLoginEmail] = useState('')
    const [showModal, setShowModal] = useState(false)


    const resetPassword = (e) => {      
        resetPass(loginEmail, setShowModal)
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

                <Link to={'/login'} className="text-decoration-none">
                <button type="button"
                    className="btn btn-outline-success text-center mt-2">                    
                        Volver a login                  
                </button>
                </Link>
                <h6 className="mx-3  mt-3 text-center">Si tiene problemas para resetear su contraseña envíe un email a ntchvergara@gmail.com</h6>

            </div>
            <ModalResetPassword
                show={showModal}
                onHide={handleHide}

            />
        </>

    )
}

export default ResetPassword
