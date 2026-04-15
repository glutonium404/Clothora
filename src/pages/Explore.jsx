import { useState } from "react";
import { clothes } from "../data/clothes";
import ClothingCard from "../components/ClothingCard";
import "./Explore.css";

const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

export default function Explore() {
  const [query, setQuery] = useState("");

  const results = query.trim()
    ? clothes.filter(
        (item) =>
          item.name.toLowerCase().includes(query.toLowerCase()) ||
          item.brand.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase()) ||
          item.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
      )
    : [];

  return (
    <div className="explore-page">
      <div className="explore-header">
        <h1 className="explore-title">Explore</h1>
        <p className="explore-sub">Search clothes, brands & categories</p>
        <div className="explore-search-bar">
          <SearchIcon />
          <input
            type="text"
            placeholder="e.g. denim jacket, casual, ethnic..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="explore-input"
            autoFocus
          />
          {query && (
            <button className="clear-btn" onClick={() => setQuery("")}>
              ✕
            </button>
          )}
        </div>
      </div>

      {!query && (
        <div className="explore-suggestions">
          <p className="suggestion-label">Popular searches</p>
          <div className="suggestion-chips">
            {["Casual", "Ethnic", "Formal", "Denim", "Summer", "Floral"].map(
              (s) => (
                <button
                  key={s}
                  className="suggestion-chip"
                  onClick={() => setQuery(s)}
                >
                  {s}
                </button>
              )
            )}
          </div>
        </div>
      )}

      {query && results.length === 0 && (
        <div className="explore-empty">
          <p className="empty-icon">😕</p>
          <p className="empty-title">No items found</p>
          <p className="empty-sub">Try different keywords</p>
        </div>
      )}

      {results.length > 0 && (
        <div className="explore-results">
          <p className="results-label">{results.length} results for "{query}"</p>
          <div className="clothes-grid">
            {results.map((item) => (
              <ClothingCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
