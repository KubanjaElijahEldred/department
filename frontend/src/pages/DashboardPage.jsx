export default function DashboardPage() {
  return (
    <div className="dashboard-grid">
      <section className="section-card">
        <h1>User Dashboard</h1>
        <p>Profile summary, recent uploads, saved products, and order/activity widgets.</p>
      </section>
      <section className="section-card">
        <h2>Profile</h2>
        <ul>
          <li>Full name and avatar</li>
          <li>Favorites and wishlist</li>
          <li>Password reset</li>
        </ul>
      </section>
      <section className="section-card">
        <h2>Recent Products</h2>
        <ul>
          <li>Dell Latitude Laptop</li>
          <li>Study Desk</li>
          <li>Wireless Headphones</li>
        </ul>
      </section>
    </div>
  );
}
