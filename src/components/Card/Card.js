import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart, openCartDrawer } from 'features/cart/cartReducer'
import 'components/Card/Card.scss'

function Card({ id, title, price }) {
  const [quantityToAdd, setQuantityToAdd] = useState(1)
  const dispatch = useDispatch()

  let handleUpdateQty = e => {
    setQuantityToAdd(e.target.value)
  }

  let handleIncrementQty = () => {
    setQuantityToAdd(quantityToAdd + 1)
  }

  let handleDecrementQty = () => {
    if (quantityToAdd > 1) {
      setQuantityToAdd(quantityToAdd - 1)
    }
  }

  let handleAddToCart = (itemId, itemTitle, itemPrice) => {
    const itemPriceTotal = itemPrice * quantityToAdd
    dispatch(
      addToCart([itemId, itemTitle, itemPriceTotal, Number(quantityToAdd)])
    )
    dispatch(openCartDrawer(true))
  }

  return (
    <div className='Card'>
      <div className='Card__inner'>
        <div className='Card__title Card__content'>{title}</div>
        <div className='Card__price Card__content'>${price}</div>
        <div className='Card__quantity Card__content'>
          <button
            type='button'
            className='Card__quantityAdjust'
            onClick={() => handleDecrementQty()}
          >
            -
          </button>
          <input
            className='Card__quantityInput'
            type='number'
            value={quantityToAdd}
            onChange={e => handleUpdateQty(e)}
          />
          <button
            type='button'
            className='Card__quantityAdjust'
            onClick={() => handleIncrementQty()}
          >
            +
          </button>
        </div>

        <div className='Card__buttonWrap'>
          <button
            className='Card__button button'
            aria-label='add to cart'
            onClick={() => handleAddToCart(id, title, price)}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
