import { auth } from '../service/fireBaseConfig'

const loginUser = async (loginEmail, loginPassword, setShowModal) => {

    try {
        await auth.signInWithEmailAndPassword(loginEmail, loginPassword)
        setShowModal(true)

    } catch (error) {
        console.log(error.message)
        alert(`Ha ocurrido un error al momento de querer entrar a su cuenta.
¿Ha ingresado correctamente su email y/o contraseña?`)

    }


}

export default loginUser
