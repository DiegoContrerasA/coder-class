import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children, session }) => {
    //logica que vamos a utilizar

    if(!session) return <Navigate to='/login' replace />
 
    return children

}

export default ProtectedRoute

