import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface PrivateRouteProps {
    isAuthenticated: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ isAuthenticated }) => {
    return isAuthenticated ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoute;
