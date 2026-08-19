import { useDispatch } from "react-redux"
import { removeWishListItem } from "../store/slices/wishListSlice";

export default function WishListItem({ productId, imageUrl, title, rating, price }) {
    const dispatch = useDispatch();
    return (
        <div className="wishList-item-container">
            <div className="wishList-item">
                <img src={imageUrl} alt={title} />
                <div>
                    <h3>{title}</h3>
                    <p>{rating} ★ ★ ★ ★</p>
                </div>
            </div>
            <div className="item-price">${price}</div>
            <button className="wishList-removeItem-btn" onClick={() => {dispatch(removeWishListItem(productId))}}>
                Remove item
            </button>
            <div className="item-total">${price}</div>
        </div>
    )
}
