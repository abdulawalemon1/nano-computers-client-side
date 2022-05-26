import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import CheckoutForm from '../Dashboard/CheckoutForm';
import Loading from '../Shared/Loading';

const stripePromise = loadStripe('pk_test_51L2ptwBydNTbMITkW2tilJ6dFuFokHw6a7C662hn4RiyxAmYovTOnpOEASIgjSY4gTRmr4R4NL5QYwf8XC8OY66N00fToKrR1k');



const Payment = () => {
    const { id } = useParams();
    const url = `https://mysterious-wildwood-08866.herokuapp.com/order/${id}`;

    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='flex flex-col items-center'>
            <div className=''>

                <div className="card w-50 max-w-md bg-base-300 shadow-xl my-12 ">
                    <div className="card-body ">
                        <h2 className="card-title text-primary">Hello, {order.userName}! </h2>
                        <h2 className="card-title">Please pay for {order.name}</h2>
                        <p>Order ID: {order._id}</p>
                        <p>Ordered Quantity: {order.orderQuantity}</p>
                        <p>Please Pay: TK {order.amount}</p>

                    </div>
                </div>
                <div className="card w-50 max-w-md  shadow-2xl bg-base-300">
                    <div className="card-body">
                        <Elements stripe={stripePromise}>
                            <CheckoutForm order={order} />
                        </Elements>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Payment;