import { auth } from '../service/fireBaseConfig'



const createUser = async (registerEmail, registerPassword, setShowModal) => {

    try {
        await auth.createUserWithEmailAndPassword(registerEmail, registerPassword)
        setShowModal(true)
    } catch (error) {
        switch (error.code) {
            case "auth/email-already-in-use":
                alert("Ya tenemos una cuenta registrado con ese mail");
                break;
            default:
                alert("Algo salió mal, intenta recargando la página");
                break;
        }

    }

}

export default createUser
