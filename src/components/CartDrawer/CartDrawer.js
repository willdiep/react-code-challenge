import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { openCartDrawer } from 'features/cart/cartReducer'
import { selectCartItems, selectCartTotal } from 'features/cart/cartReducer'
import 'components/CartDrawer/CardDrawer.scss'
import { v4 as uuidv4 } from 'uuid'

function CartDrawer({ cartDrawerState }) {
  const cartItems = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)
  const dispatch = useDispatch()

  let renderEmptyCart = () => {
    if (cartItems.length === 0) {
      return (
        <div>
          <p>Your cart is currently empty</p>
        </div>
      )
    }
  }
  return (
    <>
      <aside
        className={`CartDrawer__menu${cartDrawerState === true ? ' open' : ''}`}
      >
        <div className='CartDrawer__inner'>
          <button
            className='CardDrawer__closeButton'
            onClick={() => dispatch(openCartDrawer(false))}
          >
            X
          </button>

          <h3>CART ITEMS:</h3>

          {renderEmptyCart()}

          <ul className='CardDrawer__list'>
            {cartItems.map(item => {
              return (
                // Each line item generates a new UUID to differentiate updated quantity on the same item
                <li key={uuidv4()} className='CardDrawer__item'>
                  <div className='CardDrawer__content'>Item: {item.title}</div>
                  <div className='CardDrawer__content'>Qty: {item.quantity}</div>
                  <div className='CardDrawer__content'>Price: ${item.price}</div>
                </li>
              )
            })}
          </ul>

          <h4>TOTAL: ${cartTotal}</h4>
        </div>
      </aside>
    </>
  )
}

export default CartDrawer
