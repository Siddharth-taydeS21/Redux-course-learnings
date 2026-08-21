import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectCartItems } from '../store/slices/cartSlice'
import { selectWishListProducts } from '../store/slices/wishListSlice'

export default function Header() {
    const cartItems = useSelector(selectCartItems)
    const wishListItems = useSelector(selectWishListProducts)
    
    return (
        <header>
            <div className="header-contents">
                <h1>
                    <Link to="/">Shopee</Link>
                </h1>
                <div className='header-buttons'>
                    <Link className="wishlist-icon" to="/wishlist">
                        <i className="ri-home-heart-line"></i>
                        <i className="cart-items-count">{wishListItems.length}</i>
                    </Link>
                    <Link className="cart-icon" to="/cart">
                        <i className="ri-shopping-cart-fill"></i>
                        <i className="cart-items-count">{cartItems.reduce((acc, curItem) => acc + curItem.quantity, 0)}</i>
                    </Link>
                </div>
            </div>
        </header>
    )
}