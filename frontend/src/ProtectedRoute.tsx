
import { Navigate, Outlet } from 'react-router';
import { useAppContext } from './context/AppContext';

const ProtectedRoute = () => {
  const { isLoggedIn } = useAppContext(); 
  
    if(isLoggedIn) return <Outlet/>;

  return <Navigate to="/login" replace/>
}

export default ProtectedRoute