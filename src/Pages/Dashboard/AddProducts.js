import React from 'react';
import { toast } from 'react-toastify';

const AddProducts = () => {



    const handleAddProduct = event => {
        event.preventDefault();
        const productData = {
            name: event.target.name.value,
            price: parseInt(event.target.price.value),
            availableQuantity: parseInt(event.target.availableQuantity.value),
            minimumOrderQuantity: parseInt(event.target.minimumOrderQuantity.value),
            img: event.target.img.value,
            description: event.target.description.value
        }
        fetch(`http://localhost:5000/products/`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success('Product has been added!')
                } else {
                    toast.error('Product could not be added. Please, try Again!')

                }
            })
    }
    return (
        <div>
            <h2 className='text-primary text-2xl my-5 text-center'>Add Products</h2>
            <div className='mx-10 my-10 flex justify-center'>
                <form onSubmit={handleAddProduct} class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-300">
                    <div class="card-body ">
                        <h2 className='text-center'> Product</h2>
                        <div class="form-control">

                            <input type="text" id='name' name='name' required placeholder='Product Name' class="input input-bordered" />
                        </div>
                        <div class="form-control">

                            <input type="number" name='price' required placeholder='Price' class="input input-bordered" />
                        </div>
                        <div class="form-control">

                            <input type="number" name='availableQuantity' required placeholder='Quantity' class="input input-bordered" />
                        </div>
                        <div class="form-control">

                            <input type="number" name='minimumOrderQuantity' required placeholder='Minimum Order Quantity' class="input input-bordered" />
                        </div>

                        <div class="form-control">

                            <input type="text" name='img' required placeholder="Image Link" class="input input-bordered" />

                        </div>
                        <div class="form-control">

                            <textarea type="text" name='description' required placeholder="write a brief description..." class="input input-bordered h-40" />

                        </div>

                        <div class="form-control mt-6">
                            <input type='submit' class="btn btn-primary" />
                        </div>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default AddProducts;