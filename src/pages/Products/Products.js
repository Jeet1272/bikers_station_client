import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';

const Products = () => {
    const products = useLoaderData()
    console.log(products)
    return (
        <div>
            <h2 className='text-center text-4xl'>Total products found: <span className='font-bold'>{products.length}</span></h2>
            {
                products.map(product => <Product key={product._id} product={product}></Product>)
            }
        </div>
    );
};

export default Products;