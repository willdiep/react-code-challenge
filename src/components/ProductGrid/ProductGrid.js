import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import Card from 'components/Card/Card'
import {
  clearCart,
  selectProducts,
  openCartDrawer,
} from 'features/cart/cartReducer'
import 'components/ProductGrid/ProductGrid.scss'

function ProductGrid() {
  const allProducts = useSelector(selectProducts)
  const dispatch = useDispatch()

  let handleClearCart = () => {
    dispatch(clearCart())
    dispatch(openCartDrawer(true))
  }

  return (
    <section className='ProductGrid'>
      <div className='ProductGrid__inner'>
        <div className='ProductGrid__list'>
          {allProducts.map(product => {
            return <Card key={product.id} {...product} />
          })}
        </div>

        <div className='ProductGrid__clearCartWrap'>
          <button
            className='ProductGrid__clearCartBtn button'
            onClick={() => handleClearCart()}
          >
            CLEAR CART
          </button>
        </div>
      </div>
    </section>
  )
}

export default ProductGrid
