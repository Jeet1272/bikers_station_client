import React from 'react';


const Product = ({ product, setBike }) => {

    const { category, name, picture, condition, _id, location, resalePrice, originalPrice, yearsOfUse, postTime, sellerName } = product

    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl my-8">
                <figure className='w-1/2'><img className='w-96' src="https://placeimg.com/400/400/arch" alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title"><span className='text-white'>Brand:</span> {category}</h2>
                    <h2 className="card-title"><span className='text-white'>Name:</span> {name}</h2>
                    <p><span className='text-white'>Asking Price:</span> {resalePrice} BDT</p>
                    <p><span className='text-white'>Original Price:</span> {originalPrice} BDT</p>
                    <p><span className='text-white'>Years of use:</span> {yearsOfUse}</p>
                    <p><span className='text-white'>Condition:</span> {condition}</p>
                    <p><span className='text-white'>Location:</span> {location}</p>
                    <p><span className='text-white'>Post Time:</span> {postTime}</p>
                    <p><span className='text-white'>Seller:</span> {sellerName}</p>
                    <div className="card-actions justify-end">
                        <label onClick={() => setBike(product)} htmlFor="booking-modal" className="btn btn-success">Book Now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;