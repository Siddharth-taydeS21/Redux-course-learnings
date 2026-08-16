import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Header() {
    const cartItems = useSelector(state => state.cartList)
    const wishListItems = useSelector(state => state.wishList)
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
                        <i className="cart-items-count">{cartItems.reduce((acc, curItem) => acc + curItem.productQuantity, 0)}</i>
                    </Link>
                </div>
            </div>
        </header>
    )
}