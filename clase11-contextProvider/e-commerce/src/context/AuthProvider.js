// Paso 1 importar el context
import { createContext, useContext, useState } from 'react'
import { Storage } from 'utils/storage'

// Paso 2 crear el context, deberia tener el prefijo del archivo
const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => Storage.get('user') || null)

  const onLogin = (data) => {
    setUser(data)
    Storage.add('user', data)
  }

  const onLogout = () => {
    setUser(null)
    Storage.remove('user')
  }

  return (
    <AuthContext.Provider value={{
      user,
      onLogin,
      onLogout
    }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

export default AuthProvider
