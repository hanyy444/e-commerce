import React from 'react';
import './stripe-button.scss'
import axios from 'axios';

import StripeCheckout from 'react-stripe-checkout'

const StripeButton = ({ price }) => {
    
    // price in cents!
    const priceForStripe = price * 100;
    const pub_key = "pk_test_51KmuHjIKpNmRGU1iISg81kTHH5yAXoApOHj10nLT3dBr7kshaWTfUometC51PfYPALhRhUveLyyUpzNAB1uJKKOA005goim7n0"


    const onToken = token => {
        alert('Payment successful.');
        // axios({
        //     url: 'payment',
        //     method: 'post',
        //     data: {
        //         amount: priceForStripe,
        //         token
        //     }
        // }).then(response => {
        //     alert('Payment successful.');
        // }).catch(error => {
        //     console.log('Payment error: ', JSON.parse(error));
        //     alert('Payment issue.')
        // })
    }

    return ( 
        <StripeCheckout 
            label = 'Pay Now'
            name = 'E-commerce Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            // token={onToken}
            stripeKey={pub_key}
        />
    )
}

export default StripeButton;

