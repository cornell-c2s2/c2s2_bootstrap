import React from "react";
import logo from "../assets/img/logo.png";

import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Header() {
  const location = useLocation();
  const [path, setPath] = useState("");
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    // Extract URL details whenever the location changes
    const path = location.pathname;

    // Update state
    setPath(path);
  }, [location]);

  return (
    <header id="header" className="fixed-top d-flex align-items-center">
      <div className="container d-flex align-items-center justify-content-between">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="C2S2 Logo" className="img-fluid" />
          </a>
        </div>

        <nav id="navbar" className={mobile ? "navbar navbar-mobile" : "navbar"}>
          <ul>
            <li>
              <a
                className={`nav-link scrollto ${path == "/" ? "active" : ""}`}
                href="/"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className={`nav-link scrollto ${
                  path == "/about" ? "active" : ""
                }`}
                href="/about"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                className={`nav-link scrollto ${
                  path == "/chip-gallery" ? "active" : ""
                }`}
                href="/chip-gallery"
              >
                Chip Gallery
              </a>
            </li>

            <li className="dropdown">
              <a
                className={`nav-link scrollto ${
                  path == "/team" ? "active" : ""
                }`}
                href="/team"
              >
                <span>Meet the Team</span>{" "}
                <i className="bi bi-chevron-down"></i>
              </a>
              <ul>
                <li>
                  <Link to="/team#analog" onClick={() => setMobile(false)}>
                    Analog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/team#business-ops"
                    onClick={() => setMobile(false)}
                  >
                    Business Operations
                  </Link>
                </li>
                <li>
                  <Link
                    to="/team#design-verification"
                    onClick={() => setMobile(false)}
                  >
                    Design Verification
                  </Link>
                </li>
                <li>
                  <Link to="/team#digital" onClick={() => setMobile(false)}>
                    Digital Freshmen
                  </Link>
                </li>
                <li>
                  <Link
                    to="/team#physical-design"
                    onClick={() => setMobile(false)}
                  >
                    Physical Design
                  </Link>
                </li>
                <li>
                  <Link to="/team#platforms" onClick={() => setMobile(false)}>
                    Platforms
                  </Link>
                </li>
                <li>
                  <Link to="/team#rfic" onClick={() => setMobile(false)}>
                    RF
                  </Link>
                </li>
                <li>
                  <Link to="/team#rtl-design" onClick={() => setMobile(false)}>
                    RTL Design
                  </Link>
                </li>
                <li>
                  <Link to="/team#software" onClick={() => setMobile(false)}>
                    Software
                  </Link>
                </li>
                <li>
                  <Link to="/alumni" onClick={() => setMobile(false)}>
                    Alumni
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <a
                className={`nav-link scrollto ${
                  path == "/blog" ? "active" : ""
                }`}
                href="/blog"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                className={`nav-link scrollto ${
                  path == "/sponsors" ? "active" : ""
                }`}
                href="/sponsors"
              >
                Sponsors
              </a>
            </li>
            <li>
              <a className="getstarted scrollto" href="/apply">
                Apply
              </a>
            </li>
          </ul>
          <i
            onClick={() => setMobile(!mobile)}
            className={`bi mobile-nav-toggle ${mobile ? "bi-x" : "bi-list"}`}
          ></i>
        </nav>
      </div>
    </header>
  );
}

export default Header;
