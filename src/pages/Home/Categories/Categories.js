import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://bikers-station-server.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])


    return (
        <div>
            <h2 className='text-4xl font-bold my-10 text-center'>Our Products Categories</h2>
            <div className='lg:flex gap-5 justify-around'>
                {
                    categories.map(category => <Category
                        key={category._id}
                        categoryDB={category}
                    >
                    </Category>)

                }
            </div>
        </div>
    );
};

export default Categories;