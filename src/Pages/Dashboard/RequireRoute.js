import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import Loading from '../../Pages/Shared/Loading/Loading';
import useAdmin from '../../hooks/useAdmin';
import { signOut } from 'firebase/auth';

const RequireAuth = ({ children }) => {

    const [user, loading, error] = useAuthState(auth);
    let location = useLocation();

    const [isAdmin] = useAdmin(user);



    if (loading) {
        return <Loading></Loading>
    }

    if (!isAdmin) {
        signOut(auth)
        return <Navigate to="/login" state={{ from: location }} replace />;

    }

    return children;
};

export default RequireAuth;