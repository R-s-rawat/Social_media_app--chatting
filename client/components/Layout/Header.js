import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link href="/">
              <a className="navbar-brand">SocialEcho</a>
            </Link>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <Link href="/about">
                  <a className="nav-link">
                    About
                  </a>
                </Link>
              </li>
                <li className="nav-item">
                <Link href="/register">
                  <a className="nav-link">
                    Register
                  </a>
                </Link>
              </li>
                <li className="nav-item">
                <Link href="/login">
                  <a className="nav-link">
                    Login
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link disabled" aria-disabled="true">
                    Disabled
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;