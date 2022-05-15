import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'




const MyAppointment = () => {

    const [appiontments, setAppiontments] = useState([])

    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        const url = `http://localhost:5000/booking?patientEmail=${user.email}`

        // const url = `https://api.priyopathshala.com/booking?patientEmail=${user.email}`


        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAppiontments(data)
            })
    }, [user])

    return (
        <div className="">
            <h1 className='text-2xl mb-3'>My Appointment {appiontments.length}</h1>

            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>SERVICE</th>
                            <th>Time</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            appiontments.map((a, index) => <tr className="hover ">
                                <th>{index + 1}</th>
                                <td>{a?.patientEmail}</td>
                                <td>{a?.treatment}</td>
                                <td>{a?.slot}</td>
                                <td>{a?.date}</td>
                            </tr>)
                        }




                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyAppointment;