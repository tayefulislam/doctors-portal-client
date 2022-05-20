import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/booking/${id}`
    const { data } = useQuery(['bookingData', id], () => fetch(url, {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    console.log(data)

    return (

        <div>

            <h1 className='text-blue-500 text-2xl'>Welcome to Payment Dashboard</h1>
            <h2>Plase Pay For : {id}</h2>



        </div>
    );
};

export default Payment;