import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import greyStar from '../../assets/images/greyStar.png';
import yellowStar from '../../assets/images/yellowStar.png';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`https://mysterious-wildwood-08866.herokuapp.com/reviews`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='mb-10'>
            <h2 className='text-4xl text-primary fond-bold my-10'>What our clients say...</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>

                {
                    reviews.map((review, index) =>
                        <div key={index + 1}>
                            <div class="card h-52 lg:max-w-lg bg-purple-400	 text-black shadow-2xl">
                                <div class="card-body">
                                    <h2 class="card-title">{review.userName}</h2>
                                    <Rating
                                        className=''
                                        emptySymbol={<img src={greyStar} className="icon w-5" />}
                                        fullSymbol={<img src={yellowStar} className="icon w-5" />}
                                        placeholderSymbol={<img src={yellowStar} className="icon w-5" />}
                                        placeholderRating={review.rating}
                                        readonly
                                    />
                                    <p>{review.review}</p>

                                </div>
                            </div>
                        </div>


                    )
                }

            </div>


        </div>
    );

};

export default Reviews;