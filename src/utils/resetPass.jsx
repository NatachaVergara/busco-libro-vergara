import { auth } from '../service/fireBaseConfig'

const loginUser = async (loginEmail, setShowModal) => {

    try {
        auth.sendPasswordResetEmail(loginEmail)
        setShowModal(true)

    } catch (error) {
        console.log(error.message)
        alert(`Ha ocurrido un error al momento de enviar el email para el reseteo de su contraseña.
    ¿Ha ingresado un correo utilizado anteriormente o lo ha ingresado correctamente?`)

    }


}

export default loginUser