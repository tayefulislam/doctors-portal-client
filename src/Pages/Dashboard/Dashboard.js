import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';

import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Dashboard = () => {

    const [user] = useAuthState(auth)

    const [admin] = useAdmin(user)

    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                {/* <!-- Page content here --> */}

                {/* <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}

                <h1 className='text-center text-4xl mt-3'>Welcome to Dashboard</h1>

                <Outlet />


            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My Appointment</Link></li>
                    <li><Link to='/dashboard/review'>My Reviews</Link></li>
                    {

                        admin && <>
                            <li><Link to='/dashboard/users'>All Users</Link></li>
                            <li><Link to='/dashboard/addDoctor'>Add Doctor</Link></li>
                            <li><Link to='/dashboard/manageDoctors'>Manage Doctors</Link></li>
                        </>
                    }



                </ul>

            </div>
        </div>
    );
};

export default Dashboard;