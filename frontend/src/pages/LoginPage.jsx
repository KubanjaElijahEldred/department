export default function LoginPage() {
  return (
    <section className="form-page">
      <div className="section-card form-card">
        <h1>Login</h1>
        <p>Access your account, dashboard, favorites, and chats.</p>
        <form className="form-grid-single">
          <label>Email<input type="email" placeholder="name@example.com" /></label>
          <label>Password<input type="password" placeholder="Enter password" /></label>
          <button type="button" className="primary-btn">Login</button>
          <button type="button" className="ghost-btn">Forgot Password</button>
        </form>
      </div>
    </section>
  );
}
