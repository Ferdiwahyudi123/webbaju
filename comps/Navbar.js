import Link from "next/link";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark ">
        <div className="container">
          <a className="navbar-brand">
            <span className="fw-bold text-primary">Flicker's</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main-nav"
            aria-controls="main-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end align-center"
            id="main-nav"
          >
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link ">Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/product">
                  <a className="nav-link">Product</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/login">
                  <a className="btn btn-outline-primary ">Login</a>
                </Link>
              </li>
              <li className="nav-item mr-3">
                <Link href="/register">
                  <a className="btn btn-outline-primary ">Sign Up</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
