import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'

export default function Home() {
  const productsList = useSelector(state => state.allProducts)
  return (
    <div className="products-container">
      {productsList.map(({ id, title, rating, price, image }) => (
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
