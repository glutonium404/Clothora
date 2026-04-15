import { useState } from "react";
import { clothes, categories } from "../data/clothes";
import ClothingCard from "../components/ClothingCard";
import "./Home.css";

const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = clothes.filter((item) => {
    const matchesCategory =
      activeCategory === "All" || item.category === activeCategory;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      !q ||
      item.name.toLowerCase().includes(q) ||
      item.brand.toLowerCase().includes(q) ||
      item.tags.some((t) => t.includes(q));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="home-page">
      {/* Header */}
      <header className="home-header">
        <div className="home-header-top">
          <div>
            <p className="home-greeting">Good morning 👋</p>
            <h1 className="home-title">Find your style</h1>
          </div>
          <div className="home-avatar">A</div>
        </div>

        {/* Search */}
        <div className="search-bar">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search clothes, brands..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>
      </header>

      {/* Category Tabs */}
      <div className="category-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-tab ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Count */}
      <div className="results-bar">
        <span className="results-count">
          {filtered.length} {filtered.length === 1 ? "item" : "items"} found
        </span>
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="clothes-grid">
          {filtered.map((item) => (
            <ClothingCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <p className="empty-icon">🔍</p>
          <p className="empty-title">No results found</p>
          <p className="empty-sub">Try a different search or category</p>
        </div>
      )}
    </div>
  );
}
