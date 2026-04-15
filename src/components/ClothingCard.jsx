import { useNavigate } from "react-router-dom";
import "./ClothingCard.css";

const StarIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b" strokeWidth="1">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export default function ClothingCard({ item }) {
  const navigate = useNavigate();

  return (
    <div className="clothing-card" onClick={() => navigate(`/item/${item.id}`)}>
      <div className="card-image-wrap">
        <img src={item.image} alt={item.name} className="card-image" loading="lazy" />
        <span className="card-category">{item.category}</span>
      </div>
      <div className="card-body">
        <p className="card-brand">{item.brand}</p>
        <h3 className="card-name">{item.name}</h3>
        <div className="card-meta">
          <div className="card-rating">
            <StarIcon />
            <span>{item.rating}</span>
            <span className="card-reviews">({item.reviews})</span>
          </div>
          <p className="card-price">₹{item.price.toLocaleString("en-IN")}</p>
        </div>
        <div className="card-stores">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span>{item.stores.length} stores nearby</span>
        </div>
      </div>
    </div>
  );
}
