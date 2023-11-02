import Logo from "../assets/images/logo.png";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light">
    <a className="navbar-brand" href="#">
      <img alt="logo" src={Logo} />
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div
      className="collapse navbar-collapse flex-row-reverse fs-6 "
      id="navbarNav"
    >
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            About Germany
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Services
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Language
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Careers
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Reviews
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Contact Us
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
