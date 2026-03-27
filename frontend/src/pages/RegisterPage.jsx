export default function RegisterPage() {
  return (
    <section className="form-page">
      <div className="section-card form-card">
        <h1>Create Account</h1>
        <p>Register with your name, email, and secure password.</p>
        <form className="form-grid-double">
          <label>Full Name<input type="text" placeholder="Enter full name" /></label>
          <label>Email<input type="email" placeholder="Enter email" /></label>
          <label>Password<input type="password" placeholder="Create password" /></label>
          <label>Confirm Password<input type="password" placeholder="Repeat password" /></label>
          <button type="button" className="primary-btn span-full">Register</button>
        </form>
      </div>
    </section>
  );
}
