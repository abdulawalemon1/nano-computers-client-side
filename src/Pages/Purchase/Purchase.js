import React, { useEffect, useState, useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Purchase = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [user] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    useEffect(() => {
        fetch(`https://mysterious-wildwood-08866.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])



    const onSubmit = data => {
        const orderQuantity = parseInt(data.orderQuantity.value);
        console.log(orderQuantity);
        const order = {
            productId: id,
            name: product.name,
            orderQuantity: orderQuantity,
            amount: orderQuantity * product.price,
            userName: user.displayName,
            email: user.email,
            contact: data.contact,
            address: data.address,
            status: 'unpaid'
        }
        fetch(`https://mysterious-wildwood-08866.herokuapp.com/order/`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    return toast.success('Order has been placed. Please, pay soon!')
                } else {
                    return toast.error('You have already ordered this product. Please, pay soon and order again!')

                }
            })

    };


    return (
        <div className=''>
            <div className='my-5 mx-12'>
                <div className="card lg:card-side bg-base-300 shadow-xl">
                    <figure><img src={product.img} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl">{product.name}</h2>
                        <h2 className="card-title">Product ID: {product._id}</h2>
                        <h2 className="card-title">Price: {product.price}/Unit</h2>
                        <h2 className="card-title">Available Quantity: {product.availableQuantity}</h2>
                        <h2 className="card-title">Minimum Order Quantity: {product.minimumOrderQuantity}</h2>
                        <p>{product.description}</p>

                    </div>
                </div>
            </div>
            <div className='flex justify-center my-10'>
                <form onSubmit={handleSubmit(onSubmit)} className="card flex-shrink-0  w-full max-w-sm shadow-2xl bg-base-300">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                className="input input-bordered"
                                disabled
                                {...register("name", { value: user.displayName })} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered"
                                disabled
                                {...register("email", { value: user.email })}
                            />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Contact</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Your Contact Number"
                                className="input input-bordered"
                                {...register("contact", {
                                    required: {
                                        value: true,
                                        message: 'Contact is required'
                                    },
                                    pattern: {
                                        value: /[0-9]/,
                                        message: 'Please type a correct phone number'
                                    }
                                })}
                            />
                            <label className='label' >
                                {errors.contact?.type === 'required' && <span className="label-text-alt text-red-500">{errors.contact.message}</span>}
                                {errors.contact?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.contact.message}</span>}
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Address"
                                className="input input-bordered"
                                {...register("address", {
                                    required: {
                                        value: true,
                                        message: 'Address is required'
                                    }

                                })} />
                            <label className='label' >
                                {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}
                            </label>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Order Quantity</span>
                            </label>
                            <input
                                type="number"
                                name='orderQuantity'
                                placeholder="Your Order Quantity"
                                className="input input-bordered"
                                {...register("orderQuantity", {
                                    required: true,
                                    min: product.minimumOrderQuantity,
                                    max: product.availableQuantity,

                                })}
                                defaultValue={product.minimumOrderQuantity}
                            />
                            <label className='label'>
                                {errors.orderQuantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.orderQuantity.message}</span>}
                                {errors.orderQuantity?.type === 'min' && <span className="label-text-alt text-red-500">You cant order less than minimum order Quantity!</span>}
                                {errors.orderQuantity?.type === 'max' && <span className="label-text-alt text-red-500">Please, order below the available quantity!</span>}
                            </label>
                        </div>

                        {

                            errors.orderQuantity ?
                                <div className="form-control mt-6">
                                    <input disabled type='submit' value='Proceed Payment' className="btn btn-primary" />
                                </div>
                                :



                                <div className="form-control mt-6">
                                    <input type='submit' value='Proceed Payment' className="btn btn-primary" />
                                </div>
                        }


                    </div>
                </form>
            </div>
        </div>
    );
};

export default Purchase;