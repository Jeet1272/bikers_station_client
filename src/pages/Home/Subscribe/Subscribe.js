import React from 'react';

const Subscribe = () => {
    return (
        <div className='bg-secondary-content py-10'>
            <h2 className='text-center text-blue-600 text-4xl py-5'>Discover the latest news, offers and exclusive promotions with our e-newsletter</h2>
            <div className='text-center mt-5'>
                <input type="email" placeholder="Email Please" name="email" className="input input-bordered w-full max-w-xs" required />
                <button type='submit' className="btn btn-success mt-5 ml-5">Subscribe</button>
            </div>
        </div>
    );
};

export default Subscribe;