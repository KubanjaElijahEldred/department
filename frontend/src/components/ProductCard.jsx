import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-media">
        <span>{product.category}</span>
      </div>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <div className="product-meta">
        <strong>${product.price}</strong>
        <span>{product.rating} stars</span>
      </div>
      <Link to={`/products/${product.id}`} className="button-link">
        View Details
      </Link>
    </article>
  );
}
