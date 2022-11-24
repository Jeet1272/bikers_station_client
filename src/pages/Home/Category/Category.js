import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
    console.log(category)
    const { categorie, picture, details } = category

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{categorie}</h2>
                <p>{details}</p>
                <div className="card-actions justify-end">
                    <Link><button className="btn btn-primary btn-sm">View All</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Category;