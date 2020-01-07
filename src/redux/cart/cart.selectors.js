import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const  selectCartItems = createSelector(
  [selectCart], 
  cart => cart.cartItems
)

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden 
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((accumaltedQuantity, {quantity})=> accumaltedQuantity + quantity, 0)
)

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((accumaltedTotal, {quantity, price})=> accumaltedTotal + quantity * price, 0)
)