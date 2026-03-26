import React from "react";
import nordtech from "../assets/img/sponsors/nordtech.png";
import amd from "../assets/img/sponsors/amd.png";

function Sponsors() {
  return (
    <main id="main">
      <section id="about" className="breadcrumbs">
        <div className="container">
          <div className="section-title">
            <h1>Sponsors</h1>
          </div>
        </div>
      </section>

      <section>
        <div className="container" data-aos="zoom-in" data-aos-delay="100">
          <h3 style={{ textAlign: "center" }}>
            C2S2 would not be possible without its sponsors. Through their
            generous contributions, they have enabled the team and its members
            to push the boundaries of what is possible at the undergraduate
            level for silicon and system design.
          </h3>
        </div>
      </section>

      <section id="about" className="sponsors">
        <div className="container" data-aos="fade-up">
          <div className="section-title underline">
            <h1>Current Sponsors</h1>
          </div>

          <div className="row justify-content-center align-items-center" style={{ padding: "30px 0" }}>
            <div
              className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 d-flex justify-content-center align-items-center"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="sponsor">
                <a target="_blank" href="https://nordtech.com">
                  <div className="c2s2-alumni-logo-container" style={{ maxWidth: "260px", width: "100%", height: "auto", minHeight: "120px" }}>
                    <img src={nordtech} alt="Nordtech" className="c2s2-alumni-company-logo" />
                  </div>
                </a>
              </div>
            </div>

            <div
              className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 d-flex justify-content-center align-items-center"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="sponsor">
                <a target="_blank" href="https://amd.com">
                  <div className="c2s2-alumni-logo-container" style={{ maxWidth: "260px", width: "100%", height: "auto", minHeight: "120px" }}>
                    <img src={amd} alt="Advanced Micro Devices, Inc." className="c2s2-alumni-company-logo" />
                  </div>
                </a>
              </div>
            </div>

            <div
              className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 d-flex justify-content-center align-items-center"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="sponsor">
                <a target="_blank" href="https://sandia.gov/">
                  <div className="c2s2-alumni-logo-container" style={{ maxWidth: "260px", width: "100%", height: "auto", minHeight: "120px" }}>
                    <img src="/SNL_Stacked_Black_Blue.jpg" alt="Sandia National Laboratories" className="c2s2-alumni-company-logo" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <p>Support C2S2</p>
          </div>

          <div className="row">
            <div
              className="col-md-6 col-lg-6 col-sm-12 d-block align-items-center"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="icon-box">
                <div className="icon">
                  <i className="bx bx-donate-heart"></i>
                </div>
                <h4 className="title">Donate Now</h4>
                <p className="description">
                  C2S2 relies on donations to continuously fund our activities,
                  including chip fabrication, surrounding systems (such as
                  PCBs), and testing equipment. None of our accomplishments
                  would be possible without your donations
                </p>
                <a
                  target="_blank"
                  href="https://securelb.imodules.com/s/1717/giving/interior.aspx?sid=1717&gid=2&pgid=16421&cid=27217&dids=5432&sort=1&bledit=1"
                  className="application-btn"
                >
                  Donate
                </a>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-6 col-sm-12 d-block align-items-center"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="icon-box">
                <div className="icon">
                  <i className="bx bx-envelope"></i>
                </div>
                <h4 className="title">Reach Out</h4>
                <p className="description">
                  If you are interested in becoming a sponsor of C2S2, we'd love
                  to hear from you! To learn more, please contact us using the
                  link below. We are a charitable organization under section
                  501(c) (3), and all donations are tax-deductible
                </p>
                <a
                  target="_blank"
                  href="mailto:c2s2@cornell.edu?subject=Interested%20In%20A%20C2S2%20Sponsorship"
                  className="application-btn"
                >
                  Get In Contact!
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Sponsors;
