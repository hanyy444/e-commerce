import React from 'react';
import './stripe-button.scss'

import StripeCheckout from 'react-stripe-checkout'

const StripeButton = ({ price }) => {
    
    // price in cents!
    const priceForStripe = price * 100;
    console.log(priceForStripe)
    const pub_key = "pk_test_51KmuHjIKpNmRGU1iISg81kTHH5yAXoApOHj10nLT3dBr7kshaWTfUometC51PfYPALhRhUveLyyUpzNAB1uJKKOA005goim7n0"


    const onToken = token => {
        console.log(token);
        alert('Payment successful.')
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
            token={onToken}
            stripeKey={pub_key}
        />
    )
}

export default StripeButton;

