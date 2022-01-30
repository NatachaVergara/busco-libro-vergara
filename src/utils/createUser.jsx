import { auth } from '../service/fireBaseConfig'



const createUser = async (registerEmail, registerPassword, setShowModal) => {

    try {
        await auth.createUserWithEmailAndPassword(registerEmail, registerPassword)
        setShowModal(true)
<<<<<<< HEAD

=======
>>>>>>> cd818ae875ab6072b3f10dbd6f92a83855c1db9f
    } catch (error) {
        switch (error.code) {
            case "auth/email-already-in-use":
                alert("Ya tenemos una cuenta registrado con ese mail");
                break;
            default:
                alert("Algo salió mal, intenta recargando la página");
                break;
        }
<<<<<<< HEAD
=======

    }

>>>>>>> cd818ae875ab6072b3f10dbd6f92a83855c1db9f

    }

}

export default createUser
