import React from 'react'
import './header.scss'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/4.3 crown.svg.svg'
import {auth} from '../../firebase/firebase.setup'

import { connect } from 'react-redux'

const Header = ({ currentUser }) => {
     
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
            </div>
        </div>
    )
}

// state here is the top level root reducer
const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})


// connect to redux store
// 1st parameter is a function that allows access to the state
// this returns a callback with a higher order component wrapped around Header to give it access to the store
export default connect(mapStateToProps)(Header)