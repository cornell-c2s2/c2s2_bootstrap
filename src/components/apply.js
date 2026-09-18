import React from "react";

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
                  <p className="description">
                    For first-year and transfer students.
                  </p>
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
                  <h4 className="title">Upcoming Info Session</h4>
                  <p className="description mb-1">
                    Monday, September 28th, from 5–6 PM
                  </p>
                  <p className="description mb-0">Rhodes Hall 571</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Apply;
