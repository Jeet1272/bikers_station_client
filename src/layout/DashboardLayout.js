import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import Navbar from '../shared/Navbar/Navbar';

const DashboardLayout = () => {

    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">

                    <div className="w-full navbar bg-base-300">

                        <div className="flex-1 px-2 mx-2 text-3xl">Dashboard</div>
                        <div className="flex flex-col">

                            <ul className="menu menu-horizontal">
                                <li><Link to='/dashboard'>My Orders</Link></li>
                            </ul>

                            <ul className="menu menu-horizontal">
                                <li><Link to='/dashboard/addproducts'>Add A Product</Link></li>
                                <li><Link to='/dashboard/myproducts'>My Products</Link></li>
                            </ul>
                        </div>
                    </div>
                    <Outlet></Outlet>
                </div>
            </div>

        </div>
    );
};

export default DashboardLayout;