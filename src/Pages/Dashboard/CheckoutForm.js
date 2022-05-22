import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import Loading from '../Shared/Loading/Loading';



const CheckoutForm = ({ appointment }) => {
    console.log(appointment)



    const price = appointment?.price



    const stripe = useStripe();
    const elements = useElements();

    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');


    useEffect(() => {
        const url = `http://localhost:5000/create-payment-intent`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }, [price])

    // console.log(clientSecret)


    const handleSubmit = async (event) => {
        event.preventDefault()


        if (!stripe || !elements) {

            return;

        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }


        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            setCardError(error?.message || '')

        }

        else {
            console.log(paymentMethod)
        }



    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />


                <button className='btn btn-success btn-sm mt-3' type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>

            <p className='text-red-500'>{cardError}</p>
        </>
    );
};

export default CheckoutForm;