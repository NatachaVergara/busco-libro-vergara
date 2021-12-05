
// import { createContext, useState, useContext } from 'react'

// import { auth } from '../service/fireBaseConfig'

// const AuthContext = createContext([])

// export const useAuthContext = () => {
//     return useContext(AuthContext)
// };

// const AuthContextProvider = ({ children }) => {
//     const [newUser, setNewUser] = useState([])

//     const register = async (registerEmail, registerPassword) => {
//         try {

//             const user = await auth.createUserWithEmailAndPassword(registerEmail, registerPassword)
//             setNewUser(user)
//             console.log(newUser)

//         } catch (error) {
//             console.log(error.message)
//         }

//     }








//     return (
//         <AuthContext.Provider
//             value={register}
//         >
//             {children}
//         </AuthContext.Provider>




//     )

// }

// export default AuthContextProvider