import { auth } from '../service/fireBaseConfig'

const loginUser = async (loginEmail, loginPassword, setShowModal) => {

    try {
        await auth.signInWithEmailAndPassword(loginEmail, loginPassword)
        setShowModal(true)

    } catch (error) {
          switch (error.code) {
             case "auth/user-not-found":
                 alert("No encontramos ningún usuario con ese mail, intenta creando una cuenta");                 
                 break;
             case "auth/wrong-password":
                 alert("El mail o la contraseña son incorrectos");
                 break;
             case "auth/too-many-requests":
                 alert("Haz intentado muchas veces, intenta de nuevo en 5 minutos");
                 break;
             default:
                 alert("Algo salió mal, intenta recargando la página");
                 break;;
         }   
    }


}

export default loginUser
