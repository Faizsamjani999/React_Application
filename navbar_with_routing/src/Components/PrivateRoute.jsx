import { Navigate } from 'react-router-dom';

function PrivateRoute({children}) {
    let login = false;
  return (
    login ? children : <Navigate to="/login"/>
  )
}

export default PrivateRoute