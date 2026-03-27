import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { products } from "../data/mockData";

export default function HomePage() {
  return (
    <div className="page-grid">
      <section className="hero-panel">
        <div>
          <span className="eyebrow">Modern Full-Stack Marketplace</span>
          <h1>Secure auth, product uploads, search, chat, reviews, and dashboards.</h1>
          <p>
            This starter recreates your mini website as a scalable marketplace platform
            with account creation, login, product discovery, and admin oversight.
          </p>
          <div className="hero-actions">
            <Link to="/register" className="primary-btn">Create Account</Link>
            <Link to="/products" className="ghost-btn">Browse Products</Link>
          </div>
        </div>
        <div className="hero-stats">
          <div><strong>JWT</strong><span>Auth Ready</span></div>
          <div><strong>DRF</strong><span>API Backend</span></div>
          <div><strong>Cloud</strong><span>Image Storage</span></div>
        </div>
      </section>

      <section className="section-card">
        <div className="section-heading">
          <h2>Featured Products</h2>
          <p>Sample cards for the listing grid and detail page flow.</p>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
