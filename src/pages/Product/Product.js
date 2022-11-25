import React from 'react';

const Product = ({ product }) => {

    const { categorie, name, picture, details, _id } = product

    return (
        <div>
            <h2>{name}</h2>
        </div>
    );
};

export default Product;