import { useParams, useNavigate } from "react-router-dom";
import { clothes } from "../data/clothes";
import "./ClothingDetail.css";

const BackIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b" strokeWidth="1">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const LocationIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.28h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const ClockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const DirectionsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="3 11 22 2 13 21 11 13 3 11" />
  </svg>
);

export default function ClothingDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = clothes.find((c) => c.id === Number(id));

  if (!item) {
    return (
      <div className="not-found">
        <p>Item not found.</p>
        <button onClick={() => navigate("/")}>← Back to Home</button>
      </div>
    );
  }

  return (
    <div className="detail-page">
      {/* Image Section */}
      <div className="detail-image-wrap">
        <img src={item.image} alt={item.name} className="detail-image" />
        <button className="back-btn" onClick={() => navigate(-1)}>
          <BackIcon />
        </button>
        <span className="detail-category-badge">{item.category}</span>
      </div>

      {/* Content */}
      <div className="detail-content">
        {/* Title & Price */}
        <div className="detail-header">
          <div>
            <p className="detail-brand">{item.brand}</p>
            <h1 className="detail-name">{item.name}</h1>
          </div>
          <div className="detail-price">₹{item.price.toLocaleString("en-IN")}</div>
        </div>

        {/* Rating */}
        <div className="detail-rating-row">
          {[...Array(5)].map((_, i) => (
            <span key={i} style={{ opacity: i < Math.floor(item.rating) ? 1 : 0.3 }}>
              <StarIcon />
            </span>
          ))}
          <span className="detail-rating-text">{item.rating} ({item.reviews} reviews)</span>
        </div>

        {/* Description */}
        <p className="detail-desc">{item.description}</p>

        {/* Details */}
        <div className="detail-info-grid">
          <div className="detail-info-item">
            <span className="info-label">Fabric</span>
            <span className="info-value">{item.fabric}</span>
          </div>
          <div className="detail-info-item">
            <span className="info-label">Category</span>
            <span className="info-value">{item.category}</span>
          </div>
        </div>

        {/* Sizes */}
        <div className="detail-section">
          <h3 className="section-title">Available Sizes</h3>
          <div className="sizes-row">
            {item.sizes.map((size) => (
              <span key={size} className="size-chip">{size}</span>
            ))}
          </div>
        </div>

        {/* Colors */}
        <div className="detail-section">
          <h3 className="section-title">Colors</h3>
          <div className="colors-row">
            {item.colors.map((color) => (
              <span key={color} className="color-chip">{color}</span>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div className="tags-row">
          {item.tags.map((tag) => (
            <span key={tag} className="tag-chip">#{tag}</span>
          ))}
        </div>

        {/* Nearby Stores */}
        <div className="detail-section stores-section">
          <div className="stores-header">
            <LocationIcon />
            <h3 className="section-title">Nearby Stores ({item.stores.length})</h3>
          </div>
          <p className="stores-sub">Find and visit a store near you to touch, feel and buy</p>

          <div className="stores-list">
            {item.stores.map((store) => (
              <div key={store.id} className={`store-card ${!store.inStock ? "out-of-stock" : ""}`}>
                <div className="store-top">
                  <div className="store-info">
                    <h4 className="store-name">{store.name}</h4>
                    <div className="store-row">
                      <LocationIcon />
                      <span className="store-address">{store.address}</span>
                    </div>
                    <div className="store-meta">
                      <div className="store-row">
                        <ClockIcon />
                        <span>{store.hours}</span>
                      </div>
                      <div className="store-row">
                        <PhoneIcon />
                        <span>{store.phone}</span>
                      </div>
                    </div>
                  </div>
                  <div className="store-right">
                    <span className="store-distance">
                      <LocationIcon />
                      {store.distance}
                    </span>
                    <span className={`stock-badge ${store.inStock ? "in-stock" : "oos"}`}>
                      {store.inStock ? "In Stock" : "Out of Stock"}
                    </span>
                  </div>
                </div>
                {store.inStock && (
                  <a
                    href={store.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="directions-btn"
                  >
                    <DirectionsIcon />
                    Get Directions
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
