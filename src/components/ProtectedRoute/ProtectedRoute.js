import React from 'react';
import { Navigate } from "react-router-dom";

const ProtectedRoute = (props) => {
    return (
        props.isAuthorized ? props.children : <Navigate to="/" replace />
    )
}

export default ProtectedRoute;