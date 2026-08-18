import { useDispatch } from "react-redux"
import { CartItemQuantityDecrease, CartItemQuantityIncrease } from "../store/slices/cartSlice";

export default function CartItem({ productId, title, rating, price, imageUrl, quantity }) {
  // console.log(imageUrl)
  // console.log(quantity)
  const dispatch = useDispatch();
  return (
    <div className="cart-item-container">
      <div className="cart-item">
        <img src={imageUrl} alt={title} />
        <div>
          <h3>{title}</h3>
          <p>{rating} ★ ★ ★ ★</p>
        </div>
      </div>
      <div className="item-price">${price}</div>
      <div className="item-quantity">
        <button onClick={() => {dispatch(CartItemQuantityDecrease(productId))}}>-</button>
        <span>{quantity}</span>
        <button onClick={() => {dispatch(CartItemQuantityIncrease(productId))}}>+</button>
      </div>
      <div className="item-total">${quantity * price}</div>
    </div>
  )
}
