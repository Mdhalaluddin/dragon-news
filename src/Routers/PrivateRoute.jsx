import { useContext } from "react";
import { AuthContext } from "../firebase/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRoute = ({children}) => {
    const {user, lodding} = useContext(AuthContext)
    
    const location = useLocation();
    console.log(location.pathname);
    
    if (lodding){
        return <span className="loading loading-spinner text-error text-center mt-14 text-5xl"></span> 
    }
    if(user){
               
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
    
};
PrivateRoute.propTypes = {
    children: PropTypes.node
}

export default PrivateRoute;