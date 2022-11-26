import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';
import BookingModal from './BookingModal';

const Products = () => {
    const products = useLoaderData()
    const [bike, setBike] = useState({})
    return (
        <div>
            <h2 className='text-center text-4xl'>Total products found: <span className='font-bold'>{products.length}</span></h2>
            <div>
                {
                    products.map(product => <Product
                        key={product._id} product={product} setBike={setBike}
                    ></Product>)
                }
            </div>
            <BookingModal bike={bike}></BookingModal>
        </div>
    );
};

export default Products;