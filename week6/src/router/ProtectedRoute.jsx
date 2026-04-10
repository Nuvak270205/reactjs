import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../App";
import { useContext } from "react";

function ProtectedRoute() {
    
    const {user, setUser} = useContext(UserContext);
    console.log(user, setUser)
    // const isAuth = false; 

    return user ? <Outlet /> : <Navigate to="/login" replace />;
}

export default ProtectedRoute;