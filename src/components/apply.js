import React from "react";

const Apply = () => {
  const upperclassmenFormUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSfOtUdHIxSDMXAi9Sor3kFOB2UwRepmBt7YxTGUKBilWGz3nQ/viewform?usp=dialog";
  const firstYearTransferFormUrl =
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

            <div className="row">
              <div
                className="col-md-6 col-lg-6 col-sm-12 d-block align-items-center"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bx-file"></i>
                  </div>
                  <h4 className="title">Upperclassmen Application</h4>
                  <a
                    href={upperclassmenFormUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="application-btn"
                  >
                    Open Application Form
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
                    <i className="bx bx-file"></i>
                  </div>
                  <h4 className="title">First Year & Transfer Application</h4>
                  <a
                    href={firstYearTransferFormUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="application-btn"
                  >
                    Open Application Form
                  </a>
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
