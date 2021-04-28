import React from 'react';

const SingleReview = ({ review }) => {
    return (
        <div className="col-md-4 text-center mb-5">
            <div className="card" style={{ width: '18rem' }}>
                <img style={{ height: '225px' }} src={review.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">  {review.name}</h5>
                    <p className="card-text">{review.description}</p>

                </div>
            </div>


        </div>
    );
};

export default SingleReview;