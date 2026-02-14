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
                      href="https://news.cornell.edu/stories/2024/05/students-revive-classic-microchip-fabrication-open-source-tools"
                      class="btn-get-started scrollto"
                    >
                      Cornell Chronicle - Micro Chip
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://news.cornell.edu/stories/2024/11/cornell-microchip-designers-inspire-students-fox-hunt"
                      class="btn-get-started scrollto"
                    >
                      Cornell Chronicle - Fox Hunt Event
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 hero-img">
                <img src={hero} className="img-fluid animated" alt="" draggable="false" />
              </div>
            </div>
          </div>
        </section>
        <section
          style={{ marginTop: "50px" }}
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <div className="container team-photo-container">
            <h1>Team Photo</h1>
            <img className="team-photo" src={teamPhoto} />
          </div>
        </section>
        <AlumniCompanies />
      </main>
    </>
  );
}

export default Home;
