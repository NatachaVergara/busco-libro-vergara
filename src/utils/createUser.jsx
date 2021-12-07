import { auth } from '../service/fireBaseConfig'



const createUser = async (registerEmail, registerPassword, setShowModal) => {

    try {
        await auth.createUserWithEmailAndPassword(registerEmail, registerPassword)       
            setShowModal(true)

    } catch (error) {
        console.log(error.message)
        alert(`Ha ocurrido un error al momento de crear su contraseña.
        ¿Ha usado ya este mismo email anteriormente?`)
    }



}

export default createUser
