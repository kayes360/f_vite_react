// import {useAuth} from '../contexts/AuthContext'
// import {BrowserRouter as Route,useNavigate ,  Navigate, Outlet } from 'react-router-dom' 

// export default function PrivateRoute({element: Element, ...rest}) {
//     const {currentUser} = useAuth();
//     const navigate = useNavigate();
     
//     // return currentUser ? <Navigate to="/quiz" />: <Navigate to="/login" />;
//     return currentUser ? (
//         <Route {...rest}> {(props) => <Element {...props}/> }</Route>
//     ): (
//         <Navigate to="/login" />
//     ) ;
//     ; 
// }
 

import { Outlet, Navigate  } from "react-router-dom"; 
import {useAuth} from '../contexts/AuthContext'
export default function PrivateRoute() {
  const { currentUser } = useAuth(); 
  return currentUser ? <Outlet/>: <Navigate to='/login' />;
}