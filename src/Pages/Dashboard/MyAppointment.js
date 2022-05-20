import { signOut } from 'firebase/auth';
import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init'




const MyAppointment = () => {

    const [appiontments, setAppiontments] = useState([])

    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate()

    useEffect(() => {
        const url = `http://localhost:5000/booking?patientEmail=${user.email}`

        // const url = `https://api.priyopathshala.com/booking?patientEmail=${user.email}`


        fetch(url, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {

                if (res.status === 200) {
                    return res.json()
                }

                if (res.status === 401 || res.status === 403) {

                    signOut(auth);
                    localStorage.removeItem('accessToken')
                    navigate('/login')
                }

            })
            .then(data => {
                // console.log(data)
                setAppiontments(data)
            })
    }, [user])

    console.log(appiontments)

    return (
        <div className="">
            <h1 className='text-2xl mb-3'>My Appointment {appiontments?.length}</h1>

            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>SERVICE</th>
                            <th>Time</th>
                            <th>Date</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            appiontments?.map((a, index) => <tr className="hover ">
                                <th>{index + 1}</th>
                                <td>{a?.patientEmail}</td>
                                <td>{a?.treatment}</td>
                                <td>{a?.slot}</td>
                                <td>{a?.date}</td>
                                <td>

                                    {(a?.price && !a?.paid) && <Link to={`/dashboard/payment/${a?._id}`}><button className='btn btn-success btn-sm'>pay</button></Link>}
                                    {(a?.price && a?.paid) && <span className='text-success'>paid</span>}

                                </td>
                            </tr>)
                        }




                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyAppointment;