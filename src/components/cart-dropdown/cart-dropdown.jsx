import React from 'react'

import './cart-dropdown.scss'

import Button from '../Button/button'

import { useNavigate } from 'react-router-dom'

import { connect } from 'react-redux'

import CartItem from '../cart-item/cart-item'

import { selectCartItems } from '../../redux/cart/cart.selectors'

import { createStructuredSelector } from 'reselect'

import { toggleCartHidden } from '../../redux/cart/cart.actions'


const CartDropdown = ({ cartItems, dispatch }) => {
  const navigate = useNavigate();
  return (
    <div className='cart-dropdown'>
        <div className="cart-items">
          {cartItems.length ? ( 
            cartItems.map( item => <CartItem key={item.id} item={item} />)
          ) : (
            <span className="empty-message">Your cart is empty</span>
          )}
        </div>
        <Button text="Go To Checkout." 
          onClick={() => { 
            navigate('/checkout')
            dispatch(toggleCartHidden())
          }}/>
    </div>
  )
}

// const mapStateToProps = state => ({
//     cartItems: selectCartItems(state)
// })

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})



export default connect(mapStateToProps)(CartDropdown)