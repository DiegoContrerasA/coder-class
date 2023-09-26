import { useAuth } from 'context/AuthProvider'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
  const { user } = useAuth()

  if (!user) return <Navigate to='/auth/sign-in' />

  return children
}

export default PrivateRoute
