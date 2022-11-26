import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ categoryDB }) => {
    console.log(categoryDB)
    const { category, picture, details, category_id } = categoryDB

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{category}</h2>
                <p>{details}</p>
                <div className="card-actions justify-end">
                    <Link to={`/category/${category_id}`}>
                        <button className="btn btn-success btn-sm">View All</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Category;