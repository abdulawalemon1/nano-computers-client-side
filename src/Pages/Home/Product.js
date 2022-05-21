import React from 'react';

const Product = ({ product }) => {
    const { img, name, price, availableQuantity, minimumOrderQuantity, description } = product;

    return (
        <div class="card w-96 bg-violet-900	 shadow-xl mb-10">
            <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <h2 class="card-title">Price/Unit: {price}</h2>
                <h2 class="card-title">Available: {availableQuantity}</h2>
                <h2 class="card-title">Minimum Order Quantity: {minimumOrderQuantity}</h2>
                <p>{description}</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;