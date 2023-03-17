import React from 'react'
import './checkout.scss';

// connect to store
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item';
import StripeButton from '../../components/stripe-button/stripe-button';

const Checkout = ({ cartItems, totalValue}) => {
  return (
    <div className='checkout'>
        <div className="header">
            <div className="block">
                <span>Product</span>
            </div>
            <div className="block">
                <span>Description</span>
            </div>
            <div className="block">
                <span>Quantity</span>
            </div>
            <div className="block">
                <span>Price</span>
            </div>
            <div className="block">
                <span>Remove</span>
            </div>
        </div>
        {cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem}/>)}
        <div className="total">
            <span>TOTAL: ${totalValue}</span>
        </div>
        <div className="test-warning">
            * Please use the following test credit card for payments *
            <br />
            4242 4242 4242 4242 - Exp: 05/25 - CVV: 123
        </div>
        <StripeButton price={totalValue}/>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalValue: selectCartTotal
})

export default connect(mapStateToProps)(Checkout);