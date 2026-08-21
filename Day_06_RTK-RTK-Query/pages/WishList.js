import { useSelector } from "react-redux"
import WishListItem from "../components/WishListItem"
import { selectWishListProducts } from "../store/slices/wishListSlice"

export default function WishList() {
    const wishListItems = useSelector(selectWishListProducts)
    return (
        <div className="wishList-container">
            <h2>Items in Your WishList</h2>
            <div className="wishList-header wishList-item-container">
                <div className="wishList-item">Item</div>
                <div className="item-price">Price</div>
                <div></div>
                <div className="total">Total</div>
            </div>

            {
                wishListItems.map(({ imageUrl, price, rating, title, productId }) =>
                    <WishListItem
                        key={productId}
                        productId={productId}
                        imageUrl={imageUrl}
                        price={price}
                        title={title}
                        rating={rating}
                    />
                )
            }

            <div className="wishList-header wishList-item-container">
                <div className="wishList-item"></div>
                <div className="item-price"></div>
                <div>
                
            </div>
                <div className="total">${wishListItems.length === 0 ? 0 : wishListItems.reduce((acc, curItem) => acc + curItem.price, 0).toFixed(2)}</div>
            </div>
        </div>
    )
}
