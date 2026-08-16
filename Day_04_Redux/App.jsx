import { useSelector } from 'react-redux'
import './App.css'
import ProductCard from './components/ProductCard';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';

export default function App() {
const productsList = useSelector(state => state.allProducts);
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
