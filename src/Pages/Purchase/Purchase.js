import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    return (
        <div>
            <div class="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src="https://api.lorem.space/image/album?w=400&h=400" alt="Album" /></figure>
                <div class="card-body">
                    <h2 class="card-title text-3xl">{product.name}</h2>
                    <h2 class="card-title">Product ID: {product._id}</h2>
                    <h2 class="card-title">Price: {product.price}/Unit</h2>
                    <h2 class="card-title">Available Quantity: {product.availableQuantity}</h2>
                    <h2 class="card-title">Minimum Order Quantity: {product.minimumOrderQuantity}</h2>
                    <p>{product.description}</p>

                </div>
            </div>
        </div>
    );
};

export default Purchase;