import ProductCard from "../components/ProductCard";
import { categories, products } from "../data/mockData";

export default function ProductListingPage() {
  return (
    <div className="page-grid">
      <section className="filters-panel">
        <h1>Product Listing</h1>
        <div className="filter-row">
          <input type="search" placeholder="Search by product or seller" />
          <select>
            <option>All Categories</option>
            {categories.map((category) => <option key={category}>{category}</option>)}
          </select>
          <select>
            <option>Filter by Rating</option>
            <option>4.5 and above</option>
            <option>4.0 and above</option>
          </select>
          <select>
            <option>Filter by Price</option>
            <option>Under $100</option>
            <option>$100 - $500</option>
          </select>
        </div>
      </section>
      <section className="section-card">
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
