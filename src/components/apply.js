import React from "react";
import recruitmentFlyer from "../assets/img/apply/recruitment-flyer.webp";

const Apply = () => {
  const underclassmenFormUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLScJM43tTYX9PDSqFV5Y_KXmL_Jm8z4jTIwN4YJHQwDHLbMGKw/viewform?usp=dialog";

  return (
    <>
      <main id="main">
        <section id="apply" className="breadcrumbs">
          <div className="container">
            <div className="section-title"></div>
          </div>
        </section>

        <section id="applications" className="services section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <p>Applications</p>
            </div>

            <div className="row justify-content-center">
              <div className="col-12 text-center mb-4">
                <h4 className="title">Applications are open!</h4>
              </div>
            </div>

            <div className="row justify-content-center g-4 align-items-stretch">
              <div
                className="col-12 col-md-6 d-flex"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="icon-box w-100 h-100">
                  <div className="icon">
                    <i className="bx bx-file"></i>
                  </div>
                  <h4 className="title">Underclassmen Application</h4>
                  <p className="description mb-1">
                    For first-year and transfer students.
                  </p>
                  <p className="description">Due Thursday, October 15th</p>
                  <a
                    href={underclassmenFormUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="application-btn"
                  >
                    Open Application Form
                  </a>
                </div>
              </div>

              <div
                className="col-12 col-md-6 d-flex"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="icon-box w-100 h-100">
                  <div className="icon">
                    <i className="bx bx-calendar-event"></i>
                  </div>
                  <h4 className="title">Upcoming Office Hours</h4>
                  <p className="description mb-1">
                    Wednesday, October 7th, from 5–6 PM
                  </p>
                  <p className="description mb-0">Rhodes Hall 571</p>
                </div>
              </div>
            </div>

            <figure
              className="application-flyer"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img
                src={recruitmentFlyer}
                alt="C2S2 recruitment flyer: applications for first-year and transfer students are due Thursday, October 15th, with office hours on Wednesday, October 7th from 5–6 PM in Rhodes Hall 571."
                width="1545"
                height="1999"
                loading="lazy"
                decoding="async"
              />
              <svg
                className="application-flyer-event-update"
                viewBox="0 0 1545 1999"
                preserveAspectRatio="xMidYMid meet"
                aria-hidden="true"
                focusable="false"
              >
                <rect x="825" y="930" width="700" height="255" fill="#000" />
                <text x="1170" y="996" className="application-flyer-event-heading">
                  OFFICE HOURS:
                </text>
                <rect x="860" y="1020" width="620" height="156" fill="#c90000" />
                <text x="1170" y="1087" className="application-flyer-event-date">
                  WEDNESDAY, OCT. 7
                </text>
                <text x="1170" y="1143" className="application-flyer-event-time">
                  FROM 5–6 PM
                </text>
              </svg>
            </figure>
          </div>
        </section>
      </main>
    </>
  );
};

export default Apply;
