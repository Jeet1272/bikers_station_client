import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='flex justify-center mt-12'>
            <div className='mt-12'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIWFkIc1JjdgDOCYS-P2Ji5JfdroxW7XfTig&usqp=CAU" alt="" />
                <p className='mt-12 '>Here is the way of Home page. <Link to='/' className='text-info'>Home</Link></p>
            </div>
        </div>
    );
};

export default NotFound;