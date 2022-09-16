import { createSelector } from "reselect";


// Input vs Output Selectors

// Memoized Selectors: instead of running/creating the function every render
// Because normally in react, when the state changes, the component re-renders
// So, every render a state in redux is replaced with a new object even if the object is the same (the state is the same, but with new object)
// PERFORMANCE ISSUE!
// To tackle it, memoized selectors are used to cache functions ()
// Logic: the component uses caching of selectors output value 
// If state properties and selectors output value hasnot changed, it returns the old value so the component doesn't re-render. 
// Pro: re-usable selector

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulated, cartItem) => cartItem.quantity + accumulated, 0)
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulated, cartItem) => accumulated + cartItem.quantity * cartItem.price, 0)
)