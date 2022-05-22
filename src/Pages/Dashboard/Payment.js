import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import Loading from '../Shared/Loading/Loading';

const stripePromise = loadStripe('pk_test_51L1w1yF00OEb7B1tXOfmb6YasMxhiYdSzkn5KASD7a78M5y4XfSrwS0z2ZpJNgWFZYNWXcLO22RNXzAaPWWLeaqf00O1h6t7OZ');

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/booking/${id}`
    const { data } = useQuery(['bookingData', id], () => fetch(url, {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    console.log(data)


    // if (!data) {
    //     return <Loading></Loading>
    // }

    return (


        <div class="card w-full bg-base-100 shadow-xl">

            <div class="card-body items-center text-center">
                <h2 class="card-title">Hello {data?.patientName ? data?.patientName : data?.patientEmail.split('@')[0]}</h2>
                <p>Plase Pay For {data?.treatment}</p>
                <p>Your Appiontment : <span className='text-red-500'>{data?.date}</span> at {data?.slot}</p>
                <p>Plase Pay : {data?.price}</p>


            </div>
            <div class="card-body w-full">
                <Elements stripe={stripePromise}>
                    <CheckoutForm appointment={data} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;