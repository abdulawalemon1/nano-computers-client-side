import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useUserdata from '../../Hooks/useUserdata';

const EditProfile = () => {
    const [user] = useAuthState(auth);
    const [userdata] = useUserdata();



    const handleUpdateProfile = event => {
        event.preventDefault();
        const phone = parseInt(event.target.phone.value)
        const userData = {
            name: event.target.name.value,
            email: user.email,
            education: event.target.education.value,
            city: event.target.city.value,
            phone: phone,
            link: event.target.link.value,
            imglink: event.target.imglink.value
        }
        fetch(`https://mysterious-wildwood-08866.herokuapp.com/user/${user.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success('Profile has been updated!')
                } else {
                    toast.error('Profile could not be updated Try Again!')

                }
            })
    }
    return (
        <div>
            <div className=''>
                <h2 className='text-center text-2xl text-primary'>My Profile</h2>
                <div className='grid sm:grid-cols-1 lg:grid-cols-2' >

                    <div class="">
                        <img className='w-56 rounded-full ml-16 lg:ml-32' src={userdata.imglink ? userdata.imglink : "https://api.lorem.space/image/face?hash=92310"} alt='blank' />

                    </div>
                    <div className='mx-10'>
                        <form onSubmit={handleUpdateProfile} class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-300">
                            <div class="card-body ">
                                <h2 className='text-center'>Edit Profile</h2>
                                <div class="form-control">

                                    <input type="text" id='name' name='name' placeholder='Name' class="input input-bordered" />
                                </div>
                                <div class="form-control">

                                    <input type="email" name='email' disabled value={user.email} class="input input-bordered" />
                                </div>
                                <div class="form-control">

                                    <input type="text" name='education' required placeholder="Education" class="input input-bordered" />

                                </div>
                                <div class="form-control">

                                    <input type="text" name='city' required placeholder="City" class="input input-bordered" />

                                </div>
                                <div class="form-control">

                                    <input type="number" name='phone' required placeholder="Phone" class="input input-bordered" />

                                </div>
                                <div class="form-control">

                                    <input type="text" name='link' required placeholder="LinkedIn Profile Link" class="input input-bordered" />

                                </div>
                                <div class="form-control">

                                    <input type="text" name='imglink' required placeholder="User Picture Link" class="input input-bordered" />

                                </div>
                                <div class="form-control mt-6">
                                    <input type='submit' class="btn btn-primary" />
                                </div>
                            </div>
                        </form>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default EditProfile;