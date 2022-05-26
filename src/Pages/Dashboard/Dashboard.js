import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../Hooks/useAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="dashboard-side-bar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <h2 className='text-3xl text-center text-primary font-bold'>Welcome to Dashboard</h2>
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label for="dashboard-side-bar" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-300 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        {
                            !admin && <li className='bg-primary my-2 rounded-lg text-white font-bold '><Link to="/dashboard">My Orders</Link></li>
                        }
                        {
                            !admin && <li className='bg-primary my-2 rounded-lg text-white font-bold'><Link to="/dashboard/review">My Review</Link></li>
                        }                        <li className='bg-primary my-2 rounded-lg text-white font-bold'><Link to="/dashboard/profile">My Profile</Link></li>
                        {
                            admin && <li className='bg-primary my-2 rounded-lg text-white font-bold'><Link to="/dashboard/users">All Users</Link></li>
                        }
                        {
                            admin && <li className='bg-primary my-2 rounded-lg text-white font-bold'><Link to="/dashboard/manageorders">Manage Orders</Link></li>
                        }
                        {
                            admin && <li className='bg-primary my-2 rounded-lg text-white font-bold'><Link to="/dashboard/manageproducts">Manage Products</Link></li>
                        }
                        {
                            admin && <li className='bg-primary my-2 rounded-lg text-white font-bold'><Link to="/dashboard/addproducts">Add Products</Link></li>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;