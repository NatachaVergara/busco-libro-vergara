import { auth } from '../service/fireBaseConfig'

const loginUser = async (loginEmail, loginPassword, setShowModal) => {

    try {
        await auth.signInWithEmailAndPassword(loginEmail, loginPassword)
        setTimeout(() => {
            setShowModal(true)
        }, 100);

    } catch (error) {
        console.log(error.message)
        alert('Ha ocurrido un error al momento del login. ¿Ha ingresado correctamente su email y/o contraseña?')
        
    }


}

export default loginUser
