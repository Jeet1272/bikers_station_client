import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const LogIn = () => {
    const { userSignIn } = useContext(AuthContext)

    const handleLogIn = (event) => {
        event.preventDefault();
        const form = event.target
        const email = form.email.value;
        const password = form.password.value;

        userSignIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset()
            })
            .catch(err => console.error(err))

    }

    return (
        <div className='m-20'>
            <h2 className='text-3xl ml-10'>Please Log In</h2>
            <form onSubmit={handleLogIn}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Your Email</span>
                    </label>
                    <input type="email" placeholder="Type here" name="email" className="input input-bordered w-full max-w-xs" required />
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="Type here" name="password" className="input input-bordered w-full max-w-xs" required />
                </div>
                <button type='submit' className="btn btn-success mt-4">Log In</button>
            </form>
            <p className='mt-4'>New in Bikers Station? Please do <Link to='/register' className='text-info font-bold'>Register</Link></p>
        </div>
    );
};

export default LogIn;