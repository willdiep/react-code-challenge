import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CartDrawer from 'components/CartDrawer/CartDrawer'
import ProductGrid from 'components/ProductGrid/ProductGrid'
import { openCartDrawer, selectCartDrawer } from 'features/cart/cartReducer'
import './App.scss'

function App() {
  const cartDrawerState = useSelector(selectCartDrawer)
  const dispatch = useDispatch()

  return (
    <main className='App MainPage'>
      <div className='MainPage__inner'>
        <CartDrawer cartDrawerState={cartDrawerState} />
        <button
          className={`CartDrawer__backdrop ${
            cartDrawerState === true ? 'open' : ''
          }`}
          onClick={() => dispatch(openCartDrawer(false))}
        ></button>

        <ProductGrid />
      </div>
    </main>
  )
}

export default App
