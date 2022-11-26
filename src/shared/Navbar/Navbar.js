import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                console.error(error)
            });
    }

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
                    <li><Link to=''>Home</Link></li>
                    <li><Link to=''>Dashboard</Link></li>
                    {
                        user?.uid ?
                            <li><Link onClick={handleLogOut} to='/login'>Log Out</Link></li>
                            :
                            <>
                                <li><Link to='/register'>Register</Link></li>
                                <li><Link to='/login'>Log In</Link></li>
                            </>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;