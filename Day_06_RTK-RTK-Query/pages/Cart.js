import React from 'react'
import CartItem from '../components/CartItem'
import { useSelector } from 'react-redux'

export default function Cart() {
  const cartItems = useSelector(state => state.cartList)
  // console.log(cartItems)

  return (
    <div className="cart-container">
      <h2>Items in Your Cart</h2>
      <div className="cart-items-container">
        <div className="cart-header cart-item-container">
          <div className="cart-item">Item</div>
          <div className="item-price">Price</div>
          <div className="quantity">Quantity</div>
          <div className="total">Total</div>
        </div>
        
        {cartItems.map(({ productId, title, rating, price, imageUrl, productQuantity }) => (
          <CartItem
            key={productId}
            productId={productId}
            title={title}
            price={price}
            quantity={productQuantity}
            imageUrl={imageUrl}
            rating={rating}
          />
        ))}
        <div className="cart-header cart-item-container">
          <div></div>
          <div></div>
          <div></div>
          <div className="total">${cartItems.length === 0 ? 0 : cartItems.reduce((acc, curItem) => acc + curItem.price, 0).toFixed(2)}</div>
        </div>
      </div>
    </div>
  )
}
