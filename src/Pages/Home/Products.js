import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`https://mysterious-wildwood-08866.herokuapp.com/products`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <h2 className='text-4xl font-bold font-serif text-center mb-7'>Inventory</h2>
            <div className='grid gird-cols-1 lg:grid-cols-3 gap-4'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;