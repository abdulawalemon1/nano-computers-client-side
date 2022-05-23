import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const MyOrders = () => {

    const [orders, setOrders] = useState([]);
    const [item, setItem] = useState(null);
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?email=${user.email}`)
                .then(res => res.json())
                .then(data => setOrders(data))
        }
    }, [user, orders])


    const handleCancel = id => {

        fetch(`http://localhost:5000/order/${id}`, {
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
            <h2>My orders:{orders.length}</h2>
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
                                            <label for="cancel-modal" class="btn btn-primary'">Cancel</label>
                                            <div>
                                                <input type="checkbox" id="cancel-modal" class="modal-toggle" />
                                                <div class="modal">
                                                    <div class="modal-box relative">
                                                        <label for="cancel-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                                        <h3 class="text-lg font-bold">Are you sure you want to cancel the order?</h3>
                                                        <div class="modal-action">
                                                            <label onClick={() => handleCancel(order._id)} for="cancel-modal" class="btn">Confirm</label>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div >
                                        </td>

                                        {
                                            order.status === 'paid' || 'shipped' || 'pending' ?
                                                <td><button className='btn btn-primary'>Pay</button></td>

                                                :
                                                <td><button disabled className='btn btn-primary'>Pay</button></td>
                                        }
                                    </tr>
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