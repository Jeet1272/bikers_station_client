import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const Register = () => {
    const { createUser } = useContext(AuthContext)

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                toast.success('User created successfully')
                form.reset()
            })
            .catch(err => console.error(err))
    }

    return (
        <div className='m-20'>
            <h2 className='text-3xl ml-10'>Please Register</h2>
            <form onSubmit={handleRegister}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Your Name?</span>
                    </label>
                    <input type="text" placeholder="Type here" name="name" className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        <span className="label-text">Your Email</span>
                    </label>
                    <input type="email" placeholder="Type here" name="email" className="input input-bordered w-full max-w-xs" required />
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="Type here" name="password" className="input input-bordered w-full max-w-xs" required />
                    <label className="label">
                        <span className="label-text">Select One</span>
                    </label>
                    <select className="select select-bordered w-full max-w-xs">
                        <option disabled selected>User</option>
                        <option name='seller'>Seller</option>
                    </select>
                </div>
                <button type='submit' className="btn btn-success mt-4">Register</button>
            </form>
            <p className='mt-4'>Have an account? <Link to='/login' className='text-info font-bold'>Log In</Link></p>
        </div>
    );
};

export default Register;