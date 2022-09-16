import React from 'react'

import { ReactComponent as ShoppingIcon } from '../../assets/11.2 shopping-bag.svg.svg'

import './cart-icon.scss';

import {connect} from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className='cart-icon'>
        <ShoppingIcon className='shopping-icon' onClick={toggleCartHidden}/>
        <span className='item-count'>{itemCount}</span>
    </div>
  )
}

// const mapStateToProps = state => ({
//     itemCount: selectCartItemsCount(state)
// })

// Normally ite creates a new object making a new state which causes a Re-render
// Performance issue: re-render everytime even cardItems is not changed
// Solution: Memoization using reselect
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
}) 

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);