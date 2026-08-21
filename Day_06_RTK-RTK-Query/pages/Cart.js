import React, { useEffect } from 'react'
import CartItem from '../components/CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCartData, handleCartError, selectCartError, selectCartItems, selectCartLoading, setCartLoading } from '../store/slices/cartSlice'
import { handleError, selectAllProducts, setLoading, updateProductList } from '../store/slices/productsSlice'

export default function Cart() {
  const cartItems = useSelector(selectCartItems)
  const allProducts = useSelector(selectAllProducts)
  const isLoading = useSelector(selectCartLoading)
  const error = useSelector(selectCartError)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setLoading())
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        dispatch(updateProductList(data))
      }).catch((err) => {
        console.log(err);
        dispatch(handleError())
      })

    dispatch(setCartLoading())
    fetch('https://fakestoreapi.com/carts/1')
      .then(res => res.json())
      .then(data => {
        dispatch(fetchCartData(data.products))
      }).catch((err) => {
        console.log(err);
        dispatch(handleCartError())
      })
  }, [])

  const newCartItems = cartItems.map(element => {
    const product = allProducts.find(product => product.id === element.productId);
    return { ...product, quantity: element.quantity }
  });

  return isLoading ? (
    <h1 style={{ textAlign: 'center' }}>Loading...</h1>
  ) : error ? (
    <h1 style={{ textAlign: 'center' }}>{error}</h1>
  ) : (
    <div className="cart-container">
      <h2>Items in Your Cart</h2>
      <div className="cart-items-container">
        <div className="cart-header cart-item-container">
          <div className="cart-item">Item</div>
          <div className="item-price">Price</div>
          <div className="quantity">Quantity</div>
          <div className="total">Total</div>
        </div>

        {!cartItems.length || !allProducts.length ? [] : newCartItems.map(({ id, title, rating, price, image, quantity }) => (
          <CartItem
            key={id}
            productId={id}
            title={title}
            price={price}
            quantity={quantity}
            imageUrl={image}
            rating={rating.rate}
          />
        ))}
        <div className="cart-header cart-item-container">
          <div></div>
          <div></div>
          <div></div>
          <div className="total">
            ${!cartItems.length || !allProducts.length ? 0 : newCartItems.reduce((acc, curItem) => acc + curItem.price, 0).toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  )
}
