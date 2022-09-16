import React from 'react'

import './cart-dropdown.scss'

import Button from '../Button/button'

import { connect } from 'react-redux'

import CartItem from '../cart-item/cart-item'

import { selectCartItems } from '../../redux/cart/cart.selectors'

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

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown)