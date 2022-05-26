import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, img, name, price, availableQuantity, minimumOrderQuantity, description } = product;
    const navigate = useNavigate();
    const navigateToPurchase = id => {
        navigate(`/products/${id}`);
    }
    return (
        <div className="card lg:w-max-lg bg-violet-900	 shadow-xl mb-10">
            <figure><img className='w-full h-56' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h2 className="card-title">Price/Unit: {price}</h2>
                <h2 className="card-title">Available: {availableQuantity}</h2>
                <h2 className="card-title">Minimum Order Quantity: {minimumOrderQuantity}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => navigateToPurchase(_id)} className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;