import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        const userReview = {
            userName: user.displayName,
            email: user.email,
            rating: data.rating,
            review: data.review,

        }
        console.log(userReview);

        fetch(`http://localhost:5000/reviews/`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success('Review has been added. Please, check on the Homepage')
                } else {
                    toast.error('Review could not be added!')

                }
            })

    };


    return (
        <div>
            <h2 className='text-2xl text-center my-5 text-primary'>Please add a Review</h2>
            <div className='flex justify-center'>
                <form onSubmit={handleSubmit(onSubmit)} class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Rating</span>
                            </label>
                            <input className='input input-bordered' type="number" {...register("rating", { required: true, min: 1, max: 5 })} id="" />
                            {errors.rating?.type === 'required' && <p><span className='text-red-500'>Rating field is required!</span></p>}
                            {errors.rating?.type === 'min' && <p><span className='text-red-500'>Rate within a range of 1-5</span></p>}
                            {errors.rating?.type === 'max' && <p><span className='text-red-500'>Rate within a range of 1-5</span></p>}
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Review</span>
                            </label>
                            <textarea type="text" {...register("review", { required: true, maxLength: 250 })} placeholder="write a review..." class="input input-bordered h-32" />
                            {errors.review?.type === 'required' && <p><span className='text-red-500'>Rating field is required!</span></p>}

                        </div>
                        {

                            errors.rating ?
                                <div class="form-control mt-6">
                                    <input disabled type='submit' class="btn btn-primary" />
                                </div>

                                :
                                <div class="form-control mt-6">
                                    <input type='submit' class="btn btn-primary" />
                                </div>
                        }
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddReview;