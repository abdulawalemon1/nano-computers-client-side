import React from 'react';
import contactUs from '../../assets/images/contactus.jpg';
const ContactUs = () => {
    return (
        <div className='my-10'>
            <h2 className='text-4xl font-bold text-center mb-5'>Contact Us</h2>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center lg:text-left">
                        <img src={contactUs} class="lg:max-w-xl rounded-lg shadow-2xl" alt='blank' />

                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Feedback</span>
                                </label>
                                <textarea type="text" placeholder="write to us..." class="input input-bordered h-40" />

                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;