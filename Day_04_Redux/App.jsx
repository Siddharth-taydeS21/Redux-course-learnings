import { useSelector } from 'react-redux'
import '/App.css'
import ProductCard from './components/ProductCard';

export default function App() {
const productsList = useSelector(state => state.allProducts);
  return (
    <div className='products-container'>
        {
            productsList.map(({title, rating, price, image, id}) => {
                // console.log(product)
                return <ProductCard 
                key={id}
                title={title}
                imageUrl={image}
                price={price}
                rating={rating.rate} />
            })
        }
    </div>
  )
}
