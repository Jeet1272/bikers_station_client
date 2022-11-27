import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/UserContext';

const BookingModal = ({ bike }) => {
    const { user } = useContext(AuthContext)
    console.log(user)
    const { displayName, email } = user
    const { name, resalePrice, category } = bike

    const handleBookingSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const itemName = form.name.value;
        const price = form.price.value;
        const clientName = form.displayName.value;
        const email = form.email.value;
        const phone = form.phoneNumber.value;
        const address = form.address.value;

        const booking = {
            itemName,
            price,
            name: clientName,
            email,
            number: phone,
            location: address
        }
        console.log(booking)
        toast.success('Your Booking is confirmed')
    }


    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative bg-white">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-3">{category}</h3>
                    <form onSubmit={handleBookingSubmit} className='grid grid-col-1 gap-4'>
                        <input name="name" type="text" value={name} readOnly className="input input-bordered input-primary w-full" />
                        <input name="price" type="text" value={resalePrice} readOnly className="input input-bordered input-primary w-full" />
                        <input name="displayName" type="text" value={displayName} readOnly className="input input-bordered input-primary w-full" />
                        <input name="email" type="email" value={email} readOnly className="input input-bordered input-primary w-full" />
                        <input name="phoneNumber" type="number" placeholder="Phone Number" className="input input-bordered input-primary w-full" />
                        <input name="address" type="text" placeholder="Meetup Address" className="input input-bordered input-primary w-full" />
                        <div className="modal-action">
                            <input type="submit" className="btn btn-success w-full" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;