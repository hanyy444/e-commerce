import React from 'react'

import './cart-dropdown.scss'

import Button from '../Button/button'

import { connect } from 'react-redux'

import CartItem from '../cart-item/cart-item'

const CartDropdown = ({ cartItems }) => {
  return (
    <div className='cart-dropdown'>
        <div className="cart-items">
            {cartItems.map( item => <CartItem key={item.id} item={item} />)}
        </div>
        <Button text="Go To Checkout."/>
    </div>
  )
}

const mapStateToProps = ({ cart: { cartItems }}) => ({
    cartItems
})

export default connect(mapStateToProps)(CartDropdown)