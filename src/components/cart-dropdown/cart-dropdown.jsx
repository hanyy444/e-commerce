import React from 'react'

import './cart-dropdown.scss'

import Button from '../Button/button'

import { connect } from 'react-redux'

const CartDropdown = ({ cartItems }) => {
  return (
    <div className='cart-dropdown'>
        <div className="cart-items">
            {cartItems.map( ({ name, quantity }) => <p>{name}, quantity: {quantity}</p>)}
        </div>
        <Button text="Go To Checkout."/>
    </div>
  )
}

const mapStateToProps = ({ cart: { cartItems }}) => ({
    cartItems
})

export default connect(mapStateToProps)(CartDropdown)