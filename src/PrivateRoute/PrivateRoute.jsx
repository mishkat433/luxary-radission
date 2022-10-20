import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContex } from '../AuthContex/AuthContex';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(UserContex);
    const location = useLocation()

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (user && user.uid) {
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;