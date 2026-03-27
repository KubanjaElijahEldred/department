export default function ProductDetailsPage() {
  return (
    <section className="section-card detail-layout">
      <div className="detail-gallery">
        <div>Front View</div>
        <div>Side View</div>
        <div>Back View</div>
      </div>
      <div className="detail-content">
        <span className="eyebrow">Product Details</span>
        <h1>Dell Latitude Laptop</h1>
        <p>
          Product detail page with price, category, rating, reviews, favorites,
          and messaging options between buyer and seller.
        </p>
        <div className="detail-meta">
          <strong>$480</strong>
          <span>Category: Electronics</span>
          <span>Rating: 4.7</span>
        </div>
        <div className="hero-actions">
          <button className="primary-btn">Add to Favorites</button>
          <button className="ghost-btn">Message Seller</button>
        </div>
      </div>
    </section>
  );
}
