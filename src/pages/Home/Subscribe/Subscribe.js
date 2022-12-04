import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/UserContext';

const Subscribe = () => {
    const { user } = useContext(AuthContext)

    const handleSubscribe = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const name = user.displayName;
        const subscriber = { name, email };
        console.log(subscriber)

        fetch('http://localhost:5000/subscribers', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(subscriber)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('Thanks for subscription')
                form.reset()
            })

    }

    return (
        <div className='bg-secondary-content py-10'>
            <h2 className='text-center text-blue-600 text-4xl py-5'>Discover the latest news, offers and exclusive promotions with our e-newsletter</h2>
            <form onSubmit={handleSubscribe} className='text-center mt-5'>
                <input type="email" placeholder="Email Please" name="email" className="input input-bordered w-full max-w-xs" required />
                <button type='submit' className="btn btn-success mt-5 ml-5">Subscribe</button>
            </form>
        </div>
    );
};

export default Subscribe;