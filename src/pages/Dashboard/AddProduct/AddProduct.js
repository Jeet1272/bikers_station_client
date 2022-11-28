import React from 'react';

const AddProduct = () => {
    return (
        <div className='flex-col justify-center'>
            <h2 className='text-center text-4xl'>Add Your Products</h2>
            <form className='grid grid-col-1 gap-4 justify-center'>
                <input name="name" type="text" placeholder="Product name" className="input input-bordered input-primary w-96" />
                <input name="OriginalPrice" type="text" placeholder="Original price" className="input input-bordered input-primary w-96" />
                <input name="sellingPrice" type="text" placeholder="Asking price" className="input input-bordered input-primary w-96" />
                <input name="condition" type="text" placeholder="Bike Condition" className="input input-bordered input-primary w-96" />
                <input name="category" type="text" placeholder="1 for Honda, 2 for Yamaha, 3 for Suzuki" className="input input-bordered input-primary w-96" />
                <input name="usedFor" type="email" placeholder="Time of used" className="input input-bordered input-primary w-96" />
                <input name="phoneNumber" type="number" placeholder="Phone Number" className="input input-bordered input-primary w-96" />
                <input name="location" type="text" placeholder="Location" className="input input-bordered input-primary w-96" />
                <div>
                    <input type="submit" className="btn btn-success w-96" value="Submit" />
                </div>
            </form>
        </div>
    );
};

export default AddProduct;