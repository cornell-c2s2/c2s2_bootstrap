import React from "react";

function Footer() {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 footer-contact">
              <h3>Cornell Custom Silicon Systems (C2S2)</h3>
              <p>
                <strong>Email:</strong> c2s2@cornell.edu
                <br />
              </p>
              <div className="social-links mt-3">
                <a
                  target="_blank"
                  href="https://www.instagram.com/cornell.silicon/"
                  className="instagram"
                >
                  <i className="bx bxl-instagram"></i>
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/cornell-custom-silicon-systems/"
                  className="linkedin"
                >
                  <i className="bx bxl-linkedin"></i>
                </a>
                <a href="mailto:c2s2@cornell.edu" className="gmail">
                  <i className="bx bx-envelope"></i>
                </a>
                <a href="https://github.com/cornell-c2s2" className="github">
                  <i className="bx bxl-github"></i>
                </a>
                {/* <a href="#" className="twitter">
                  <i className="bx bxl-twitter"></i>
                </a>
                <a href="#" className="facebook">
                  <i className="bx bxl-facebook"></i>
                </a>
                <a href="#" className="google-plus">
                  <i className="bx bxl-skype"></i>
                </a> */}
              </div>
            </div>

            <div className="col-lg-6 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i> <a href="/">Home</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="/about">About Us</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="/chip-gallery">Chip Gallery</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="/team">Meet the Team</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="/blog">Blog</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="/sponsors">Sponsors</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="/apply">Apply</a>
                </li>
              </ul>
            </div>

            {/* <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Web Design</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Web Development</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Product Management</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Marketing</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Graphic Design</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Social Networks</h4>
              <p>
                Cras fermentum odio eu feugiat lide par naso tierra videa magna
                derita valies
              </p>
              <div className="social-links mt-3">
                <a href="#" className="twitter">
                  <i className="bx bxl-twitter"></i>
                </a>
                <a href="#" className="facebook">
                  <i className="bx bxl-facebook"></i>
                </a>
                <a href="#" className="instagram">
                  <i className="bx bxl-instagram"></i>
                </a>
                <a href="#" className="google-plus">
                  <i className="bx bxl-skype"></i>
                </a>
                <a href="#" className="linkedin">
                  <i className="bx bxl-linkedin"></i>
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <div className="container py-4">
        <div className="copyright" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <div>
            &copy; Copyright{" "}
            <strong>
              <span>Cornell Custom Silicon Systems</span>
            </strong>
            . All Rights Reserved
          </div>
          <div>This organization is a registered student organization of Cornell University</div>
        </div>
        <div className="credits">
          <div>Made by <a href="/team#proj-man">PM Subteam &lt;3</a></div>
          <div>
            <a
              href="https://hr.cornell.edu/about/workplace-rights/equal-education-and-employment"
              target="_blank"
              rel="noopener noreferrer"
            >
              Equal Education and Employment
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
