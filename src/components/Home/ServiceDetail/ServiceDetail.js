import React from 'react';
import { useHistory } from 'react-router';

const ServiceDetail = ({ service }) => {
    const { _id } = service;
    console.log(_id);
    const history = useHistory();
    const showCheckout = (_id) => {
        const url = `/checkout/${_id}`
        history.push(url);
    };
    return (
        <div className="col-md-4 text-center mb-5">
            <div className="card" style={{ width: '18rem' }}>
                <img style={{ height: '225px' }} src={service.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">  {service.name}</h5>
                    <h5 className="card-title"> Price: {service.price}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button onClick={() => showCheckout(_id)} type="button" class="btn btn-outline-warning">Buy Now</button>
                </div>
            </div>

        </div>
    );
};

export default ServiceDetail;