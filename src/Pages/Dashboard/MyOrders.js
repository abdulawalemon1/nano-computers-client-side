import { signOut } from 'firebase/auth';
import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
const MyOrders = () => {

    const [orders, setOrders] = useState([]);
    const [item, setItem] = useState(null);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`https://mysterious-wildwood-08866.herokuapp.com/order?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken')
                        navigate('/')
                    }
                    return res.json();
                })
                .then(data => {

                    setOrders(data)
                })
        }
    }, [user, orders])


    const handleCancel = id => {

        fetch(`https://mysterious-wildwood-08866.herokuapp.com/order/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining);

                }
            })


    }

    return (
        <div>
            <h2 className='mt-10 mb-5 text-center text-primary text-2xl'>My orders: {orders.length}</h2>
            <div class="overflow-x-auto">
                <table class="table table-zebra w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Amount in TK</th>
                            <th>Status</th>
                            <th>Action</th>
                            <th>Transaction ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) =>
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{order.name}</td>
                                    <td>{order.orderQuantity}</td>
                                    <td>{order.amount}</td>
                                    <td>{order.status}</td>
                                    <tr>
                                        <td>
                                            {
                                                order.status !== 'paid' ?

                                                    <label for="cancel-modal" class="btn btn-primary bg-primary">Cancel</label>

                                                    :
                                                    <label disabled for="cancel-modal" class="btn btn-primary bg-primary">Cancel</label>
                                            }                                            <div>
                                                <input type="checkbox" id="cancel-modal" class="modal-toggle" />
                                                <div class="modal">
                                                    <div class="modal-box relative">
                                                        <label for="cancel-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                                        <h3 class="text-lg font-bold">Are you sure you want to cancel the order?</h3>
                                                        <div class="modal-action">
                                                            <label onClick={() => handleCancel(order._id)} for="cancel-modal" class="btn btn-primary">Confirm</label>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div >
                                        </td>

                                        {
                                            order.status !== 'paid' ?
                                                <td><Link to={`/payment/${order._id}`} className='btn btn-primary'>Pay</Link></td>

                                                :
                                                <td><button disabled className='btn btn-primary'>Pay</button></td>
                                        }
                                    </tr>
                                    <td>{order?.transactionId || 'Not Available'}</td>

                                </tr>
                            )
                        }

                    </tbody>
                </table>


            </div>
        </div>
    );
};

export default MyOrders;