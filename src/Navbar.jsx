import './modules/Navbar.css'

function Navbar() {
  return (
    <nav className="navbar-container">
      <div className="links-container">
        <a>refundberry</a>
        <a>How it Works</a>
        <a>FAQ</a>
      </div>
      <div className="links-container">
        <a>Login</a>
        <a>Sign Up</a>
      </div>
    </nav>
  );
}

export default Navbar;