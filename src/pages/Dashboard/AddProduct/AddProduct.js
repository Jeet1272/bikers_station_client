import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/UserContext';

const AddProduct = () => {
    const { user } = useContext(AuthContext)

    const handleAddProduct = (event) => {
        event.preventDefault()
        const form = event.target
        const category = form.brand.value;
        const category_id = parseInt(form.category.value);
        const name = form.name.value;
        const resalePrice = parseInt(form.sellingPrice.value);
        const originalPrice = parseInt(form.originalPrice.value);
        const location = form.location.value;
        const condition = form.condition.value;
        const yearsOfUse = parseFloat(form.usedFor.value);
        const picture = form.picture.file;
        const email = form.email.value;

        const product = {
            category,
            category_id,
            name,
            picture,
            condition,
            location,
            resalePrice,
            originalPrice,
            yearsOfUse,
            email
        }

        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('Product added successfully')
                form.reset()
            })
    }

    return (
        <div className='flex-col justify-center'>
            <h2 className='text-center text-4xl'>Add Your Products</h2>
            <form onSubmit={handleAddProduct} className='lg:flex justify-evenly mt-5'>
                <div className='grid grid-col-2 gap-4'>
                    <input name="name" type="text" placeholder="Product name" className="input input-bordered input-primary w-96" />
                    <input name="originalPrice" type="number" placeholder="Original price" className="input input-bordered input-primary w-96" />
                    <input name="sellingPrice" type="number" placeholder="Asking price" className="input input-bordered input-primary w-96" />
                    <input name="condition" type="text" placeholder="Bike Condition" className="input input-bordered input-primary w-96" />
                    <select name='brand' className="select select-primary w-full">
                        <option disabled selected>Select Brand</option>
                        <option >Honda</option>
                        <option >Yamaha</option>
                        <option >Suzuki</option>
                    </select>
                    <select name='category' className="select select-primary w-full">
                        <option disabled selected>Select Category</option>
                        <option value='1'>Honda</option>
                        <option value='2'>Yamaha</option>
                        <option value='3'>Suzuki</option>
                    </select>
                </div>
                <div className='grid grid-col-2 gap-4'>
                    <input name="usedFor" type="text" placeholder="Year of used" className="input input-bordered input-primary w-96" />
                    <input name="phoneNumber" type="number" placeholder="Phone Number" className="input input-bordered input-primary w-96" />
                    <input name="location" type="text" placeholder="Location" className="input input-bordered input-primary w-96" />
                    <input name="email" type="email" defaultValue={user.email} className="input input-bordered input-primary w-96" />
                    <input name="picture" type="file" placeholder="Picture" className="input input-bordered input-primary w-96" />
                    <div>
                        <input type="submit" className="btn btn-success w-96" value="Submit" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;