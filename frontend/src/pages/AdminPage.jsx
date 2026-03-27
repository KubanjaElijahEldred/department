export default function AdminPage() {
  return (
    <div className="dashboard-grid">
      <section className="section-card">
        <h1>Admin Panel</h1>
        <p>Manage users, products, conversations, and system analytics.</p>
      </section>
      <section className="section-card">
        <h2>Analytics</h2>
        <ul>
          <li>Total users: 1,240</li>
          <li>Total products: 386</li>
          <li>Open chats: 54</li>
        </ul>
      </section>
      <section className="section-card">
        <h2>Moderation</h2>
        <ul>
          <li>Approve new products</li>
          <li>Disable fake listings</li>
          <li>Review reported users</li>
        </ul>
      </section>
    </div>
  );
}
