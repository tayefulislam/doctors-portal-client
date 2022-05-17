import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Pages/Shared/Loading/Loading'

const ManageDoctors = () => {

    const url = `http://localhost:5000/doctors`

    const { data: doctors, isLoading } = useQuery('allDoctors', () => fetch(url, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))


    if (isLoading) {
        return <Loading></Loading>
    }





    return (
        <div>

            <h1>Manage Doctors {doctors?.length}</h1>



        </div>
    );
};

export default ManageDoctors;