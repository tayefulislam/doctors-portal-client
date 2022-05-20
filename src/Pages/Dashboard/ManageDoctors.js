import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Pages/Shared/Loading/Loading'
import DoctorRow from './DoctorRow';
import DeleteComfirmModal from './DeleteComfirmModal';

const ManageDoctors = () => {

    const [deletingDoctor, setDeletingDoctor] = useState(null)

    const url = `http://localhost:5000/doctors`;

    const { data: doctors, isLoading } = useQuery('allDoctors', () => fetch(url, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))



    if (isLoading) {
        return <Loading></Loading>
    }


    console.log(deletingDoctor)





    return (
        <div>

            <h1>Manage Doctors {doctors?.length}</h1>

            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            doctors?.map((doctor, index) => <DoctorRow
                                key={doctor?._id}
                                doctor={doctor}
                                index={index}
                                setDeletingDoctor={setDeletingDoctor}></DoctorRow>)
                        }


                    </tbody>
                </table>
            </div>

            {deletingDoctor && <DeleteComfirmModal
            ></DeleteComfirmModal>}


        </div>
    );
};

export default ManageDoctors;