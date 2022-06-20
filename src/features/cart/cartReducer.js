import { createAction, createReducer } from '@reduxjs/toolkit'
import products from 'products.json'

const initialState = {
  products: products,
  cartItems: [],
  cartTotal: 0,
  cartDrawer: false,
}

const addToCart = createAction('cart/addToCart')
const clearCart = createAction('cart/clearCart')
const openCartDrawer = createAction('cart/openCartDrawer')

const counterReducer = createReducer(initialState, builder => {
  builder
    .addCase(addToCart, (state, action) => {
      let [id, title, price, quantity] = action.payload

      const checkSameIndex = state.cartItems.findIndex(item => item.id === id)

      if (checkSameIndex !== -1) {
        state.cartItems[checkSameIndex].quantity += quantity
        state.cartItems[checkSameIndex].price += price
      } else {
        state.cartItems.push({
          id,
          title,
          price,
          quantity,
        })
      }
      state.cartTotal += price
    })
    .addCase(clearCart, (state) => {
      state.cartItems = []
      state.cartTotal = 0
    })
    .addCase(openCartDrawer, (state, action) => {
      state.cartDrawer = action.payload
    })
})

export const selectCartTotal = state => state.cart.cartTotal
export const selectCartDrawer = state => state.cart.cartDrawer
export const selectCartItems = state => state.cart.cartItems
export const selectProducts = state => state.cart.products

export { addToCart, clearCart, openCartDrawer }

export default counterReducer
