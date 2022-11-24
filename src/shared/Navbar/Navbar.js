import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-base-200 px-10 py-5">
            <div className="w-12 pt-1 -mr-3">
                <img className='rounded-full' src="https://graphiccloud.net/wp-content/uploads/2019/05/Bicycle-Logo-Design-Example-1200x675.png" alt='' />
            </div>
            <div className="flex-1">
                <Link className="btn btn-ghost normal-case text-5xl">Bikers Station</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to=''>Item 1</Link></li>
                    <li><Link to=''>Item 1</Link></li>
                    <li><Link to=''>Item 1</Link></li>
                    <li><Link to=''>Item 1</Link></li>

                </ul>
            </div>
        </div>
    );
};

export default Navbar;