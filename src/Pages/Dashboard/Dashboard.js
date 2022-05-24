import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="dashboard-side-bar" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content ">
                    <h2 className='text-3xl text-center text-primary font-bold'>Welcome to Dashboard</h2>
                    <Outlet></Outlet>

                </div>
                <div class="drawer-side">
                    <label for="dashboard-side-bar" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-300 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li className='bg-primary my-2 rounded-lg text-base-100'><Link to="/dashboard">My Orders</Link></li>
                        <li className='bg-primary my-2 rounded-lg text-base-100'><Link to="/dashboard/review">My Review</Link></li>
                        <li className='bg-primary my-2 rounded-lg text-base-100'><Link to="/dashboard/profile">My Profile</Link></li>
                        <li className='bg-primary my-2 rounded-lg text-base-100'><Link to="/dashboard/users">All Users</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;