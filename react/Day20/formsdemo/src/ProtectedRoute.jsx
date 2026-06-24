import React from 'react'
import {Navigate} from "react-router-dom";

function ProtectedRoute({children}) {
    const isAuthenticated=true;
    if(!isAuthenticated){
       return <Navigate to="/controlled"/>
    }
    return children;
}

export default ProtectedRoute
