// Paso 1 importar el context
import { createContext, useContext } from 'react'

// Paso 2 crear el context, deberia tener el prefijo del archivo
const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={{
      user: '',
      token: ''
    }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

export default AuthProvider
