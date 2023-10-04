import { useContext } from "react";
import { AuthContext } from "../../probider/Authprovider";
import {  Navigate, useLocation } from "react-router-dom";

 

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    // akhane ai location return navigate er vitor state e declear kora jinis gula bujte login component 
    // text porte hbe
    const location = useLocation()
    console.log(location.pathname);

    if(loading){
        return <span className="loading loading-bars loading-lg"></span>
    }
    if(user){
        return children
    }
    return   <Navigate state={location.pathname} to={"/login"}></Navigate>
};

export default PrivateRoute;