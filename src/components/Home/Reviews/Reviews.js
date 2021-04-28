import React, { useEffect, useState } from 'react';
import SingleReview from '../SingleReview/SingleReview';

const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://protected-peak-79922.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [])
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h5 style={{ color: '#1CC7C1' }}>Reviews</h5>
                <h2>Reviews From Our beloved Customers</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">
                    {
                        reviews.map(review => <SingleReview review={review} key={review.name}></SingleReview>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Reviews;