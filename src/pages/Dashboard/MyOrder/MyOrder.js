import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/UserContext';

const MyOrder = () => {
    const { user } = useContext(AuthContext)
    const [orders, setOrders] = useState([])



    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setOrders(data)
            })
    }, [user.email])

    return (
        <div>
            {orders.length}
        </div>
    );
};

export default MyOrder;