import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="brand">
        <img src="../../image.png" alt="Bugema University logo" />
        <div>
          <strong>Bugema Marketplace</strong>
          <span>Buy, sell, connect</span>
        </div>
      </div>

      <div className="search-shell">
        <input type="search" placeholder="Search products, categories, or sellers" />
      </div>

      <nav className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/upload">Upload</NavLink>
        <NavLink to="/chat">Chat</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/admin">Admin</NavLink>
        <NavLink to="/login">Login</NavLink>
      </nav>
    </header>
  );
}
