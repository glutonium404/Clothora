import { useNavigate } from "react-router-dom";
import "./Wishlist.css";

export default function Wishlist() {
  const navigate = useNavigate();
  return (
    <div className="wishlist-page">
      <div className="wishlist-header">
        <h1 className="wishlist-title">Wishlist</h1>
        <p className="wishlist-sub">Items you love</p>
      </div>
      <div className="wishlist-empty">
        <p className="we-icon">🤍</p>
        <p className="we-title">Your wishlist is empty</p>
        <p className="we-sub">Save items you like to find them later</p>
        <button className="browse-btn" onClick={() => navigate("/")}>
          Browse Clothes
        </button>
      </div>
    </div>
  );
}
