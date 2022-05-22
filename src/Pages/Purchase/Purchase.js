import { async } from '@firebase/util';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const Purchase = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [user] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();


    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])



    const onSubmit = data => {
        console.log(data);
        const orderQuantity = parseInt(data.orderQuantity);
        const order = {
            _id: id,
            name: product.name,
            orderQuantity: orderQuantity,
            amount: orderQuantity * product.price,
            userName: user.displayName,
            email: user.email,
            contact: data.contact,
            address: data.address
        }

        fetch(``)
        console.log(order);

    };


    return (
        <div className=''>
            <div className='my-5 mx-12'>
                <div class="card lg:card-side bg-base-300 shadow-xl">
                    <figure><img src="https://api.lorem.space/image/album?w=400&h=400" alt="Album" /></figure>
                    <div class="card-body">
                        <h2 class="card-title text-3xl">{product.name}</h2>
                        <h2 class="card-title">Product ID: {product._id}</h2>
                        <h2 class="card-title">Price: {product.price}/Unit</h2>
                        <h2 class="card-title">Available Quantity: {product.availableQuantity}</h2>
                        <h2 class="card-title">Minimum Order Quantity: {product.minimumOrderQuantity}</h2>
                        <p>{product.description}</p>

                    </div>
                </div>
            </div>
            <div className='flex justify-center my-10'>
                <form onSubmit={handleSubmit(onSubmit)} class="card flex-shrink-0  w-full max-w-sm shadow-2xl bg-base-300">
                    <div class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                class="input input-bordered"
                                // defaultValue={user.displayName}
                                disabled
                                {...register("name", { value: user.displayName })} />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                class="input input-bordered"
                                disabled
                                // defaultValue={user.email}
                                {...register("email", { value: user.email })}
                            />

                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Contact</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Your Contact Number"
                                class="input input-bordered"
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
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Address</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Address"
                                class="input input-bordered"
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

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Order Quantity</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Your Order Quantity"
                                class="input input-bordered"
                                {...register("orderQuantity", {
                                    required: true,
                                    min: product.minimumOrderQuantity,
                                    max: product.availableQuantity

                                })}
                                defaultValue={product.minimumOrderQuantity} />
                            <label className='label'>
                                {errors.orderQuantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.orderQuantity.message}</span>}
                                {errors.orderQuantity?.type === 'min' && <span className="label-text-alt text-red-500">You cant order less than minimum order Quantity!</span>}
                                {errors.orderQuantity?.type === 'max' && <span className="label-text-alt text-red-500">Please, order below the available quantity!</span>}
                            </label>
                        </div>

                        {

                            errors.orderQuantity ?
                                <div class="form-control mt-6">
                                    <input disabled type='submit' value='Proceed Payment' class="btn btn-primary" />
                                </div>

                                :
                                <div class="form-control mt-6">
                                    <input type='submit' value='Proceed Payment' class="btn btn-primary" />
                                </div>
                        }


                    </div>
                </form>
            </div>
        </div>
    );
};

export default Purchase;