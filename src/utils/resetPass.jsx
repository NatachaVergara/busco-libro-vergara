import { auth } from '../service/fireBaseConfig'

const loginUser = async (loginEmail, setShowModal) => {

    try {
        await auth.sendPasswordResetEmail(loginEmail)
         setShowModal(true)
     } catch (error) {
        console.log(error.code)
         switch (error.code) {
             case "auth/invalid-email":
                 alert(`El mail ingresado no es correcto.`)
                 break;
             default:
                 alert(`No se tiene registro de ese correo electrónico.`)
                 break;
         }
 
     }
 
}

export default loginUser