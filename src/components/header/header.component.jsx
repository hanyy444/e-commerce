// React
import React from 'react'

// Styled Components
import {
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionLink,
    OptionButton
} from './header.styles'

// Redux
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'

// Images(svg, png, ..) & ICONS
import { ReactComponent as Logo } from '../../assets/4.3 crown.svg.svg'
import CartIcon from '../cart-icon/cart-icon'

// Firebase: Auth
import {auth} from '../../firebase/firebase.setup'

// Components
import CartDropdown from '../cart-dropdown/cart-dropdown'

// Redux - Actions
import { signOutStart } from '../../redux/user/user.actions'


const Header = ({ currentUser, hiddenCart, signOutStart }) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className='logo'/>
        </LogoContainer>
        <OptionsContainer className="options">
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            {/* <OptionLink to='/shop'>
                CONTACT
            </OptionLink> */}
            {
                currentUser ? 
                <OptionButton onClick={signOutStart}>SIGN OUT</OptionButton> 
                : 
                <OptionLink to='/sign-in'>SIGN IN</OptionLink>
            }
            <CartIcon />
        </OptionsContainer>
        {!hiddenCart && <CartDropdown />}
    </HeaderContainer>
)


// state here is the top level root reducer
// - bad pattern
// const mapStateToProps = state => ({
//     currentUser: selectCurrentUser(state),
//     hiddenCart: selectCartHidden(state)
// })
// - better pattern
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hiddenCart: selectCartHidden
})

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})


// connect to redux store
// 1st parameter is a function that allows access to the state
// this returns a callback with a higher order component wrapped around Header to give it access to the store
export default connect(mapStateToProps, mapDispatchToProps)(Header)