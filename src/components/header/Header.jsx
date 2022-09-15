import React from 'react'
import './header.scss'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/4.3 crown.svg.svg'
import CartIcon from '../cart-icon/cart-icon'
import {auth} from '../../firebase/firebase.setup'
import { connect } from 'react-redux'
import CartDropdown from '../cart-dropdown/cart-dropdown'

const Header = ({ currentUser, hiddenCart }) => {
     
    return (
        <div className='header'>
            <Link to='/' className='logo-container'>
                <Logo className='logo'/>
            </Link>
            <div className="options">
                <Link className="option" to='/shop'>
                    SHOP
                </Link>
                <Link className="option" to='/shop'>
                    CONTACT
                </Link>
                {
                    currentUser ? 
                    <button className="option" onClick={() => auth.signOut()}>SIGN OUT</button> 
                    : 
                    <Link className='option' to='/sign-in'>SIGN IN</Link>
                }
                <CartIcon />
            </div>
            {!hiddenCart && <CartDropdown />}
        </div>
    )
}

// state here is the top level root reducer
// state destructre
const mapStateToProps = ({ user: { currentUser }, cart: { hidden }}) => ({
    currentUser,
    hiddenCart: hidden
})


// connect to redux store
// 1st parameter is a function that allows access to the state
// this returns a callback with a higher order component wrapped around Header to give it access to the store
export default connect(mapStateToProps)(Header)