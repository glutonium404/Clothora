import "./Profile.css";

export default function Profile() {
  const stats = [
    { label: "Saved Stores", value: 3 },
    { label: "Wishlist", value: 12 },
    { label: "Orders", value: 5 },
  ];

  const preferences = [
    { icon: "👗", label: "Favourite Category", value: "Casual Wear" },
    { icon: "📍", label: "Your Location", value: "Sylhet, Bangladesh" },
    { icon: "🔔", label: "Notifications", value: "Enabled" },
    { icon: "🌐", label: "Language", value: "English" },
  ];

  return (
    <div className="profile-page">
      {/* Header */}
      <div className="profile-header">
        <div className="profile-avatar-wrap">
          <div className="profile-avatar">C</div>
          <div className="avatar-edit-dot">✎</div>
        </div>
        <h1 className="profile-name">Clothora</h1>
        <p className="profile-email">clothora@email.com</p>
      </div>

      {/* Stats */}
      <div className="profile-stats">
        {stats.map((s) => (
          <div key={s.label} className="stat-item">
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      {/* About Clothora */}
      <div className="profile-section">
        <h2 className="profile-section-title">About Clothora</h2>
        <div className="about-card">
          <p className="about-text">
            Clothora bridges online discovery with offline buying. Browse
            clothes online and visit the nearest store to touch, feel, and
            purchase — saving your time and avoiding post-purchase regret.
          </p>
          <div className="about-features">
            {[
              { icon: "🗺️", text: "Larjun.sharmaocation-based store finder" },
              { icon: "👕", text: "Discover clothes before visiting stores" },
              { icon: "⏱️", text: "Save time, skip unnecessary trips" },
              { icon: "🤝", text: "Feel the fabric before you buy" },
            ].map((f) => (
              <div key={f.text} className="about-feature-row">
                <span>{f.icon}</span>
                <span>{f.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Preferences */}
      <div className="profile-section">
        <h2 className="profile-section-title">Preferences</h2>
        <div className="pref-list">
          {preferences.map((p) => (
            <div key={p.label} className="pref-item">
              <span className="pref-icon">{p.icon}</span>
              <div className="pref-info">
                <span className="pref-label">{p.label}</span>
                <span className="pref-value">{p.value}</span>
              </div>
              <span className="pref-arrow">›</span>
            </div>
          ))}
        </div>
      </div>

      {/* Sign Out */}
      <div className="profile-section">
        <button className="signout-btn">Sign Out</button>
      </div>
    </div>
  );
}
