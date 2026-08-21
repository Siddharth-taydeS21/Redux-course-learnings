import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'
import { handleError, setLoading, updateProductList } from '../store/slices/productsSlice';
import { fetchCartData, handleCartError, setCartLoading } from '../store/slices/cartSlice';

export default function Home() {
  const productsList = useSelector(state => state.allProducts.list)
  const isLoading = useSelector(state => state.allProducts.loading);
  const isError = useSelector(state => state.allProducts.error);
  const dispatch = useDispatch();
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

    

  }, [])

  return isLoading === true ? (
    <h1 style={{ textAlign: 'center' }}>Loading...</h1>
  ) : isError ? (
    <h1 style={{ textAlign: 'center' }}>{isError}</h1>
  ) : (
    <div className="products-container">
      {
        productsList.map(({ id, title, rating, price, image }) => (

          <ProductCard
            key={id}
            productId={id}
            title={title}
            rating={rating.rate}
            price={price}
            imageUrl={image}
          />

        ))}
    </div>
  )
}
