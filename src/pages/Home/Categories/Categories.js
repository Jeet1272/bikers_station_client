import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    console.log(categories)

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])


    return (
        <div>
            <h2 className='text-4xl font-bold my-10'>Our Products Categories</h2>
            <div className='lg:flex gap-5 justify-around'>
                {
                    categories.map(category => <Category
                        key={category._id}
                        category={category}
                    >
                    </Category>)

                }
            </div>
        </div>
    );
};

export default Categories;