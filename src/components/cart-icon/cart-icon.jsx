import React from 'react'

import { ReactComponent as ShoppingIcon } from '../../assets/11.2 shopping-bag.svg.svg'

import './cart-icon.scss';

import {connect} from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartIcon = ({ toggleCartHidden }) => {
  return (
    <div className='cart-icon'>
        <ShoppingIcon className='shopping-icon' onClick={toggleCartHidden}/>
        <span className='item-count'>0</span>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
}) 

export default connect(null, mapDispatchToProps)(CartIcon);