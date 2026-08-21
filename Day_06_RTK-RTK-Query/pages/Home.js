import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'
import { handleError, selectAllProducts, selectAllProductsError, selectAllProductsLoading, setLoading, updateProductList } from '../store/slices/productsSlice';
import { fetchData } from '../middlewares/apiMiddleware';

export default function Home() {
  const productsList = useSelector(selectAllProducts)
  const isLoading = useSelector(selectAllProductsLoading);
  const isError = useSelector(selectAllProductsError);
  const dispatch = useDispatch();
  useEffect(() => {

    dispatch(fetchData({
      url_endPoint: 'products',
      onStart: setLoading.type,
      onSuccess: updateProductList.type,
      onError: handleError.type,
    }))

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
