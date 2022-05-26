import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    console.log(user);
    const [userdata, setUserdata] = useState([]);


    useEffect(() => {
        fetch(`https://mysterious-wildwood-08866.herokuapp.com/user/${user.email}`)
            .then(res => res.json())
            .then(data => setUserdata(data))
    }, [user.email])

    return (
        <div className=''>
            <h2 className='text-center text-2xl text-primary'>My Profile</h2>
            <div className='grid sm:grid-cols-1 lg:grid-cols-2' >
                <div class="">
                    <div class="">
                        <img className='w-56 rounded-full ml-16 lg:ml-32' src={userdata.imglink ? userdata.imglink : user.photoURL} />

                    </div>
                    <Link to='editprofile' className='btn btn-primary ml-32 mt-5 lg:ml-44'>Edit Profile</Link>
                </div>
                <div className='mx-10'>
                    <h2 className='font-bold my-5 '>Full Name: <br /> {userdata.name} </h2>
                    <h2 className='font-bold my-5'>Email Address: <br /> {userdata.email}</h2>
                    <h2 className='font-bold my-5'>Education :<br /> {userdata.education}</h2>
                    <h2 className='font-bold my-5'>City: <br /> {userdata.city}</h2>
                    <h2 className='font-bold my-5'>Phone Nnumber: <br /> {userdata.phone}</h2>
                    <h2 className='font-bold my-5'>LinkedIn Profile Link: <br /> {userdata.link}</h2>

                </div>
            </div>
        </div>
    );
};

export default MyProfile;