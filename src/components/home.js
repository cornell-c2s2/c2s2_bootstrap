import React from "react";
import hero from "../assets/img/hero-img.png";
import teamPhoto from "../assets/img/team/full_team.jpg";

//AlumniCompanies
import AlumniCompanies from "./alumnicompanies.js";

function Home() {
  return (
    <>
      <main id="main">
        <section id="hero" className="d-flex align-items-center">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                <h1>Welcome to C2S2!</h1>
                <h2>
                  A Cornell Engineering Project Team dedicated to undergraduate
                  semiconductor design
                </h2>
                <div>
                  <a href="/blog" className="btn-get-started scrollto">
                    C2S2 Blogs
                  </a>
                  <div>
                    <a
                      href="https://community.cadence.com/cadence_blogs_8/b/can/posts/spotlight-cornell-custom-silicon-systems"
                      className="btn-get-started scrollto"
                    >
                      Cadence Community Spotlight
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://news.cornell.edu/stories/2024/05/students-revive-classic-microchip-fabrication-open-source-tools"
                      className="btn-get-started scrollto"
                    >
                      Cornell Chronicle - Micro Chip
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://news.cornell.edu/stories/2024/11/cornell-microchip-designers-inspire-students-fox-hunt"
                      className="btn-get-started scrollto"
                    >
                      Cornell Chronicle - Fox Hunt Event
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 hero-img">
                <img
                  loading="eager"
                  decoding="async"
                  fetchpriority="high"
                  src={hero}
                  className="img-fluid animated"
                  alt=""
                  draggable="false"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="about about-overview">
          <div className="container">
            <div className="row align-items-start gy-5">
              <div
                className="col-lg-5 about-img"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <img
                  loading="lazy"
                  decoding="async"
                  src={teamPhoto}
                  className="img-fluid"
                  alt="C2S2 team members"
                />
              </div>

              <div
                className="col-lg-7 about-copy"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <h2>About Us</h2>
                <p>
                  Silicon CMOS chips are at the heart of every modern computing
                  device, from the smallest Internet-of-Things device to the
                  largest supercomputer. Yet undergraduate students rarely have
                  the opportunity to fully specify, design, implement, test,
                  fabricate, and evaluate a computer chip. Until recently, there
                  was no realistic hands-on way for students to experience the
                  complete chip-design process.
                </p>

                <p>
                  Open-source chip-design tools, implementations, process design
                  kits, and low-cost fabrication services are changing that.
                  Just as open-source software democratized software design,
                  open-source hardware is poised to democratize hardware design.
                </p>

                <p>
                  C2S2 uses this emerging ecosystem to enable undergraduate
                  students to design, fabricate, and evaluate custom chips. Our
                  work brings together custom silicon, circuit boards, and
                  complete software stacks for meaningful applications, giving
                  students experience that is rare across universities and
                  inspiring a new generation of computer-system designers.
                </p>
              </div>
            </div>
          </div>
        </section>
        <AlumniCompanies />
      </main>
    </>
  );
}

export default Home;
