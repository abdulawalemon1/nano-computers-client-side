import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);

    return (
        <div className=''>
            <h2 className='text-center text-2xl text-primary'>My Profile</h2>
            <div className='grid sm:grid-cols-1 lg:grid-cols-2' >
                <div class="">
                    <div class="">
                        <img className='w-56 rounded-full ml-16 lg:ml-32' src="https://api.lorem.space/image/face?hash=92310" />

                    </div>
                    <Link to='editprofile' className='btn btn-primary ml-32 mt-5 lg:ml-44'>Edit Profile</Link>
                </div>
                <div className='mx-10'>
                    <h2 className='font-bold my-5 '>Full Name: <br /> {user.displayName} </h2>
                    <h2 className='font-bold my-5'>Email Address: <br /> {user.email}</h2>
                    <h2 className='font-bold my-5'>Education :<br /> {user.email}</h2>
                    <h2 className='font-bold my-5'>City: <br /> {user.email}</h2>
                    <h2 className='font-bold my-5'>Phone Nnumber: <br /> {user.email}</h2>
                    <h2 className='font-bold my-5'>LinkedIn Profile Link: <br /> {user.email}</h2>

                </div>
            </div>
        </div>
    );
};

export default MyProfile;