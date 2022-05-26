import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import Loading from '../Shared/Loading/Loading';
import useAdmin from '../../hooks/useAdmin';
import { signOut } from 'firebase/auth';

const RequireAdmin = ({ children }) => {

    const [user, loading, error] = useAuthState(auth);
    let location = useLocation();

    const [admin, adminLoading] = useAdmin(user);

    console.log(admin)



    if (loading || adminLoading) {
        return <Loading></Loading>
    }

    if (!user || !admin) {

        signOut(auth)

        return <Navigate to="/login" state={{ from: location }} replace />;

    }

    return children;
};

export default RequireAdmin;