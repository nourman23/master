import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useIsAuthenticated } from "react-auth-kit";
// import logo from "../images/logo.png";
export const Nav = () => {
  const isAuthenticated = useIsAuthenticated();

  return (
    <>
      {/* <nav
        className="navbar navbar-expand-lg  w-100 "
        style={{ backgroundColor: "#3b3b3b6b", zIndex: 9999 }}
        // style={{ zIndex: 9999 }}
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-start">
            <a href="/">
              <img src={logo} alt="logo" width="40%" />
            </a>
          </div>
          <div
            className="collapse navbar-collapse justify-content-end mx-4"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav  navbar-expand-lg mx-5 ">
              <li className="nav-item px-3">
                <NavLink
                  to="/"
                  className="nav-link text-white"
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item px-3">
                <NavLink
                  to="/services"
                  className="nav-link text-white"
                  aria-current="page"
                >
                  Services
                </NavLink>
              </li>
              <li className="nav-item px-3 ">
                <NavLink
                  to="/contact"
                  className="nav-link text-white"
                  aria-current="page"
                >
                  Contact
                </NavLink>
              </li>
              <li className="nav-item px-3">
                <NavLink
                  to="/about"
                  className="nav-link text-white"
                  aria-current="page"
                >
                  About
                </NavLink>
              </li>
            </ul>
          </div>
          {isAuthenticated() ? (
            <>
              <Link className="btn bg-color" to="/profile">
                <i className="fa fa-light fa-user"></i>
              </Link>
            </>
          ) : (
            <a className="btn bg-color" href="login">
              <i className="fa fa-light fa-right-to-bracket pr-1"></i>Login
            </a>
          )}

          <div>
    <a className="btn bg-color mr-4" href="login"><i className="fa fa-light fa-user"></i></a>
    <a className="btn bg-color mr-4" href="login"><i className="fa fa-solid fa-user-vneck-hair-long"></i></a>
</div> 
        </div>
      </nav> */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow w-100 border-top border-5 border-primary sticky-top p-0">
        <NavLink
          to="/"
          className="navbar-brand bg-primary d-flex align-items-center px-4 px-lg-5"
        >
          <h2 className="mb-2 text-white">MOVER</h2>

          {/* <img src={logo} alt="logo" width="40%" /> */}
        </NavLink>
        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <NavLink to="/" className="nav-item nav-link ">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-item nav-link">
              About
            </NavLink>
            <NavLink to="/services" className="nav-item nav-link">
              Services
            </NavLink>
            <NavLink to="/contact" className="nav-item nav-link">
              Contact
            </NavLink>
            {/* <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Pages
              </a>
              <div className="dropdown-menu fade-up m-0">
                <a href="price.html" className="dropdown-item">
                  Pricing Plan
                </a>
                <a href="feature.html" className="dropdown-item">
                  Features
                </a>
                <a href="quote.html" className="dropdown-item">
                  Free Quote
                </a>
                <a href="team.html" className="dropdown-item">
                  Our Team
                </a>
                <a href="testimonial.html" className="dropdown-item">
                  Testimonial
                </a>
                <a href="404.html" className="dropdown-item">
                  404 Page
                </a>
              </div>
            </div> */}
          </div>
          {/* <h4 className="m-0 pe-lg-5 d-none d-lg-block">
            <i className="fa fa-headphones text-primary me-3" />
            +012 345 6789
          </h4> */}
          {isAuthenticated() ? (
            <>
              <Link
                className="btn bg-color rounded-circle mr-4"
                to="/profile"
                style={{ height: "40px" }}
              >
                <i className="fa fa-light fa-user"></i>
              </Link>
            </>
          ) : (
            <Link
              className="btn bg-color mr-4 "
              to="login"
              style={{ height: "40px" }}
            >
              <i className="fa fa-light fa-right-to-bracket pr-1"></i>Login
            </Link>
          )}
        </div>
      </nav>
    </>
  );
};
