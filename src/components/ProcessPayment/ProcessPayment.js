import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
// import {CardElement} from '@stripe/react-stripe-js';
import SimpleCardForm from './SimpleCardForm';

const stripePromise = loadStripe('pk_test_51IfAW0IANefXrVM9ZEYa1YOcWqdibxW0ZU3wqiJKC1uyNshxnZRa7rKexvPFsym0BEmi405QquVwmF8c17x7M0uD00xTNLbe6M');


const ProcessPayment = () => {
    return (
        <div>
            <Elements stripe={stripePromise}>
                   <SimpleCardForm/>
            </Elements>
        </div>
    );
};

export default ProcessPayment;