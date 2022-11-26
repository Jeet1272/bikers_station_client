import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const LogIn = () => {
    const { userSignIn, googleSignIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const googleProvider = new GoogleAuthProvider();

    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

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
                navigate(from, { replace: true })
            })
            .catch(err => console.error(err))
    }

    const handleGoogleSignIn = () => {
        googleSignIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true })
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
            <p className='mt-1'>New in Bikers Station? Please do <Link to='/register' className='text-info font-bold'>Register</Link></p>
            <h3 className='ml-12 mt-7 text-info'>Log In with Google</h3>
            <button onClick={handleGoogleSignIn} className="btn btn-wide btn-success mt-4"><Link>Google</Link></button>
        </div>
    );
};

export default LogIn;